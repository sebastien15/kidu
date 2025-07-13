<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

# Kidu E-commerce Platform

A comprehensive Laravel 11 + React e-commerce platform specializing in electronics, cars, and car spare parts with retail, wholesale, and logistics services.

## 🚀 Features

- **Dual Pricing System**: Retail and wholesale pricing with automatic user-specific pricing
- **Role-Based Access**: Admin, customer roles with appropriate permissions
- **Hierarchical Categories**: Parent-child category relationships
- **Complete Order System**: Order creation, status tracking, cancellation
- **Shopping Cart**: Full cart functionality with stock validation
- **User Management**: Enhanced user profiles with e-commerce fields
- **Supplier Management**: Complete supplier tracking system
- **Interactive API Testing**: Built-in web interface for testing all APIs

## 📋 Requirements

- PHP 8.2+
- Laravel 11
- MySQL (XAMPP on Mac)
- Node.js 18+
- Composer
- npm

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd kidu-ecommerce
```

### 2. Install PHP dependencies
```bash
composer install
```

### 3. Install Node.js dependencies
```bash
npm install
```

### 4. Environment setup
```bash
cp .env.example .env
```

Update `.env` file with your database configuration:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=kidu_ecommerce
DB_USERNAME=root
DB_PASSWORD=
```

### 5. Generate application key
```bash
php artisan key:generate
```

### 6. Run migrations and seeders
```bash
php artisan migrate
php artisan db:seed
```

### 7. Start the development server
```bash
php artisan serve
```

The application will be available at `http://127.0.0.1:8000`

## 🧪 API Testing Interface

### Interactive Web Interface

Access the built-in API testing interface at:
```
http://127.0.0.1:8000/api-test
```

**Features:**
- ✅ **No Postman Required**: Test all APIs directly in your browser
- ✅ **One-Click Testing**: Quick action buttons for common operations
- ✅ **Tabbed Interface**: Organized by API categories (Auth, Products, Cart, etc.)
- ✅ **Real-time Authentication**: Visual status indicator and token management
- ✅ **Form Pre-filling**: Pre-filled forms with sample data for easy testing
- ✅ **Response Display**: Color-coded JSON responses (green for success, red for errors)
- ✅ **Token Management**: Automatic token storage and usage for authenticated requests

**Quick Start:**
1. Visit `http://127.0.0.1:8000/api-test`
2. Use the quick action buttons at the top for common operations
3. Switch between tabs to test different API categories
4. Register/login to test authenticated endpoints
5. View responses in real-time below each form

**Available Tabs:**
- 🔐 **Authentication**: Register, Login, Admin Login
- 📦 **Products**: Get all products, featured products, single product, create product
- 📂 **Categories**: Get all categories, single category
- 🛒 **Cart**: Get cart, add to cart, clear cart
- 📋 **Orders**: Get orders, create order
- 👤 **Users**: Get profile, update profile, get all users (admin)
- 🏢 **Suppliers**: Get suppliers, create supplier (admin)

**Sample Credentials:**
- **Admin**: `admin@kidu.com` / `password`
- **Retail Customer**: `john@example.com` / `password`
- **Wholesale Customer**: `jane@wholesale.com` / `password`

## 📚 API Documentation

### Base URL
```
http://127.0.0.1:8000/api
```

### Authentication

All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer {your_token}
```

---

## 🔐 Authentication Endpoints

### Register User
```http
POST /api/register
Content-Type: application/json
Accept: application/json

{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "password_confirmation": "password123",
    "user_type": "retail",
    "phone": "+1234567890",
    "company_name": "My Company",
    "tax_number": "TAX123456"
}
```

**Response:**
```json
{
    "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "user_type": "retail",
        "is_active": true
    },
    "token": "1|abc123...",
    "message": "User registered successfully"
}
```

### Login User
```http
POST /api/login
Content-Type: application/json
Accept: application/json

