<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with(['category', 'supplier']);

        // Filter by category
        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        // Filter by status
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        // Filter by featured
        if ($request->has('featured')) {
            $query->where('is_featured', $request->boolean('featured'));
        }

        // Search by name or description
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('sku', 'like', "%{$search}%");
            });
        }

        // Price filtering
        if ($request->has('min_price')) {
            $query->where('retail_price', '>=', $request->min_price);
        }

        if ($request->has('max_price')) {
            $query->where('retail_price', '<=', $request->max_price);
        }

        $products = $query->paginate($request->get('per_page', 12));

        // Add user-specific pricing
        $user = Auth::user();
        $products->getCollection()->transform(function ($product) use ($user) {
            $product->price_for_user = $product->getPriceForUser($user);
            return $product;
        });

        return response()->json($products);
    }

    public function show($id)
    {
        $product = Product::with(['category', 'supplier'])->findOrFail($id);
        
        $user = Auth::user();
        $product->price_for_user = $product->getPriceForUser($user);

        return response()->json($product);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'sku' => 'required|string|unique:products',
            'retail_price' => 'required|numeric|min:0',
            'wholesale_price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'category_id' => 'required|exists:categories,id',
            'supplier_id' => 'nullable|exists:suppliers,id',
            'status' => 'required|in:active,inactive,out_of_stock',
            'is_featured' => 'boolean',
            'specifications' => 'nullable|array',
            'images' => 'nullable|array',
        ]);

        $product = Product::create($request->all());

        return response()->json([
            'product' => $product,
            'message' => 'Product created successfully'
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'sku' => 'sometimes|required|string|unique:products,sku,' . $id,
            'retail_price' => 'sometimes|required|numeric|min:0',
            'wholesale_price' => 'sometimes|required|numeric|min:0',
            'stock' => 'sometimes|required|integer|min:0',
            'category_id' => 'sometimes|required|exists:categories,id',
            'supplier_id' => 'nullable|exists:suppliers,id',
            'status' => 'sometimes|required|in:active,inactive,out_of_stock',
            'is_featured' => 'boolean',
            'specifications' => 'nullable|array',
            'images' => 'nullable|array',
        ]);

        $product->update($request->all());

        return response()->json([
            'product' => $product,
            'message' => 'Product updated successfully'
        ]);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json([
            'message' => 'Product deleted successfully'
        ]);
    }

    public function featured()
    {
        $products = Product::with(['category', 'supplier'])
            ->where('is_featured', true)
            ->where('status', 'active')
            ->get();

        $user = Auth::user();
        $products->transform(function ($product) use ($user) {
            $product->price_for_user = $product->getPriceForUser($user);
            return $product;
        });

        return response()->json($products);
    }
} 