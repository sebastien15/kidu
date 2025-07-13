<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class ApiDocumentationController extends Controller
{
    public function index()
    {
        $apiRoutes = [
            'authentication' => [
                'POST /api/register' => 'Register a new user',
                'POST /api/login' => 'Login user',
                'POST /api/logout' => 'Logout user (requires auth)',
                'GET /api/user' => 'Get current user (requires auth)',
            ],
            'products' => [
                'GET /api/products' => 'Get all products',
                'GET /api/products/{id}' => 'Get single product',
                'GET /api/products/featured' => 'Get featured products',
                'POST /api/products' => 'Create product (admin only)',
                'PUT /api/products/{id}' => 'Update product (admin only)',
                'DELETE /api/products/{id}' => 'Delete product (admin only)',
            ],
            'categories' => [
                'GET /api/categories' => 'Get all categories',
                'GET /api/categories/{id}' => 'Get single category',
                'POST /api/categories' => 'Create category (admin only)',
                'PUT /api/categories/{id}' => 'Update category (admin only)',
                'DELETE /api/categories/{id}' => 'Delete category (admin only)',
            ],
            'cart' => [
                'GET /api/cart' => 'Get user cart (requires auth)',
                'POST /api/cart/add' => 'Add item to cart (requires auth)',
                'PUT /api/cart/update/{id}' => 'Update cart item (requires auth)',
                'DELETE /api/cart/remove/{id}' => 'Remove item from cart (requires auth)',
                'DELETE /api/cart/clear' => 'Clear cart (requires auth)',
            ],
            'orders' => [
                'GET /api/orders' => 'Get user orders (requires auth)',
                'GET /api/orders/{id}' => 'Get single order (requires auth)',
                'POST /api/orders' => 'Create order (requires auth)',
                'PUT /api/orders/{id}/cancel' => 'Cancel order (requires auth)',
                'GET /api/orders/all' => 'Get all orders (admin only)',
                'PUT /api/orders/{id}/status' => 'Update order status (admin only)',
            ],
            'users' => [
                'GET /api/profile' => 'Get user profile (requires auth)',
                'PUT /api/profile' => 'Update user profile (requires auth)',
                'PUT /api/password' => 'Update password (requires auth)',
                'GET /api/users' => 'Get all users (admin only)',
                'GET /api/users/{id}' => 'Get single user (admin only)',
                'PUT /api/users/{id}' => 'Update user (admin only)',
                'DELETE /api/users/{id}' => 'Delete user (admin only)',
            ],
            'suppliers' => [
                'GET /api/suppliers' => 'Get all suppliers (admin only)',
                'GET /api/suppliers/{id}' => 'Get single supplier (admin only)',
                'POST /api/suppliers' => 'Create supplier (admin only)',
                'PUT /api/suppliers/{id}' => 'Update supplier (admin only)',
                'DELETE /api/suppliers/{id}' => 'Delete supplier (admin only)',
            ],
        ];

        return view('api-documentation', [
            'apiRoutes' => $apiRoutes,
            'baseUrl' => url('/api'),
            'testInterface' => url('/api-test'),
            'totalEndpoints' => 39
        ]);
    }

    public function json()
    {
        $apiRoutes = [
            'authentication' => [
                'POST /api/register' => 'Register a new user',
                'POST /api/login' => 'Login user',
                'POST /api/logout' => 'Logout user (requires auth)',
                'GET /api/user' => 'Get current user (requires auth)',
            ],
            'products' => [
                'GET /api/products' => 'Get all products',
                'GET /api/products/{id}' => 'Get single product',
                'GET /api/products/featured' => 'Get featured products',
                'POST /api/products' => 'Create product (admin only)',
                'PUT /api/products/{id}' => 'Update product (admin only)',
                'DELETE /api/products/{id}' => 'Delete product (admin only)',
            ],
            'categories' => [
                'GET /api/categories' => 'Get all categories',
                'GET /api/categories/{id}' => 'Get single category',
                'POST /api/categories' => 'Create category (admin only)',
                'PUT /api/categories/{id}' => 'Update category (admin only)',
                'DELETE /api/categories/{id}' => 'Delete category (admin only)',
            ],
            'cart' => [
                'GET /api/cart' => 'Get user cart (requires auth)',
                'POST /api/cart/add' => 'Add item to cart (requires auth)',
                'PUT /api/cart/update/{id}' => 'Update cart item (requires auth)',
                'DELETE /api/cart/remove/{id}' => 'Remove item from cart (requires auth)',
                'DELETE /api/cart/clear' => 'Clear cart (requires auth)',
            ],
            'orders' => [
                'GET /api/orders' => 'Get user orders (requires auth)',
                'GET /api/orders/{id}' => 'Get single order (requires auth)',
                'POST /api/orders' => 'Create order (requires auth)',
                'PUT /api/orders/{id}/cancel' => 'Cancel order (requires auth)',
                'GET /api/orders/all' => 'Get all orders (admin only)',
                'PUT /api/orders/{id}/status' => 'Update order status (admin only)',
            ],
            'users' => [
                'GET /api/profile' => 'Get user profile (requires auth)',
                'PUT /api/profile' => 'Update user profile (requires auth)',
                'PUT /api/password' => 'Update password (requires auth)',
                'GET /api/users' => 'Get all users (admin only)',
                'GET /api/users/{id}' => 'Get single user (admin only)',
                'PUT /api/users/{id}' => 'Update user (admin only)',
                'DELETE /api/users/{id}' => 'Delete user (admin only)',
            ],
            'suppliers' => [
                'GET /api/suppliers' => 'Get all suppliers (admin only)',
                'GET /api/suppliers/{id}' => 'Get single supplier (admin only)',
                'POST /api/suppliers' => 'Create supplier (admin only)',
                'PUT /api/suppliers/{id}' => 'Update supplier (admin only)',
                'DELETE /api/suppliers/{id}' => 'Delete supplier (admin only)',
            ],
        ];

        return response()->json([
            'message' => 'Kidu E-commerce API Endpoints',
            'base_url' => url('/api'),
            'api_test_interface' => url('/api-test'),
            'total_endpoints' => 39,
            'endpoints' => $apiRoutes,
            'authentication' => [
                'type' => 'Bearer Token',
                'header' => 'Authorization: Bearer {token}',
                'get_token' => 'POST /api/login or POST /api/register'
            ],
            'notes' => [
                'All API endpoints are prefixed with /api',
                'Authentication required endpoints need Bearer token in Authorization header',
                'Admin only endpoints require admin role',
                'Use the /api-test interface for easy testing without Postman',
                'Base URL: ' . url('/api')
            ]
        ], 200, [], JSON_PRETTY_PRINT);
    }
} 