{
    "email": "john@example.com",
    "password": "password123"
}
```

**Response:**
```json
{
    "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
    },
    "token": "1|abc123...",
    "message": "Logged in successfully"
}
```

### Logout User
```http
POST /api/logout
Authorization: Bearer {token}
Accept: application/json
```

**Response:**
```json
{
    "message": "Logged out successfully"
}
```

### Get User Profile
```http
GET /api/user
Authorization: Bearer {token}
Accept: application/json
```

---

## 🛍️ Product Endpoints

### Get All Products
```http
GET /api/products
Accept: application/json
```

**Query Parameters:**
- `category_id` - Filter by category
- `status` - Filter by status (active, inactive, out_of_stock)
- `featured` - Filter featured products (true/false)
- `search` - Search in name, description, or SKU
- `min_price` - Minimum price filter
- `max_price` - Maximum price filter
- `per_page` - Items per page (default: 12)

**Response:**
```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "iPhone 15 Pro",
            "slug": "iphone-15-pro",
            "description": "Latest iPhone with advanced features",
            "sku": "IPHONE-15-PRO",
            "retail_price": "999.00",
            "wholesale_price": "850.00",
            "price_for_user": "999.00",
            "stock": 50,
            "status": "active",
            "is_featured": true,
            "category": {
                "id": 2,
                "name": "Smartphones"
            },
            "supplier": {
                "id": 1,
                "name": "Tech Solutions Inc."
            }
        }
    ],
    "total": 6,
    "per_page": 12
}
```

### Get Single Product
```http
GET /api/products/{id}
Accept: application/json
```

### Get Featured Products
```http
GET /api/products/featured
Accept: application/json
```

### Create Product (Admin Only)
```http
POST /api/products
Authorization: Bearer {admin_token}
Content-Type: application/json
Accept: application/json

{
    "name": "New Product",
    "description": "Product description",
    "sku": "NEW-PRODUCT-001",
    "retail_price": 99.99,
    "wholesale_price": 80.00,
    "stock": 100,
    "category_id": 1,
    "supplier_id": 1,
    "status": "active",
    "is_featured": false,
    "specifications": {
        "color": "Black",
        "size": "Medium"
    }
}
```

### Update Product (Admin Only)
```http
PUT /api/products/{id}
Authorization: Bearer {admin_token}
Content-Type: application/json
Accept: application/json
```

### Delete Product (Admin Only)
```http
DELETE /api/products/{id}
Authorization: Bearer {admin_token}
Accept: application/json
```

---

## 📂 Category Endpoints

### Get All Categories
```http
GET /api/categories
Accept: application/json
```

**Query Parameters:**
- `parent_id` - Filter by parent category
- `active` - Filter by active status (true/false)
- `root_only` - Get only root categories (true/false)

**Response:**
```json
[
    {
        "id": 1,
        "name": "Electronics",
        "slug": "electronics",
        "description": "Latest electronic devices and gadgets",
        "children": [
            {
                "id": 2,
                "name": "Smartphones",
                "slug": "smartphones"
            }
        ],
        "products": []
    }
]
```

### Get Single Category
```http
GET /api/categories/{id}
Accept: application/json
```

### Create Category (Admin Only)
```http
POST /api/categories
Authorization: Bearer {admin_token}
Content-Type: application/json
Accept: application/json

{
    "name": "New Category",
    "description": "Category description",
    "parent_id": null,
    "sort_order": 1,
    "is_active": true
}
```

### Update Category (Admin Only)
```http
PUT /api/categories/{id}
Authorization: Bearer {admin_token}
Content-Type: application/json
Accept: application/json
```

### Delete Category (Admin Only)
```http
DELETE /api/categories/{id}
Authorization: Bearer {admin_token}
Accept: application/json
```

---

## 🛒 Cart Endpoints

### Get User Cart
```http
GET /api/cart
Authorization: Bearer {token}
Accept: application/json
```

**Response:**
```json
{
    "id": 1,
    "user_id": 1,
    "items": [
        {
            "id": 1,
            "product_id": 1,
            "quantity": 2,
            "product": {
                "id": 1,
                "name": "iPhone 15 Pro",
                "price_for_user": "999.00"
            }
        }
    ],
    "subtotal": 1998.00,
    "total_items": 2
}
```

### Add Item to Cart
```http
POST /api/cart/add
Authorization: Bearer {token}
Content-Type: application/json
Accept: application/json

{
    "product_id": 1,
    "quantity": 2
}
```

### Update Cart Item
```http
PUT /api/cart/update/{cart_item_id}
Authorization: Bearer {token}
Content-Type: application/json
Accept: application/json

{
    "quantity": 3
}
```

### Remove Item from Cart
```http
DELETE /api/cart/remove/{cart_item_id}
Authorization: Bearer {token}
Accept: application/json
```

### Clear Cart
```http
DELETE /api/cart/clear
Authorization: Bearer {token}
Accept: application/json
```

---

## 📦 Order Endpoints

### Get User Orders
```http
GET /api/orders
Authorization: Bearer {token}
Accept: application/json
```

**Query Parameters:**
- `status` - Filter by order status
- `date_from` - Filter from date (YYYY-MM-DD)
- `date_to` - Filter to date (YYYY-MM-DD)
- `per_page` - Items per page (default: 15)

### Get Single Order
```http
GET /api/orders/{id}
Authorization: Bearer {token}
Accept: application/json
```

### Create Order
```http
POST /api/orders
Authorization: Bearer {token}
Content-Type: application/json
Accept: application/json

