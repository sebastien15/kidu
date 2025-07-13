# Kidu E-commerce Platform - Documentation Hub

## Project Overview
## Project Description
Kidu is acomprehensive Laravel 11 + React e-commerce platform specializing in electronics, cars, and car spare parts with retail, wholesale, and logistics services for cross-border trade between Dubai and Rwanda.

## Current Architecture
- **Backend**: Laravel 11 with Sanctum authentication
- **Frontend**: React 18 with React Router
- **Database**: MySQL with comprehensive schema
- **API**: RESTful API with 39 endpoints
- **Build**: Vite with Laravel integration

## Quick Start

### API Testing
- **Interactive Interface**: http://127.0.0.1:8001/api-test
- **API Endpoint List**: http://127.0.0.1:8001/test-api
- **Main Application**: http://127.0.0.1:8001

### Development Setup
```bash
# Laravel setup
cd laravel-kidu/kidu-ecommerce
composer install
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve

# React setup (new terminal)
npm install
npm run dev
```

## Documentation Structure

### Core Documentation
- **[Architecture Overview](architecture.md)** - Complete system architecture
- **[Development Rules](rules.md)** - Coding standards and guidelines
- **[Development Patterns](patterns.md)** - Code patterns and best practices
- **[Project Context](context.md)** - Project background and context

### Technical Documentation
- **[Backend Documentation](backend/ai.md)** - Laravel API documentation
- **[Frontend Documentation](frontend/ai.md)** - React application documentation
- **[Database Schema](DATABASE_SCHEMA.md)** - Database design and relationships
- **[API Documentation](API_DOCUMENTATION.md)** - API endpoints and usage

### Development Guides
- **[Development Guide](guides/development.md)** - Development workflow
- **[Deployment Guide](guides/deployment.md)** - Deployment procedures
- **[Backend Guide](BACKEND_GUIDE.md)** - Backend development guide
- **[Frontend Guide](FRONTEND_GUIDE.md)** - Frontend development guide

## Project Structure

```
kidu-site/
├── laravel-kidu/kidu-ecommerce/    # Main Laravel + React application
│   ├── app/Http/Controllers/Api/   # API Controllers
│   ├── resources/js/               # React frontend
│   │   ├── components/             # React components
│   │   ├── pages/                  # React pages
│   │   └── context/                # React Context providers
│   ├── database/migrations/        # Database migrations
│   ├── routes/api.php              # API routes
│   ├── routes/web.php              # Web routes
│   └── public/                     # Public assets
├── autocoding/                     # This documentation
└── client/                         # Original Odoo reference
```

## API Endpoints (39 total)

### Authentication (4 endpoints)
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/user` - Get current user

### Products (6 endpoints)
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get single product
- `GET /api/products/featured` - Get featured products
- `POST /api/products` - Create product (admin)
- `PUT /api/products/{id}` - Update product (admin)
- `DELETE /api/products/{id}` - Delete product (admin)

### Categories (5 endpoints)
- `GET /api/categories` - Get all categories
- `GET /api/categories/{id}` - Get single category
- `POST /api/categories` - Create category (admin)
- `PUT /api/categories/{id}` - Update category (admin)
- `DELETE /api/categories/{id}` - Delete category (admin)

### Cart (5 endpoints)
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/{id}` - Update cart item
- `DELETE /api/cart/remove/{id}` - Remove cart item
- `DELETE /api/cart/clear` - Clear cart

### Orders (6 endpoints)
- `GET /api/orders` - Get user orders
- `GET /api/orders/{id}` - Get single order
- `POST /api/orders` - Create order
- `PUT /api/orders/{id}/cancel` - Cancel order
- `GET /api/orders/all` - Get all orders (admin)
- `PUT /api/orders/{id}/status` - Update order status (admin)

### Users (7 endpoints)
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update user profile
- `PUT /api/password` - Update password
- `GET /api/users` - Get all users (admin)
- `GET /api/users/{id}` - Get single user (admin)
- `PUT /api/users/{id}` - Update user (admin)
- `DELETE /api/users/{id}` - Delete user (admin)

### Suppliers (5 endpoints)
- `GET /api/suppliers` - Get all suppliers (admin)
- `GET /api/suppliers/{id}` - Get single supplier (admin)
- `POST /api/suppliers` - Create supplier (admin)
- `PUT /api/suppliers/{id}` - Update supplier (admin)
- `DELETE /api/suppliers/{id}` - Delete supplier (admin)

### Miscellaneous (1 endpoint)
- `GET /api/user` - Get authenticated user

## Key Features

### E-commerce Features
- **Dual Pricing**: Retail and wholesale pricing
- **Role-Based Access**: Admin, customer roles
- **Hierarchical Categories**: Parent-child relationships
- **Complete Order System**: Order creation, status tracking
- **Shopping Cart**: Full cart functionality
- **User Management**: Enhanced profiles with e-commerce fields
- **Supplier Management**: Complete supplier tracking

### Technical Features
- **React Integration**: Seamless Laravel + React setup
- **API Testing Interface**: Built-in web interface for API testing
- **Sticky Header**: Smooth scrolling navigation
- **Responsive Design**: Mobile-first approach
- **Original Styling**: Preserved Odoo visual design
- **Hot Module Replacement**: Vite development server

## Development Status

### Completed
✅ Laravel 11 backend with comprehensive API  
✅ React 18 frontend with routing  
✅ Database schema with migrations and seeders  
✅ Authentication system with Sanctum  
✅ API testing interface  
✅ Sticky header navigation  
✅ Original Odoo styling preservation  
✅ Hero banner implementation  
✅ All 12 pages functional  

### In Progress
🔄 Frontend-backend integration  
🔄 Shopping cart functionality  
🔄 Order management system  
🔄 User profile management  

### Planned
📋 Payment gateway integration  
📋 Shipping provider integration  
📋 Email notifications  
📋 Advanced search and filtering  
📋 Real-time features  
📋 Mobile app support  

## Development Guidelines

### Code Standards
- PSR-12 coding standards for PHP
- ESLint configuration for JavaScript
- Component-based architecture
- RESTful API design principles

### Git Workflow
- Feature branches for development
- Code reviews before merging
- Conventional commit messages
- Documentation updates with features

### Testing Strategy
- PHPUnit for backend testing
- Jest for frontend testing
- API endpoint testing
- User journey testing

## Support & Resources

### Development Tools
- **API Tester**: http://127.0.0.1:8001/api-test
- **API Documentation**: http://127.0.0.1:8001/test-api
- **Laravel Artisan**: `php artisan route:list`
- **Vite Dev Server**: `npm run dev`

### Documentation Updates
When making changes to the project:
1. Update relevant documentation files
2. Update API endpoint counts if routes change
3. Update feature status in this README
4. Update architecture diagrams if structure changes

### Contact Information
For questions about this documentation or the project:
- Check the individual documentation files
- Review the API testing interface
- Consult the Laravel and React documentation
- Follow the development guides in the guides/ folder

---

**Last Updated**: December 2024  
**Project Version**: Laravel 11 + React 18  
**API Endpoints**: 39 total  
**Documentation Status**: Complete and up-to-date 