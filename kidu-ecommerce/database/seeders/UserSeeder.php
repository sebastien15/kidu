<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Create roles if they don't exist
        Role::firstOrCreate(['name' => 'admin']);
        Role::firstOrCreate(['name' => 'customer']);
        Role::firstOrCreate(['name' => 'supplier']);

        // Create admin user if doesn't exist
        $admin = User::firstOrCreate(
            ['email' => 'admin@kidu.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'user_type' => 'retail',
                'is_active' => true,
                'email_verified_at' => now(),
            ]
        );
        $admin->assignRole('admin');

        // Create test retail customer if doesn't exist
        $retailCustomer = User::firstOrCreate(
            ['email' => 'john@example.com'],
            [
                'name' => 'John Doe',
                'password' => Hash::make('password'),
                'user_type' => 'retail',
                'phone' => '+1234567890',
                'city' => 'New York',
                'country' => 'USA',
                'is_active' => true,
                'email_verified_at' => now(),
            ]
        );
        $retailCustomer->assignRole('customer');

        // Create test wholesale customer if doesn't exist
        $wholesaleCustomer = User::firstOrCreate(
            ['email' => 'jane@wholesale.com'],
            [
                'name' => 'Jane Smith',
                'password' => Hash::make('password'),
                'user_type' => 'wholesale',
                'company_name' => 'Wholesale Electronics LLC',
                'tax_number' => 'TAX123456789',
                'phone' => '+1234567891',
                'city' => 'Los Angeles',
                'country' => 'USA',
                'is_active' => true,
                'email_verified_at' => now(),
            ]
        );
        $wholesaleCustomer->assignRole('customer');
    }
}
