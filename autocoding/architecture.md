# Kidu E-commerce Platform Architecture

## Project Overview
A comprehensive Laravel 11 + React e-commerce platform specializing in electronics, cars, and car spare parts with retail, wholesale, and logistics services for cross-border trade between Dubai and Rwanda.

## Technology Stack

### Backend
- **Framework**: Laravel 11
- **Database**: MySQL 5.7+
- **Authentication**: Laravel Sanctum
- **API**: RESTful API with comprehensive endpoints
- **Queue System**: Redis (for background jobs)
- **Cache**: Redis
- **Storage**: Local storage (ready for AWS S3)

### Frontend
- **Framework**: React 18
- **Routing**: React Router v6
- **Build Tool**: Vite with Laravel integration
- **Styling**: Custom CSS + Original Odoo CSS + Bootstrap
- **State Management**: React Context API
- **HTTP Client**: Fetch API

### Development Tools
- **Package Manager**: Composer (PHP), npm (JavaScript)
- **Testing**: PHPUnit (backend), Jest (frontend)
- **Code Quality**: ESLint, Prettier
- **Version Control**: Git

## Project Structure

```
kidu-site/
├── laravel-kidu/
│   └── kidu-ecommerce/                 # Main Laravel application
│       ├── app/
│       │   ├── Http/
│       │   │   ├── Controllers/
│       │   │   │   ├── Api/            # API Controllers
│       │   │   │   │   ├── Auth/
│       │   │   │   │   │   └── AuthController.php
│       │   │   │   │   ├── CartController.php
│       │   │   │   │   ├── CategoryController.php
│       │   │   │   │   ├── OrderController.php
│       │   │   │   │   ├── ProductController.php
│       │   │   │   │   ├── SupplierController.php
│       │   │   │   │   └── UserController.php
│       │   │   │   └── ProfileController.php
│       │   │   └── Middleware/
│       │   ├── Models/
│       │   │   ├── User.php
│       │   │   ├── Product.php
│       │   │   ├── Category.php
│       │   │   ├── Order.php
│       │   │   ├── OrderItem.php
│       │   │   ├── Cart.php
│       │   │   ├── CartItem.php
│       │   │   └── Supplier.php
│       │   ├── Services/               # Business logic services
│       │   ├── Enums/                  # Enumeration classes
│       │   └── Providers/              # Service providers
│       ├── database/
│       │   ├── migrations/             # Database migrations
│       │   ├── seeders/                # Database seeders
│       │   └── factories/              # Model factories
│       ├── routes/
│       │   ├── api.php                 # API routes
│       │   ├── web.php                 # Web routes + React app serving
│       │   └── auth.php                # Authentication routes
│       ├── resources/
│       │   ├── js/                     # React Frontend
│       │   │   ├── app.jsx             # Main React app
│       │   │   ├── main.jsx            # React entry point
│       │   │   ├── App.css             # Global styles
│       │   │   ├── components/         # React components
│       │   │   │   ├── common/
│       │   │   │   │   ├── Header/
│       │   │   │   │   │   ├── Header.jsx
│       │   │   │   │   │   └── Header.css
│       │   │   │   │   ├── Footer/
│       │   │   │   │   └── Layout/
│       │   │   │   └── ui/
│       │   │   ├── pages/              # React pages
│       │   │   │   ├── Home/
│       │   │   │   │   ├── Home.jsx
│       │   │   │   │   └── Home.css
│       │   │   │   ├── Shop/
│       │   │   │   ├── Services/
│       │   │   │   ├── Pricing/
│       │   │   │   ├── About/
│       │   │   │   ├── Contact/
│       │   │   │   ├── News/
│       │   │   │   ├── SuccessStories/
│       │   │   │   └── Help/
│       │   │   ├── context/            # React Context providers
│       │   │   │   ├── AuthContext.js
│       │   │   │   └── CartContext.js
│       │   │   ├── styles/             # Global styles
│       │   │   │   ├── globals.css
│       │   │   │   └── variables.css
│       │   │   ├── assets/             # Static assets
│       │   │   │   ├── images/
│       │   │   │   └── icons/
│       │   │   └── Layouts/
│       │   │       └── MainLayout.jsx
│       │   ├── views/                  # Blade templates
│       │   │   ├── app.blade.php       # React app template
│       │   │   └── api-test.blade.php  # API testing interface
│       │   └── css/                    # Additional CSS files
│       ├── public/                     # Public assets
│       │   ├── images/                 # Public images
│       │   │   ├── hero-banner.jpg
│       │   │   ├── logo.png
│       │   │   └── ...
│       │   ├── web_editor/             # Odoo assets
│       │   │   ├── fonts/
│       │   │   ├── css/
│       │   │   │   └── web.assets_frontend.min.css
│       │   │   └── images/
│       │   └── build/                  # Compiled assets (auto-generated)
│       ├── config/                     # Laravel configuration
│       ├── storage/                    # Laravel storage
│       ├── tests/                      # Laravel tests
│       ├── vendor/                     # PHP dependencies
│       ├── node_modules/               # Node.js dependencies
│       ├── package.json                # Node.js dependencies
│       ├── composer.json               # PHP dependencies
│       ├── vite.config.js              # Vite configuration
│       └── README.md                   # Project documentation
├── autocoding/                         # Documentation and guides
│   ├── backend/
│   │   └── ai.md                       # Backend documentation
│   ├── frontend/
│   │   └── ai.md                       # Frontend documentation
│   ├── guides/
│   │   ├── development.md
│   │   └── deployment.md
│   ├── architecture.md                 # This file
│   ├── context.md
│   ├── patterns.md
│   ├── rules.md
│   └── README.md
└── client/                             # Original Odoo client (reference)
    ├── index.html                      # Original HTML structure
    ├── css/
    ├── images/
    └── fonts/
```

