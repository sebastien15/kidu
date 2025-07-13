<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $cart = $user->cart;

        if (!$cart) {
            // Create cart if it doesn't exist
            $cart = Cart::create([
                'user_id' => $user->id,
            ]);
        }

        $cart->load(['items.product']);

        // Calculate totals
        $subtotal = 0;
        foreach ($cart->items as $item) {
            $price = $item->product->getPriceForUser($user);
            $subtotal += $price * $item->quantity;
        }

        $cart->subtotal = $subtotal;
        $cart->total_items = $cart->items->sum('quantity');

        return response()->json($cart);
    }

    public function addItem(Request $request)
    {
        $user = $request->user();
        
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $product = Product::findOrFail($request->product_id);

        // Check stock availability
        if ($product->stock < $request->quantity) {
            return response()->json([
                'message' => 'Insufficient stock available'
            ], 422);
        }

        // Get or create cart
        $cart = $user->cart;
        if (!$cart) {
            $cart = Cart::create([
                'user_id' => $user->id,
            ]);
        }

        // Check if product already in cart
        $existingItem = $cart->items()->where('product_id', $request->product_id)->first();

        if ($existingItem) {
            // Update quantity
            $newQuantity = $existingItem->quantity + $request->quantity;
            
            // Check stock again
            if ($product->stock < $newQuantity) {
                return response()->json([
                    'message' => 'Insufficient stock available'
                ], 422);
            }

            $existingItem->update(['quantity' => $newQuantity]);
            $cartItem = $existingItem;
        } else {
            // Add new item
            $cartItem = CartItem::create([
                'cart_id' => $cart->id,
                'product_id' => $request->product_id,
                'quantity' => $request->quantity,
            ]);
        }

        $cart->load(['items.product']);
        
        // Calculate totals
        $subtotal = 0;
        foreach ($cart->items as $item) {
            $price = $item->product->getPriceForUser($user);
            $subtotal += $price * $item->quantity;
        }

        $cart->subtotal = $subtotal;
        $cart->total_items = $cart->items->sum('quantity');

        return response()->json([
            'cart' => $cart,
            'message' => 'Item added to cart successfully'
        ]);
    }

    public function updateItem(Request $request, $id)
    {
        $user = $request->user();
        
        $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        $cartItem = CartItem::with(['product', 'cart'])->findOrFail($id);

        // Check if user owns this cart
        if ($cartItem->cart->user_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Check stock availability
        if ($cartItem->product->stock < $request->quantity) {
            return response()->json([
                'message' => 'Insufficient stock available'
            ], 422);
        }

        $cartItem->update(['quantity' => $request->quantity]);

        $cart = $user->cart->load(['items.product']);
        
        // Calculate totals
        $subtotal = 0;
        foreach ($cart->items as $item) {
            $price = $item->product->getPriceForUser($user);
            $subtotal += $price * $item->quantity;
        }

        $cart->subtotal = $subtotal;
        $cart->total_items = $cart->items->sum('quantity');

        return response()->json([
            'cart' => $cart,
            'message' => 'Cart item updated successfully'
        ]);
    }

    public function removeItem($id)
    {
        $user = request()->user();
        $cartItem = CartItem::with('cart')->findOrFail($id);

        // Check if user owns this cart
        if ($cartItem->cart->user_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $cartItem->delete();

        $cart = $user->cart->load(['items.product']);
        
        // Calculate totals
        $subtotal = 0;
        foreach ($cart->items as $item) {
            $price = $item->product->getPriceForUser($user);
            $subtotal += $price * $item->quantity;
        }

        $cart->subtotal = $subtotal;
        $cart->total_items = $cart->items->sum('quantity');

        return response()->json([
            'cart' => $cart,
            'message' => 'Item removed from cart successfully'
        ]);
    }

    public function clear()
    {
        $user = request()->user();
        $cart = $user->cart;

        if ($cart) {
            $cart->items()->delete();
        }

        return response()->json([
            'message' => 'Cart cleared successfully'
        ]);
    }
} 