{
    "shipping_address": {
        "name": "John Doe",
        "address": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zip": "10001",
        "country": "USA"
    },
    "billing_address": {
        "name": "John Doe",
        "address": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zip": "10001",
        "country": "USA"
    },
    "payment_method": "credit_card",
    "shipping_method": "standard",
    "notes": "Please deliver in the morning"
}
```

**Response:**
```json
{
    "order": {
        "id": 1,
        "order_number": "ORD-ABC12345",
        "status": "pending",
        "total_amount": "1198.00",
        "subtotal": "999.00",
        "tax_amount": "179.82",
        "shipping_amount": "10.00",
        "items": [
            {
                "id": 1,
                "product_id": 1,
                "quantity": 1,
                "unit_price": "999.00",
                "total_price": "999.00",
                "product": {
                    "name": "iPhone 15 Pro"
                }
            }
        ]
    },
    "message": "Order created successfully"
}
```

### Cancel Order
```http
PUT /api/orders/{id}/cancel
Authorization: Bearer {token}
Accept: application/json
```

### Update Order Status (Admin Only)
```http
PUT /api/orders/{id}/status
Authorization: Bearer {admin_token}
Content-Type: application/json
Accept: application/json

{
    "status": "processing",
    "tracking_number": "TRK123456",
    "estimated_delivery": "2024-01-15"
}
```

### Get All Orders (Admin Only)
```http
GET /api/orders/all
Authorization: Bearer {admin_token}
Accept: application/json
```

---

## 👤 User Management Endpoints

### Get User Profile
```http
GET /api/profile
Authorization: Bearer {token}
Accept: application/json
```

### Update User Profile
```http
PUT /api/profile
Authorization: Bearer {token}
Content-Type: application/json
Accept: application/json

{
    "name": "John Doe Updated",
    "phone": "+1234567890",
    "address": "123 Main St",
    "city": "New York",
    "country": "USA",
    "company_name": "My Company",
    "tax_number": "TAX123456"
}
```

### Update Password
```http
PUT /api/password
Authorization: Bearer {token}
Content-Type: application/json
Accept: application/json

{
    "current_password": "oldpassword",
    "password": "newpassword",
    "password_confirmation": "newpassword"
}
```

### Get All Users (Admin Only)
```http
GET /api/users
Authorization: Bearer {admin_token}
Accept: application/json
```

**Query Parameters:**
- `user_type` - Filter by user type (retail/wholesale)
- `is_active` - Filter by active status (true/false)
- `search` - Search by name, email, or company name
- `per_page` - Items per page (default: 15)

### Get Single User (Admin Only)
```http
GET /api/users/{id}
Authorization: Bearer {admin_token}
Accept: application/json
```

### Update User (Admin Only)
```http
PUT /api/users/{id}
Authorization: Bearer {admin_token}
Content-Type: application/json
Accept: application/json

{
    "name": "Updated Name",
    "email": "updated@example.com",
    "user_type": "wholesale",
    "is_active": true,
    "roles": ["customer"]
}
```

### Delete User (Admin Only)
```http
DELETE /api/users/{id}
Authorization: Bearer {admin_token}
Accept: application/json
```

---

## 🏢 Supplier Endpoints

### Get All Suppliers (Admin Only)
```http
GET /api/suppliers
Authorization: Bearer {admin_token}
Accept: application/json
```

**Query Parameters:**
- `is_active` - Filter by active status (true/false)
- `country` - Filter by country
- `search` - Search by name, contact person, or email
- `per_page` - Items per page (default: 15)

### Get Single Supplier (Admin Only)
```http
GET /api/suppliers/{id}
Authorization: Bearer {admin_token}
Accept: application/json
```

### Create Supplier (Admin Only)
```http
POST /api/suppliers
Authorization: Bearer {admin_token}
Content-Type: application/json
Accept: application/json