## Application Architecture

### Request Flow

1. **Client Request** → Laravel Router
2. **Route Matching**:
   - `/api/*` → API Controllers (JSON responses)
   - `/admin/*` → Admin dashboard (Inertia.js)
   - `/api-test` → API testing interface
   - `/test-api` → API endpoint listing
   - `/*` → React app (SPA)

3. **API Requests**:
   - Authentication via Laravel Sanctum
   - Role-based access control
   - JSON responses with proper HTTP status codes

4. **React App**:
   - Client-side routing with React Router
   - State management with Context API
   - API communication with fetch

### Authentication Flow

1. **Registration/Login** → Laravel Sanctum token generation
2. **Token Storage** → localStorage in React app
3. **API Requests** → Bearer token in Authorization header
4. **Token Validation** → Laravel Sanctum middleware
5. **User Context** → React Context API for user state

## Database Schema

### Core Tables

```sql
-- Users table with retail/wholesale types
users (
    id, name, email, password, user_type, 
    phone, address, city, country, 
    company_name, tax_number, is_active, 
    created_at, updated_at
)

-- Products with dual pricing
products (
    id, name, slug, description, sku,
    retail_price, wholesale_price, stock,
    category_id, supplier_id, status,
    is_featured, specifications, images,
    created_at, updated_at
)

-- Hierarchical categories
categories (
    id, name, slug, description, parent_id,
    sort_order, is_active, meta_title,
    meta_description, created_at, updated_at
)

-- Orders with comprehensive tracking
orders (
    id, user_id, order_number, status,
    subtotal, tax_amount, shipping_amount,
    total_amount, shipping_address, billing_address,
    payment_method, payment_status, tracking_number,
    estimated_delivery, notes, created_at, updated_at
)

-- Order items
order_items (
    id, order_id, product_id, quantity,
    unit_price, total_price, created_at, updated_at
)

-- Shopping cart
carts (
    id, user_id, created_at, updated_at
)

-- Cart items
cart_items (
    id, cart_id, product_id, quantity,
    created_at, updated_at
)

-- Suppliers
suppliers (
    id, name, email, phone, address,
    city, country, contact_person, tax_number,
    website, is_active, notes, created_at, updated_at
)
```

## API Architecture

### Base URL: `http://127.0.0.1:8001/api`

### Authentication Endpoints
- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout
- `GET /user` - Get current user

### Resource Endpoints
- **Products**: CRUD operations with filtering
- **Categories**: Hierarchical category management
- **Cart**: Shopping cart operations
- **Orders**: Order management with status tracking
- **Users**: User profile and management
- **Suppliers**: Supplier management (admin only)

### Response Format
```json
{
    "success": true,
    "data": { /* response data */ },
    "message": "Success message",
    "meta": { /* pagination, etc */ }
}
```

### Error Format
```json
{
    "success": false,
    "error": "Error message",
    "errors": { /* validation errors */ },
    "code": 400
}
```

## Frontend Architecture

