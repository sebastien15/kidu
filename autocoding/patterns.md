# Development Patterns and Best Practices

## Frontend Patterns

### Component Structure
```html
<!-- Component Template Pattern -->
<div class="component">
    <div class="component__header">
        <h2 class="component__title">Title</h2>
    </div>
    <div class="component__body">
        <!-- Content -->
    </div>
    <div class="component__footer">
        <!-- Actions -->
    </div>
</div>
```

### JavaScript Module Pattern
```javascript
// Module Pattern
const ProductModule = (function() {
    // Private variables
    let products = [];
    
    // Private methods
    function validateProduct(product) {
        return product.name && product.price > 0;
    }
    
    // Public API
    return {
        addProduct: function(product) {
            if (validateProduct(product)) {
                products.push(product);
                return true;
            }
            return false;
        },
        getProducts: function() {
            return [...products];
        }
    };
})();
```

### AJAX Request Pattern
```javascript
// Standard AJAX Request Pattern
async function apiRequest(endpoint, options = {}) {
    const defaultOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    };
    
    try {
        const response = await fetch(`/api/v1/${endpoint}`, {
            ...defaultOptions,
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Request failed:', error);
        throw error;
    }
}
```

## Backend Patterns

### Model Pattern
```php
// Base Model Pattern
abstract class BaseModel {
    protected $conn;
    protected $table_name;
    
    public function __construct($db) {
        $this->conn = $db;
    }
    
    abstract public function create($data);
    abstract public function read($id = null);
    abstract public function update($id, $data);
    abstract public function delete($id);
    
    protected function validateData($data) {
        // Common validation logic
        return true;
    }
}
```

### API Response Pattern
```php
// Standard API Response Pattern
class ApiResponse {
    public static function success($data = null, $message = 'Success') {
        return [
            'success' => true,
            'data' => $data,
            'message' => $message,
            'timestamp' => date('Y-m-d H:i:s')
        ];
    }
    
    public static function error($message = 'Error', $errors = []) {
        return [
            'success' => false,
            'message' => $message,
            'errors' => $errors,
            'timestamp' => date('Y-m-d H:i:s')
        ];
    }
}
```

### Authentication Middleware Pattern
```php
// JWT Authentication Middleware
class AuthMiddleware {
    public static function authenticate() {
        $headers = getallheaders();
        $token = null;
        
        if (isset($headers['Authorization'])) {
            $token = str_replace('Bearer ', '', $headers['Authorization']);
        }
        
        if (!$token) {
            http_response_code(401);
            echo json_encode(ApiResponse::error('No token provided'));
            exit;
        }
        
        try {
            $decoded = JWT::decode($token, JWT_SECRET, array('HS256'));
            return $decoded;
        } catch (Exception $e) {
            http_response_code(401);
            echo json_encode(ApiResponse::error('Invalid token'));
            exit;
        }
    }
}
```

## Database Patterns

### Repository Pattern
```php
// Repository Pattern for Data Access
class ProductRepository {
    private $conn;
    
    public function __construct($db) {
        $this->conn = $db;
    }
    
    public function findByCategory($categoryId) {
        $query = "SELECT * FROM products WHERE category_id = ? AND is_active = 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $categoryId);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function search($term) {
        $query = "SELECT * FROM products WHERE name LIKE ? OR description LIKE ?";
        $searchTerm = "%{$term}%";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $searchTerm);
        $stmt->bindParam(2, $searchTerm);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
```

### Transaction Pattern
```php
// Database Transaction Pattern
class OrderService {
    private $conn;
    
    public function createOrder($orderData, $items) {
        try {
            $this->conn->beginTransaction();
            
            // Create order
            $orderId = $this->createOrderRecord($orderData);
            
            // Create order items
            foreach ($items as $item) {
                $this->createOrderItem($orderId, $item);
                $this->updateProductStock($item['product_id'], $item['quantity']);
            }
            
            $this->conn->commit();
            return $orderId;
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }
}
```

## Security Patterns

### Input Validation Pattern
```php
// Input Validation Pattern
class Validator {
    public static function validateEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }
    
    public static function sanitizeInput($input) {
        return htmlspecialchars(strip_tags(trim($input)));
    }
    
    public static function validatePassword($password) {
        return strlen($password) >= 8 && 
               preg_match('/[A-Z]/', $password) && 
               preg_match('/[a-z]/', $password) && 
               preg_match('/[0-9]/', $password);
    }
}
```

### Rate Limiting Pattern
```php
// Rate Limiting Pattern
class RateLimiter {
    private $redis;
    
    public function checkLimit($key, $limit, $window) {
        $current = $this->redis->get($key);
        
        if (!$current) {
            $this->redis->setex($key, $window, 1);
            return true;
        }
        
        if ($current >= $limit) {
            return false;
        }
        
        $this->redis->incr($key);
        return true;
    }
}
```

## Error Handling Patterns

### Frontend Error Handling
```javascript
// Global Error Handler Pattern
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
    // Send to error tracking service
});

// API Error Handler
function handleApiError(error) {
    if (error.status === 401) {
        // Redirect to login
        window.location.href = '/login.html';
    } else if (error.status === 403) {
        showNotification('Access denied', 'error');
    } else {
        showNotification('An error occurred', 'error');
    }
}
```

### Backend Error Handling
```php
// Exception Handler Pattern
class ErrorHandler {
    public static function handleException($exception) {
        error_log($exception->getMessage());
        
        if (DEBUG_MODE) {
            return [
                'error' => $exception->getMessage(),
                'file' => $exception->getFile(),
                'line' => $exception->getLine()
            ];
        } else {
            return ['error' => 'An error occurred'];
        }
    }
}
```

## Performance Patterns

### Caching Pattern
```php
// Cache Pattern
class Cache {
    private $redis;
    
    public function get($key) {
        return $this->redis->get($key);
    }
    
    public function set($key, $value, $ttl = 3600) {
        return $this->redis->setex($key, $ttl, $value);
    }
    
    public function remember($key, $callback, $ttl = 3600) {
        $value = $this->get($key);
        if ($value === false) {
            $value = $callback();
            $this->set($key, $value, $ttl);
        }
        return $value;
    }
}
```

### Lazy Loading Pattern
```javascript
// Lazy Loading Pattern
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}
``` 