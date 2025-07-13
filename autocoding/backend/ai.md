# Backend AI Documentation - Laravel + React E-commerce Platform

## Project Overview
This is a Laravel 11 + React e-commerce platform specializing in electronics, cars, and car spare parts with retail, wholesale, and logistics services. The backend is built with Laravel serving as an API backend while React handles the frontend.

## Architecture
- **Backend**: Laravel 11 with Sanctum authentication
- **Frontend**: React 18 with React Router
- **Database**: MySQL with migrations and seeders
- **API**: RESTful API with comprehensive endpoints
- **Authentication**: Laravel Sanctum for API authentication

## Current Project Structure

```
laravel-kidu/kidu-ecommerce/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Api/
│   │   │   │   ├── Auth/
│   │   │   │   │   └── AuthController.php
│   │   │   │   ├── CartController.php
│   │   │   │   ├── CategoryController.php
│   │   │   │   ├── OrderController.php
│   │   │   │   ├── ProductController.php
│   │   │   │   ├── SupplierController.php
│   │   │   │   └── UserController.php
│   │   │   └── ProfileController.php
│   │   └── Middleware/
│   ├── Models/
│   │   ├── User.php
│   │   ├── Product.php
│   │   ├── Category.php
│   │   ├── Order.php
│   │   ├── OrderItem.php
│   │   ├── Cart.php
│   │   ├── CartItem.php
│   │   └── Supplier.php
│   ├── Services/
│   ├── Enums/
│   └── Providers/
├── database/
│   ├── migrations/
│   ├── seeders/
│   └── factories/
├── routes/
│   ├── api.php (API routes)
│   ├── web.php (Web routes + React app serving)
│   └── auth.php
├── resources/
│   ├── js/ (React frontend)
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── styles/
│   │   └── app.jsx
│   ├── views/
│   │   ├── app.blade.php (React app template)
│   │   └── api-test.blade.php (API testing interface)
│   └── css/
├── public/
│   ├── images/
│   ├── web_editor/
│   └── build/ (compiled assets)
└── config/
```

## API Endpoints

### Base URL: `http://127.0.0.1:8001/api`

### Authentication Endpoints
- `POST /api/register` - Register new user
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user (requires auth)
- `GET /api/user` - Get current user (requires auth)

### Product Endpoints
- `GET /api/products` - Get all products with filtering
- `GET /api/products/{id}` - Get single product
- `GET /api/products/featured` - Get featured products
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/{id}` - Update product (admin only)
- `DELETE /api/products/{id}` - Delete product (admin only)

### Category Endpoints
- `GET /api/categories` - Get all categories
- `GET /api/categories/{id}` - Get single category
- `POST /api/categories` - Create category (admin only)
- `PUT /api/categories/{id}` - Update category (admin only)
- `DELETE /api/categories/{id}` - Delete category (admin only)

### Cart Endpoints
- `GET /api/cart` - Get user cart (requires auth)
- `POST /api/cart/add` - Add item to cart (requires auth)
- `PUT /api/cart/update/{id}` - Update cart item (requires auth)
- `DELETE /api/cart/remove/{id}` - Remove item from cart (requires auth)
- `DELETE /api/cart/clear` - Clear cart (requires auth)

### Order Endpoints
- `GET /api/orders` - Get user orders (requires auth)
- `GET /api/orders/{id}` - Get single order (requires auth)
- `POST /api/orders` - Create order (requires auth)
- `PUT /api/orders/{id}/cancel` - Cancel order (requires auth)
- `GET /api/orders/all` - Get all orders (admin only)
- `PUT /api/orders/{id}/status` - Update order status (admin only)

### User Management Endpoints
- `GET /api/profile` - Get user profile (requires auth)
- `PUT /api/profile` - Update user profile (requires auth)
- `PUT /api/password` - Update password (requires auth)
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/{id}` - Get single user (admin only)
- `PUT /api/users/{id}` - Update user (admin only)
- `DELETE /api/users/{id}` - Delete user (admin only)

