# Development Guide - Kidu E-commerce Platform

## Getting Started

### Prerequisites
- PHP 8.0 or higher
- MySQL 8.0 or higher
- Apache/Nginx web server
- Git for version control
- Composer (optional, for dependencies)

### Development Environment Setup

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd kidu-site
```

#### 2. Database Setup
```bash
# Create database
mysql -u root -p
CREATE DATABASE kidu_ecommerce CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Import schema
mysql -u root -p kidu_ecommerce < autocoding/database/schema.sql
```

#### 3. Backend Configuration
```bash
# Copy configuration template
cp backend/config/config.example.php backend/config/config.php

# Edit configuration file
nano backend/config/config.php
```

Update the configuration with your database credentials:
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'kidu_ecommerce');
define('DB_USER', 'your_username');
define('DB_PASS', 'your_password');
define('JWT_SECRET', 'your-secret-key-here');
```

#### 4. Start Development Server
```bash
# Start PHP development server
cd backend
php -S localhost:8000

# Or use Apache/Nginx
# Configure virtual host to point to backend/ directory
```

#### 5. Frontend Development
```bash
# Use Live Server extension in VS Code
# Or serve with Python
python -m http.server 3000 --directory frontend/client
```

## Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# Test locally

# Commit changes
git add .
git commit -m "Add new feature"

# Push to remote
git push origin feature/new-feature

# Create pull request
```

### 2. Code Standards
- Follow PSR-12 for PHP code
- Use BEM methodology for CSS
- Follow ES6+ standards for JavaScript
- Write meaningful commit messages

### 3. Testing
```bash
# Run PHP tests
php vendor/bin/phpunit

# Test API endpoints
curl -X GET http://localhost:8000/api/v1/products

# Test frontend functionality
# Use browser developer tools
```

## API Development

### Creating New Endpoints

#### 1. Create API File
```php
// backend/api/v1/new-feature/index.php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

require_once '../../../config/config.php';
require_once '../../../config/database.php';
require_once '../../../includes/response.php';
require_once '../../../models/YourModel.php';

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    $database = new Database();
    $db = $database->getConnection();
    $model = new YourModel($db);
    
    $method = $_SERVER['REQUEST_METHOD'];
    
    switch ($method) {
        case 'GET':
            $result = $model->read();
            echo json_encode(ApiResponse::success($result));
            break;
            
        case 'POST':
            $data = json_decode(file_get_contents('php://input'), true);
            $result = $model->create($data);
            echo json_encode(ApiResponse::success($result));
            break;
            
        default:
            http_response_code(405);
            echo json_encode(ApiResponse::error('Method not allowed'));
            break;
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(ApiResponse::error($e->getMessage()));
}
?>
```

#### 2. Create Model
```php
// backend/models/YourModel.php
<?php
class YourModel {
    private $conn;
    private $table_name = "your_table";
    
    public function __construct($db) {
        $this->conn = $db;
    }
    
    public function read() {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function create($data) {
        $query = "INSERT INTO " . $this->table_name . " (column1, column2) VALUES (?, ?)";
        $stmt = $this->conn->prepare($query);
        
        $stmt->bindParam(1, $data['column1']);
        $stmt->bindParam(2, $data['column2']);
        
        if ($stmt->execute()) {
            return $this->conn->lastInsertId();
        }
        
        return false;
    }
}
?>
```

### 3. Test API Endpoint
```bash
# Test GET request
curl -X GET http://localhost:8000/api/v1/new-feature

# Test POST request
curl -X POST http://localhost:8000/api/v1/new-feature \
  -H "Content-Type: application/json" \
  -d '{"column1": "value1", "column2": "value2"}'
```

## Frontend Development

### Creating New Pages

#### 1. Create HTML Page
```html
<!-- frontend/client/pages/new-page.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Page - Kidu</title>
    <link rel="stylesheet" href="../assets/css/main.css">
    <link rel="stylesheet" href="../assets/css/components.css">
    <link rel="stylesheet" href="../assets/css/responsive.css">
</head>
<body>
    <!-- Header Component -->
    <header class="header">
        <!-- Include header content -->
    </header>

    <!-- Main Content -->
    <main class="main">
        <div class="container">
            <h1>New Page</h1>
            <!-- Page content -->
        </div>
    </main>

    <!-- Footer Component -->
    <footer class="footer">
        <!-- Include footer content -->
    </footer>

