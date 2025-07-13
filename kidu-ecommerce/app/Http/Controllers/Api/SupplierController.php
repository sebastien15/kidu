<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    public function index(Request $request)
    {
        $query = Supplier::with(['products']);

        // Filter by active status
        if ($request->has('is_active')) {
            $query->where('is_active', $request->boolean('is_active'));
        }

        // Filter by country
        if ($request->has('country')) {
            $query->where('country', $request->country);
        }

        // Search by name or contact person
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('contact_person', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $suppliers = $query->paginate($request->get('per_page', 15));

        return response()->json($suppliers);
    }

    public function show($id)
    {
        $supplier = Supplier::with(['products'])->findOrFail($id);
        return response()->json($supplier);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:suppliers',
            'phone' => 'required|string|max:20',
            'address' => 'required|string',
            'city' => 'required|string|max:100',
            'country' => 'required|string|max:100',
            'contact_person' => 'required|string|max:255',
            'tax_number' => 'nullable|string|max:50',
            'website' => 'nullable|url',
            'is_active' => 'boolean',
            'notes' => 'nullable|string',
        ]);

        $supplier = Supplier::create($request->all());

        return response()->json([
            'supplier' => $supplier,
            'message' => 'Supplier created successfully'
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $supplier = Supplier::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => [
                'sometimes',
                'required',
                'email',
                \Illuminate\Validation\Rule::unique('suppliers')->ignore($id),
            ],
            'phone' => 'sometimes|required|string|max:20',
            'address' => 'sometimes|required|string',
            'city' => 'sometimes|required|string|max:100',
            'country' => 'sometimes|required|string|max:100',
            'contact_person' => 'sometimes|required|string|max:255',
            'tax_number' => 'nullable|string|max:50',
            'website' => 'nullable|url',
            'is_active' => 'boolean',
            'notes' => 'nullable|string',
        ]);

        $supplier->update($request->all());

        return response()->json([
            'supplier' => $supplier,
            'message' => 'Supplier updated successfully'
        ]);
    }

    public function destroy($id)
    {
        $supplier = Supplier::findOrFail($id);

        // Check if supplier has products
        if ($supplier->products()->count() > 0) {
            return response()->json([
                'message' => 'Cannot delete supplier with existing products'
            ], 422);
        }

        $supplier->delete();

        return response()->json([
            'message' => 'Supplier deleted successfully'
        ]);
    }
} 