{
    "name": "New Supplier",
    "email": "contact@newsupplier.com",
    "phone": "+1234567890",
    "address": "456 Supplier St",
    "city": "Los Angeles",
    "country": "USA",
    "contact_person": "Jane Supplier",
    "tax_number": "TAX789012",
    "website": "https://newsupplier.com",
    "is_active": true,
    "notes": "New supplier notes"
}
```

### Update Supplier (Admin Only)
```http
PUT /api/suppliers/{id}
Authorization: Bearer {admin_token}
Content-Type: application/json
Accept: application/json
```

### Delete Supplier (Admin Only)
```http
DELETE /api/suppliers/{id}
Authorization: Bearer {admin_token}
Accept: application/json
```

---

## 🧪 Testing with Postman

### 1. Import the Collection

Download the Postman collection from the `/postman` folder or create your own collection with the following structure:

### 2. Environment Variables

Create a Postman environment with these variables:
- `base_url`: `http://127.0.0.1:8000/api`
- `token`: (will be set after login)
- `admin_token`: (will be set after admin login)

### 3. Test Flow

#### Step 1: Register a User
```http
POST {{base_url}}/register
Content-Type: application/json

{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "password_confirmation": "password123",
    "user_type": "retail"
}
```

**Test Script:**
```javascript
pm.test("User registered successfully", function () {
    pm.response.to.have.status(201);
    const response = pm.response.json();
    pm.expect(response.message).to.eql("User registered successfully");
    pm.environment.set("token", response.token);
});
```

#### Step 2: Login
```http
POST {{base_url}}/login
Content-Type: application/json

{
    "email": "test@example.com",
    "password": "password123"
}
```

**Test Script:**
```javascript
pm.test("Login successful", function () {
    pm.response.to.have.status(200);
    const response = pm.response.json();
    pm.expect(response.message).to.eql("Logged in successfully");
    pm.environment.set("token", response.token);
});
```

#### Step 3: Get Products
```http
GET {{base_url}}/products
```

**Test Script:**
```javascript
pm.test("Products retrieved successfully", function () {
    pm.response.to.have.status(200);
    const response = pm.response.json();
    pm.expect(response.data).to.be.an('array');
    pm.expect(response.data.length).to.be.greaterThan(0);
});
```

#### Step 4: Add to Cart
```http
POST {{base_url}}/cart/add
Authorization: Bearer {{token}}
Content-Type: application/json

{
    "product_id": 1,
    "quantity": 2
}
```

**Test Script:**
```javascript
pm.test("Item added to cart", function () {
    pm.response.to.have.status(200);
    const response = pm.response.json();
    pm.expect(response.message).to.eql("Item added to cart successfully");
});
```

#### Step 5: Create Order
```http
POST {{base_url}}/orders
Authorization: Bearer {{token}}
Content-Type: application/json

{
    "shipping_address": {
        "name": "Test User",
        "address": "123 Test St",
        "city": "Test City",
        "state": "TS",
        "zip": "12345",
        "country": "USA"
    },
    "billing_address": {
        "name": "Test User",
        "address": "123 Test St",
        "city": "Test City",
        "state": "TS",
        "zip": "12345",
        "country": "USA"
    },
    "payment_method": "credit_card",
    "shipping_method": "standard"
}
```

**Test Script:**
```javascript
pm.test("Order created successfully", function () {
    pm.response.to.have.status(201);
    const response = pm.response.json();
    pm.expect(response.message).to.eql("Order created successfully");
    pm.expect(response.order.order_number).to.be.a('string');
});
```

### 4. Admin Testing

For admin endpoints, use the admin credentials:
- Email: `admin@kidu.com`
- Password: `password`

Login as admin and set the `admin_token` environment variable.

---

## 📊 Sample Data

The application comes with pre-seeded data:

### Users
- **Admin**: `admin@kidu.com` / `password`
- **Retail Customer**: `john@example.com` / `password`
- **Wholesale Customer**: `jane@wholesale.com` / `password`

### Products
- iPhone 15 Pro ($999 retail, $850 wholesale)
- MacBook Pro 16" ($2499 retail, $2200 wholesale)
- Samsung Galaxy S24 ($899 retail, $750 wholesale)
- Toyota Camry 2024 ($25000 retail, $22000 wholesale)
- Engine Oil Filter ($15.99 retail, $12.50 wholesale)
- Brake Pads Set ($89.99 retail, $65.00 wholesale)

### Categories
- Electronics (Smartphones, Laptops, Audio)
- Cars (Sedans, SUVs, Trucks)
- Car Spare Parts (Engine Parts, Brakes, Tires)

### Suppliers
- Tech Solutions Inc.
- Auto Parts Pro
- Global Electronics

---

## 🔧 Development

### Running Tests
```bash
php artisan test
```

### Building Frontend Assets
```bash
npm run build
```

### Development Server
```bash
php artisan serve
npm run dev
```

---

## 📝 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For support, email support@kidu.com or create an issue in the repository.
