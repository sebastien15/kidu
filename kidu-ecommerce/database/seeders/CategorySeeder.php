<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $categories = [
            [
                'name' => 'Electronics',
                'description' => 'Latest electronic devices and gadgets',
                'is_active' => true,
                'sort_order' => 1,
                'children' => [
                    ['name' => 'Smartphones', 'description' => 'Mobile phones and accessories'],
                    ['name' => 'Laptops', 'description' => 'Computers and laptops'],
                    ['name' => 'Audio', 'description' => 'Headphones, speakers, and audio equipment'],
                ]
            ],
            [
                'name' => 'Cars',
                'description' => 'New and used vehicles',
                'is_active' => true,
                'sort_order' => 2,
                'children' => [
                    ['name' => 'Sedans', 'description' => 'Sedan cars'],
                    ['name' => 'SUVs', 'description' => 'Sport utility vehicles'],
                    ['name' => 'Trucks', 'description' => 'Pickup trucks and commercial vehicles'],
                ]
            ],
            [
                'name' => 'Car Spare Parts',
                'description' => 'Auto parts and accessories',
                'is_active' => true,
                'sort_order' => 3,
                'children' => [
                    ['name' => 'Engine Parts', 'description' => 'Engine components and accessories'],
                    ['name' => 'Brakes', 'description' => 'Brake systems and components'],
                    ['name' => 'Tires', 'description' => 'Tires and wheels'],
                ]
            ],
        ];

        foreach ($categories as $categoryData) {
            $children = $categoryData['children'] ?? [];
            unset($categoryData['children']);
            
            $category = Category::create($categoryData);
            
            foreach ($children as $childData) {
                $childData['parent_id'] = $category->id;
                $childData['is_active'] = true;
                $childData['sort_order'] = 0;
                Category::create($childData);
            }
        }
    }
}