### Component Structure
```
components/
├── common/                 # Shared components
│   ├── Header/            # Navigation header
│   ├── Footer/            # Site footer
│   └── Layout/            # Layout components
├── ui/                    # UI components
│   ├── Button/
│   ├── Input/
│   └── Modal/
└── pages/                 # Page components
    ├── Home/
    ├── Shop/
    └── ...
```

### State Management
- **Authentication**: AuthContext for user state
- **Shopping Cart**: CartContext for cart state
- **Local State**: useState for component state
- **API State**: Custom hooks for API data

### Routing Strategy
- **Client-side**: React Router for SPA navigation
- **Server-side**: Laravel serves React app
- **API Routes**: Separate API endpoints
- **Fallback**: Laravel catches all routes and serves React

## Development Workflow

### Local Development Setup
1. **Laravel Setup**:
   ```bash
   composer install
   php artisan key:generate
   php artisan migrate
   php artisan db:seed
   php artisan serve
   ```

2. **React Setup**:
   ```bash
   npm install
   npm run dev
   ```

3. **Access Points**:
   - Main App: `http://127.0.0.1:8001`
   - API Test: `http://127.0.0.1:8001/api-test`
   - API List: `http://127.0.0.1:8001/test-api`

### Build Process
1. **Development**: Vite dev server with HMR
2. **Production**: `npm run build` → compiled assets
3. **Deployment**: Laravel serves compiled React app

## Security Architecture

### Backend Security
- **Authentication**: Laravel Sanctum tokens
- **Authorization**: Role-based access control
- **Input Validation**: Laravel Form Requests
- **SQL Injection**: Eloquent ORM protection
- **CSRF Protection**: Laravel CSRF middleware

### Frontend Security
- **XSS Prevention**: React's built-in escaping
- **Token Storage**: localStorage with expiration
- **API Communication**: HTTPS in production
- **Input Sanitization**: Client-side validation

## Performance Considerations

### Backend Optimization
- **Database Indexing**: Optimized queries
- **Caching**: Redis for session/cache
- **Queue System**: Background job processing
- **API Pagination**: Efficient data loading

### Frontend Optimization
- **Code Splitting**: Route-based splitting
- **Lazy Loading**: Component lazy loading
- **Asset Optimization**: Vite bundling
- **Image Optimization**: Responsive images

## Deployment Architecture

### Production Environment
```
Load Balancer
├── Web Server (Nginx)
├── Application Server (PHP-FPM)
├── Database Server (MySQL)
├── Cache Server (Redis)
└── File Storage (AWS S3)
```

### CI/CD Pipeline
1. **Code Push** → Git repository
2. **Build Process** → Compile assets
3. **Testing** → Run test suites
4. **Deployment** → Production servers
5. **Monitoring** → Error tracking

## Monitoring & Logging

### Application Monitoring
- **Laravel Logs**: Application errors and info
- **Database Monitoring**: Query performance
- **API Monitoring**: Response times and errors
- **User Analytics**: Usage patterns

### Error Tracking
- **Backend Errors**: Laravel error handling
- **Frontend Errors**: JavaScript error tracking
- **API Errors**: Comprehensive error responses
- **User Feedback**: Error reporting system

## Scalability Considerations

### Horizontal Scaling
- **Load Balancing**: Multiple app instances
- **Database Sharding**: Distributed data
- **CDN Integration**: Static asset delivery
- **Microservices**: Service decomposition

### Vertical Scaling
- **Server Resources**: CPU, memory, storage
- **Database Optimization**: Query tuning
- **Cache Layers**: Multiple cache levels
- **Asset Optimization**: Compressed assets

## Integration Points

### Third-Party Services
- **Payment Gateways**: Stripe, PayPal (ready)
- **Shipping Providers**: DHL, FedEx (ready)
- **Email Services**: Laravel Mail
- **Analytics**: Google Analytics (ready)

### API Integrations
- **External APIs**: RESTful integration
- **Webhooks**: Event-driven updates
- **Data Sync**: Real-time synchronization
- **Error Handling**: Graceful failures

## Future Enhancements

### Planned Features
- **Real-time Notifications**: WebSocket integration
- **Advanced Search**: Elasticsearch integration
- **Multi-language**: Internationalization
- **Mobile App**: React Native app
- **PWA**: Progressive Web App features

### Architecture Evolution
- **Microservices**: Service decomposition
- **Event Sourcing**: Event-driven architecture
- **CQRS**: Command Query Responsibility Segregation
- **GraphQL**: Alternative API layer

This architecture provides a solid foundation for a scalable, maintainable e-commerce platform with modern development practices and deployment strategies. 