# Backend Development Guide

## Structure
```
backend/
├── api/             # API endpoints
├── config/          # Configuration files
├── includes/        # Shared includes
├── models/          # Database models
└── utils/           # Utility classes
```

## API Structure (`/backend/api/`)

### Version 1 (`/backend/api/v1/`)
```
v1/
├── auth/
│   ├── login.php           # User login
│   ├── register.php        # User registration
│   ├── logout.php          # User logout
│   └── refresh.php         # Token refresh
├── products/
│   ├── index.php           # Product CRUD
│   ├── search.php          # Product search
│   └── categories.php      # Category management
├── orders/
│   ├── index.php           # Order management
│   ├── create.php          # Order creation
│   └── status.php          # Order status updates
├── users/
│   ├── index.php           # User management
│   ├── profile.php         # User profile
│   └── admin.php           # Admin user functions
└── dashboard/
    ├── stats.php           # Dashboard statistics
    ├── orders.php          # Recent orders
    └── products.php        # Product analytics
```

## Configuration (`/backend/config/`)

### Files
- `config.php` - Main configuration
- `database.php` - Database connection
- `jwt.php` - JWT configuration
- `cors.php` - CORS settings

### Database Connection
```php
class Database {
    private $host = 'localhost';
    private $db_name = 'kidu_ecommerce';
    private $username = 'root';
    private $password = '';
    private $conn;
    
    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->exec("set names utf8");
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
```

## Models (`/backend/models/`)

### Core Models
- `User.php` - User model and authentication
- `Product.php` - Product management
- `Order.php` - Order processing
- `Category.php` - Product categories
- `Cart.php` - Shopping cart operations

### Model Structure Example
```php
class Product {
    private $conn;
    private $table_name = "products";
    
    public $id;
    public $name;
    public $description;
    public $price;
    public $category_id;
    public $image_url;
    public $stock_quantity;
    public $created_at;
    public $updated_at;
    
    public function __construct($db) {
        $this->conn = $db;
    }
    
    public function read() { /* Implementation */ }
    public function create() { /* Implementation */ }
    public function update() { /* Implementation */ }
    public function delete() { /* Implementation */ }
}
```

## Security Features
- Input validation and sanitization
- SQL injection prevention (prepared statements)
- XSS protection
- CSRF protection
- JWT authentication
- Rate limiting

## Error Handling
- Consistent error response format
- Logging system
- Exception handling
- Validation errors 