    <!-- Scripts -->
    <script src="../assets/js/utils.js"></script>
    <script src="../assets/js/api.js"></script>
    <script src="../assets/js/auth.js"></script>
    <script src="../assets/js/main.js"></script>
</body>
</html>
```

#### 2. Add JavaScript Functionality
```javascript
// frontend/client/assets/js/new-feature.js
const NewFeature = (function() {
    // Private variables
    let data = [];
    
    // Private methods
    function loadData() {
        return apiRequest('new-feature');
    }
    
    function renderData() {
        const container = document.querySelector('.data-container');
        if (!container) return;
        
        container.innerHTML = data.map(item => `
            <div class="item">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }
    
    // Public API
    return {
        init: async function() {
            try {
                const response = await loadData();
                if (response.success) {
                    data = response.data;
                    renderData();
                }
            } catch (error) {
                console.error('Failed to load data:', error);
                showNotification('Failed to load data', 'error');
            }
        },
        
        addItem: async function(itemData) {
            try {
                const response = await apiRequest('new-feature', {
                    method: 'POST',
                    body: JSON.stringify(itemData)
                });
                
                if (response.success) {
                    data.push(response.data);
                    renderData();
                    showNotification('Item added successfully', 'success');
                }
            } catch (error) {
                console.error('Failed to add item:', error);
                showNotification('Failed to add item', 'error');
            }
        }
    };
})();

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    NewFeature.init();
});
```

#### 3. Add CSS Styles
```css
/* frontend/client/assets/css/components.css */
.item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.item h3 {
    margin: 0 0 8px 0;
    color: #333;
    font-size: 18px;
}

.item p {
    margin: 0;
    color: #666;
    line-height: 1.5;
}

.data-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
}

@media (min-width: 768px) {
    .data-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        padding: 24px;
    }
}

@media (min-width: 1024px) {
    .data-container {
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
        padding: 32px;
    }
}
```

## Database Development

### Creating New Tables

#### 1. Create Migration File
```sql
-- database/migrations/001_create_new_table.sql
CREATE TABLE new_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_active (is_active),
    INDEX idx_created (created_at)
);
```

#### 2. Run Migration
```bash
mysql -u root -p kidu_ecommerce < database/migrations/001_create_new_table.sql
```

#### 3. Update Schema Documentation
Update `autocoding/DATABASE_SCHEMA.md` with the new table structure.

## Testing

### Unit Testing
```php
// tests/NewFeatureTest.php
<?php
class NewFeatureTest extends PHPUnit\Framework\TestCase {
    private $model;
    private $db;
    
    protected function setUp(): void {
        $this->db = $this->createMock(PDO::class);
        $this->model = new NewFeature($this->db);
    }
    
    public function testCreateItem() {
        $data = [
            'title' => 'Test Item',
            'description' => 'Test Description'
        ];
        
        $stmt = $this->createMock(PDOStatement::class);
        $stmt->expects($this->once())
              ->method('execute')
              ->willReturn(true);
        
        $this->db->expects($this->once())
                 ->method('prepare')
                 ->willReturn($stmt);
        
        $this->db->expects($this->once())
                 ->method('lastInsertId')
                 ->willReturn(1);
        
        $result = $this->model->create($data);
        $this->assertEquals(1, $result);
    }
}
?>
```

### Integration Testing
```bash
# Test API endpoints
curl -X GET http://localhost:8000/api/v1/products
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password"}'
```

## Debugging

### PHP Debugging
```php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Log debugging information
error_log("Debug: " . print_r($data, true));
```

### JavaScript Debugging
```javascript
// Console logging
console.log('Debug:', data);

// Debugger statement
debugger;

// Error handling
try {
    // Your code
} catch (error) {
    console.error('Error:', error);
}
```

### Database Debugging
```sql
-- Enable query logging
SET GLOBAL general_log = 'ON';
SET GLOBAL log_output = 'TABLE';

-- Check slow queries
SELECT * FROM mysql.slow_log ORDER BY start_time DESC LIMIT 10;
```

## Performance Optimization

### Database Optimization
```sql
-- Add indexes for frequently queried columns
CREATE INDEX idx_product_name ON products(name);
CREATE INDEX idx_order_date ON orders(created_at);

-- Optimize queries
EXPLAIN SELECT * FROM products WHERE category_id = 1 AND is_active = 1;
```

### Frontend Optimization
```javascript
// Lazy loading images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));
```

### Caching
```php
// Implement caching
class Cache {
    private $redis;
    
    public function get($key) {
        return $this->redis->get($key);
    }
    
    public function set($key, $value, $ttl = 3600) {
        return $this->redis->setex($key, $ttl, $value);
    }
}
```

## Deployment

### Development to Staging
```bash
# Deploy to staging
git push origin develop
# Trigger staging deployment pipeline
```

### Staging to Production
```bash
# Deploy to production
git push origin main
# Trigger production deployment pipeline
```

### Environment Configuration
```bash
# Set environment variables
export DB_HOST=production-db-host
export DB_NAME=production-db-name
export JWT_SECRET=production-secret
```

## Monitoring

### Application Monitoring
- Monitor error logs
- Track API response times
- Monitor database performance
- Set up alerts for critical issues

### User Analytics
- Track user behavior
- Monitor conversion rates
- Analyze performance metrics
- Generate reports

This development guide provides comprehensive instructions for developing features on the Kidu e-commerce platform, ensuring consistency and quality across the development team. 