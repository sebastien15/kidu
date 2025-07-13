<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $query = Order::with(['items.product', 'user']);

        // Filter by user (customers see only their orders, admins see all)
        if (!$user->hasRole('admin')) {
            $query->where('user_id', $user->id);
        }

        // Filter by status
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        // Filter by date range
        if ($request->has('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }

        if ($request->has('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        $orders = $query->orderBy('created_at', 'desc')
                        ->paginate($request->get('per_page', 15));

        return response()->json($orders);
    }

    public function show($id)
    {
        $user = request()->user();
        $order = Order::with(['items.product', 'user'])->findOrFail($id);

        // Check if user can view this order
        if (!$user->hasRole('admin') && $order->user_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json($order);
    }

    public function store(Request $request)
    {
        $user = $request->user();
        
        $request->validate([
            'shipping_address' => 'required|array',
            'billing_address' => 'required|array',
            'payment_method' => 'required|string',
            'shipping_method' => 'required|string',
            'notes' => 'nullable|string',
        ]);

        // Get user's cart
        $cart = $user->cart;
        if (!$cart || $cart->items()->count() === 0) {
            return response()->json([
                'message' => 'Cart is empty'
            ], 422);
        }

        DB::beginTransaction();
        try {
            // Create order
            $order = Order::create([
                'user_id' => $user->id,
                'order_number' => 'ORD-' . strtoupper(Str::random(8)),
                'status' => 'pending',
                'payment_status' => 'pending',
                'shipping_address' => $request->shipping_address,
                'billing_address' => $request->billing_address,
                'payment_method' => $request->payment_method,
                'shipping_method' => $request->shipping_method,
                'notes' => $request->notes,
                'currency' => $user->preferred_currency ?? 'USD',
            ]);

            $subtotal = 0;
            $taxAmount = 0;
            $shippingAmount = 0;

            // Create order items from cart
            foreach ($cart->items as $cartItem) {
                $product = $cartItem->product;
                $price = $product->getPriceForUser($user);
                
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'quantity' => $cartItem->quantity,
                    'unit_price' => $price,
                    'total_price' => $price * $cartItem->quantity,
                ]);

                $subtotal += $price * $cartItem->quantity;
            }

            // Calculate totals (simplified - you might want to add tax and shipping logic)
            $taxAmount = $subtotal * 0.18; // 18% tax
            $shippingAmount = 10.00; // Fixed shipping cost
            $totalAmount = $subtotal + $taxAmount + $shippingAmount;

            // Update order totals
            $order->update([
                'subtotal' => $subtotal,
                'tax_amount' => $taxAmount,
                'shipping_amount' => $shippingAmount,
                'total_amount' => $totalAmount,
            ]);

            // Clear cart
            $cart->items()->delete();

            DB::commit();

            return response()->json([
                'order' => $order->load(['items.product']),
                'message' => 'Order created successfully'
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Failed to create order'
            ], 500);
        }
    }

    public function cancel($id)
    {
        $user = request()->user();
        $order = Order::findOrFail($id);

        // Check if user can cancel this order
        if (!$user->hasRole('admin') && $order->user_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Check if order can be cancelled
        if (!in_array($order->status, ['pending', 'processing'])) {
            return response()->json([
                'message' => 'Order cannot be cancelled in current status'
            ], 422);
        }

        $order->update(['status' => 'cancelled']);

        return response()->json([
            'message' => 'Order cancelled successfully'
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:pending,processing,shipped,delivered,cancelled',
            'tracking_number' => 'nullable|string',
            'estimated_delivery' => 'nullable|date',
        ]);

        $order = Order::findOrFail($id);
        
        $order->update([
            'status' => $request->status,
            'tracking_number' => $request->tracking_number,
            'estimated_delivery' => $request->estimated_delivery,
        ]);

        if ($request->status === 'delivered') {
            $order->update(['delivered_at' => now()]);
        }

        return response()->json([
            'order' => $order,
            'message' => 'Order status updated successfully'
        ]);
    }

    public function allOrders(Request $request)
    {
        // Admin only method to get all orders
        $query = Order::with(['items.product', 'user']);

        // Filter by status
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        // Filter by user
        if ($request->has('user_id')) {
            $query->where('user_id', $request->user_id);
        }

        // Filter by date range
        if ($request->has('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }

        if ($request->has('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        $orders = $query->orderBy('created_at', 'desc')
                        ->paginate($request->get('per_page', 15));

        return response()->json($orders);
    }
} 