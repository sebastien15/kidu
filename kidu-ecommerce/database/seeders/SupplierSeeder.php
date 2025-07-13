<?php

namespace Database\Seeders;

use App\Models\Supplier;
use Illuminate\Database\Seeder;

class SupplierSeeder extends Seeder
{
    public function run()
    {
        $suppliers = [
            [
                'name' => 'Tech Solutions Inc.',
                'email' => 'contact@techsolutions.com',
                'phone' => '+1234567890',
                'address' => '123 Tech Street, Silicon Valley, CA',
                'city' => 'San Francisco',
                'country' => 'USA',
                'contact_person' => 'John Tech',
                'tax_number' => 'TAX123456',
                'website' => 'https://techsolutions.com',
                'is_active' => true,
                'notes' => 'Leading electronics supplier',
            ],
            [
                'name' => 'Auto Parts Pro',
                'email' => 'sales@autopartspro.com',
                'phone' => '+1234567891',
                'address' => '456 Auto Avenue, Detroit, MI',
                'city' => 'Detroit',
                'country' => 'USA',
                'contact_person' => 'Mike Auto',
                'tax_number' => 'TAX789012',
                'website' => 'https://autopartspro.com',
                'is_active' => true,
                'notes' => 'Premium auto parts supplier',
            ],
            [
                'name' => 'Global Electronics',
                'email' => 'info@globalelectronics.com',
                'phone' => '+1234567892',
                'address' => '789 Global Road, Shanghai',
                'city' => 'Shanghai',
                'country' => 'China',
                'contact_person' => 'Li Wei',
                'tax_number' => 'TAX345678',
                'website' => 'https://globalelectronics.com',
                'is_active' => true,
                'notes' => 'International electronics supplier',
            ],
        ];

        foreach ($suppliers as $supplierData) {
            Supplier::create($supplierData);
        }
    }
}