### Supplier Endpoints
- `GET /api/suppliers` - Get all suppliers (admin only)
- `GET /api/suppliers/{id}` - Get single supplier (admin only)
- `POST /api/suppliers` - Create supplier (admin only)
- `PUT /api/suppliers/{id}` - Update supplier (admin only)
- `DELETE /api/suppliers/{id}` - Delete supplier (admin only)

## API Testing

### Interactive Web Interface
Access the built-in API testing interface at: `http://127.0.0.1:8001/api-test`

Features:
- No Postman required
- One-click testing with pre-filled forms
- Real-time authentication status
- Tabbed interface for different API categories
- Color-coded responses

### API Endpoint List
Get a complete list of all available API endpoints: `http://127.0.0.1:8001/test-api`

## Database Schema

### Core Tables
- `users` - User accounts with retail/wholesale types
- `products` - Product catalog with dual pricing
- `categories` - Hierarchical product categories
- `orders` - Order management with status tracking
- `order_items` - Order line items
- `carts` - Shopping cart sessions
- `cart_items` - Cart line items
- `suppliers` - Supplier management

### Key Features
- **Dual Pricing**: Retail and wholesale prices per product
- **Role-Based Access**: Admin, customer roles
- **Hierarchical Categories**: Parent-child relationships
- **Order Management**: Complete order lifecycle
- **Shopping Cart**: Full cart functionality
- **User Types**: Retail vs wholesale customers

## Authentication & Security

### Laravel Sanctum
- Token-based authentication
- Secure API access
- Role-based permissions
- Session management

### Security Features
- CSRF protection
- SQL injection prevention
- XSS protection
- Input validation
- Password hashing

## Development Tools

### Artisan Commands
```bash
# Database
php artisan migrate
php artisan db:seed

# Development server
php artisan serve

# Routes
php artisan route:list

# Clear cache
php artisan cache:clear
php artisan config:clear
```

### Testing
- PHPUnit for backend testing
- Feature tests for API endpoints
- Unit tests for models and services

## Deployment Considerations

### Environment Configuration
- Database connection settings
- API keys and secrets
- Mail configuration
- Cache configuration

### Performance Optimization
- Database indexing
- Query optimization
- Caching strategies
- Asset optimization

### Security Hardening
- Environment variables
- HTTPS enforcement
- Rate limiting
- Input sanitization

## Integration Points

### Frontend Integration
- React Router for client-side routing
- Axios for API communication
- Context API for state management
- Vite for asset compilation

### Third-Party Services
- Payment gateways (ready for integration)
- Shipping providers (ready for integration)
- Email services (Laravel Mail)
- File storage (Laravel Storage)

## Monitoring & Logging

### Laravel Logging
- Application logs
- Error tracking
- Performance monitoring
- Debug information

### Database Monitoring
- Query performance
- Connection pooling
- Migration tracking
- Backup strategies

## Development Guidelines

### Code Standards
- PSR-12 coding standards
- Laravel best practices
- RESTful API design
- Consistent naming conventions

### API Design Principles
- RESTful endpoints
- Consistent response formats
- Proper HTTP status codes
- Comprehensive error handling

### Database Design
- Normalized schema
- Proper relationships
- Efficient indexing
- Migration-based changes

## Future Enhancements

### Planned Features
- Real-time notifications
- Advanced search and filtering
- Inventory management
- Reporting and analytics
- Multi-language support
- Mobile app API support

### Scalability Considerations
- Database sharding
- Caching layers
- Load balancing
- Microservices architecture

## Troubleshooting

### Common Issues
- CORS configuration
- Database connection
- Authentication tokens
- Route conflicts

### Debug Tools
- Laravel Telescope (for development)
- Debug bar
- Log viewer
- API testing interface

## Support Resources

### Documentation
- Laravel documentation
- API endpoint documentation
- Database schema documentation
- Deployment guides

### Development Tools
- Interactive API tester: `/api-test`
- API endpoint list: `/test-api`
- Route listing: `php artisan route:list`
- Database migrations: `php artisan migrate:status` 