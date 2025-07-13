<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use App\Models\Supplier;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $electronicsCategory = Category::where('name', 'Electronics')->first();
        $smartphonesCategory = Category::where('name', 'Smartphones')->first();
        $laptopsCategory = Category::where('name', 'Laptops')->first();
        $carsCategory = Category::where('name', 'Cars')->first();
        $sedansCategory = Category::where('name', 'Sedans')->first();
        $sparePartsCategory = Category::where('name', 'Car Spare Parts')->first();
        $enginePartsCategory = Category::where('name', 'Engine Parts')->first();

        $techSupplier = Supplier::where('name', 'Tech Solutions Inc.')->first();
        $autoSupplier = Supplier::where('name', 'Auto Parts Pro')->first();
        $globalSupplier = Supplier::where('name', 'Global Electronics')->first();

        $products = [
            // Electronics
            [
                'name' => 'iPhone 15 Pro',
                'description' => 'Latest iPhone with advanced features',
                'sku' => 'IPHONE-15-PRO',
                'retail_price' => 999.00,
                'wholesale_price' => 850.00,
                'stock' => 50,
                'category_id' => $smartphonesCategory->id,
                'supplier_id' => $techSupplier->id,
                'status' => 'active',
                'is_featured' => true,
                'specifications' => [
                    'screen_size' => '6.1 inch',
                    'storage' => '128GB',
                    'color' => 'Titanium'
                ],
                'origin_country' => 'USA',
            ],
            [
                'name' => 'MacBook Pro 16"',
                'description' => 'Professional laptop for power users',
                'sku' => 'MBP-16-2024',
                'retail_price' => 2499.00,
                'wholesale_price' => 2200.00,
                'stock' => 25,
                'category_id' => $laptopsCategory->id,
                'supplier_id' => $techSupplier->id,
                'status' => 'active',
                'is_featured' => true,
                'specifications' => [
                    'processor' => 'M3 Pro',
                    'ram' => '16GB',
                    'storage' => '512GB SSD'
                ],
                'origin_country' => 'USA',
            ],
            [
                'name' => 'Samsung Galaxy S24',
                'description' => 'Android flagship smartphone',
                'sku' => 'SAMSUNG-S24',
                'retail_price' => 899.00,
                'wholesale_price' => 750.00,
                'stock' => 40,
                'category_id' => $smartphonesCategory->id,
                'supplier_id' => $globalSupplier->id,
                'status' => 'active',
                'is_featured' => false,
                'specifications' => [
                    'screen_size' => '6.2 inch',
                    'storage' => '256GB',
                    'color' => 'Phantom Black'
                ],
                'origin_country' => 'South Korea',
            ],
            // Cars
            [
                'name' => 'Toyota Camry 2024',
                'description' => 'Reliable sedan with excellent fuel economy',
                'sku' => 'TOYOTA-CAMRY-2024',
                'retail_price' => 25000.00,
                'wholesale_price' => 22000.00,
                'stock' => 10,
                'category_id' => $sedansCategory->id,
                'supplier_id' => $autoSupplier->id,
                'status' => 'active',
                'is_featured' => true,
                'specifications' => [
                    'engine' => '2.5L 4-Cylinder',
                    'transmission' => '8-Speed Automatic',
                    'fuel_economy' => '28/39 mpg'
                ],
                'origin_country' => 'Japan',
            ],
            // Car Spare Parts
            [
                'name' => 'Engine Oil Filter',
                'description' => 'High-quality oil filter for various engines',
                'sku' => 'OIL-FILTER-001',
                'retail_price' => 15.99,
                'wholesale_price' => 12.50,
                'stock' => 200,
                'category_id' => $enginePartsCategory->id,
                'supplier_id' => $autoSupplier->id,
                'status' => 'active',
                'is_featured' => false,
                'specifications' => [
                    'compatibility' => 'Multiple brands',
                    'filter_type' => 'Synthetic',
                    'part_number' => 'OF-001'
                ],
                'origin_country' => 'USA',
            ],
            [
                'name' => 'Brake Pads Set',
                'description' => 'Premium brake pads for optimal stopping power',
                'sku' => 'BRAKE-PADS-001',
                'retail_price' => 89.99,
                'wholesale_price' => 65.00,
                'stock' => 150,
                'category_id' => $sparePartsCategory->id,
                'supplier_id' => $autoSupplier->id,
                'status' => 'active',
                'is_featured' => true,
                'specifications' => [
                    'material' => 'Ceramic',
                    'compatibility' => 'Front/Rear',
                    'part_number' => 'BP-001'
                ],
                'origin_country' => 'Germany',
            ],
        ];

        foreach ($products as $productData) {
            Product::create($productData);
        }
    }
}
