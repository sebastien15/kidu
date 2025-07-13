# Kidu E-commerce Platform

A modern cross-border e-commerce platform connecting Dubai-based merchants with customers in Rwanda, built with Laravel 11 and React 18.

## 🚀 Features

- **Multi-language Support**: English, French, and Kinyarwanda
- **Dual Pricing System**: Retail and wholesale pricing
- **Cross-border Logistics**: Integrated shipping and customs handling
- **Multi-currency Support**: USD, AED, RWF
- **Advanced Product Management**: Electronics, cars, and spare parts
- **Role-based Access Control**: Admin, supplier, and customer roles
- **Real-time API**: 39 RESTful endpoints
- **Modern UI/UX**: Responsive design with React 18

## 🛠️ Technology Stack

### Backend
- **Laravel 11** - PHP framework
- **MySQL 8.0** - Database
- **Laravel Sanctum** - API authentication
- **Redis** - Caching and sessions

### Frontend
- **React 18** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool
- **Context API** - State management
- **Modern CSS** - Responsive design

### Development Tools
- **Composer** - PHP dependency management
- **npm/yarn** - JavaScript package management
- **Vite** - Hot module replacement
- **Laravel Artisan** - Command line interface

## 📋 Prerequisites

- PHP 8.1 or higher
- Composer
- Node.js 18 or higher
- MySQL 8.0 or higher
- Redis (optional, for caching)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/sebastien15/kidu.git
cd kidu/kidu-ecommerce
```

### 2. Install PHP Dependencies
```bash
composer install
```

### 3. Install JavaScript Dependencies
```bash
npm install
```

### 4. Environment Setup
```bash
cp .env.example .env
php artisan key:generate
```

### 5. Database Setup
```bash
# Configure your database in .env file
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=kidu_ecommerce
DB_USERNAME=your_username
DB_PASSWORD=your_password

# Run migrations
php artisan migrate --seed
```

### 6. Build Frontend Assets
```bash
npm run build
```

### 7. Start Development Server
```bash
# Terminal 1: Laravel server
php artisan serve

# Terminal 2: Vite development server (for hot reloading)
npm run dev
```

Visit `http://localhost:8000` to see the application.

## 📚 API Documentation

The platform provides a comprehensive REST API with 39 endpoints across 7 categories:

### API Categories
- **Authentication** (4 endpoints) - User registration, login, logout
- **Products** (6 endpoints) - Product management and catalog
- **Categories** (5 endpoints) - Category management
- **Cart** (5 endpoints) - Shopping cart operations
- **Orders** (6 endpoints) - Order management
- **Users** (7 endpoints) - User profile and management
- **Suppliers** (5 endpoints) - Supplier management

### API Documentation Access
- **Interactive Documentation**: `http://localhost:8000/test-api`
- **API Tester Interface**: `http://localhost:8000/api-test`
- **JSON Format**: `http://localhost:8000/test-api/json`

### Authentication
The API uses Laravel Sanctum for authentication with Bearer tokens:

```bash
# Get token
POST /api/login
{
    "email": "user@example.com",
    "password": "password"
}

# Use token in requests
Authorization: Bearer {your_token_here}
```

## 🏗️ Project Structure

```
kidu-site/
├── kidu-ecommerce/              # Main Laravel application
│   ├── app/
│   │   ├── Http/Controllers/    # API controllers
│   │   ├── Models/             # Eloquent models
│   │   └── ...
│   ├── resources/
│   │   ├── js/                 # React application
│   │   │   ├── components/     # React components
│   │   │   ├── pages/         # Page components
│   │   │   ├── context/       # Context providers
│   │   │   └── styles/        # CSS files
│   │   └── views/             # Blade templates
│   ├── routes/
│   │   ├── api.php            # API routes
│   │   └── web.php            # Web routes
│   ├── database/
│   │   ├── migrations/        # Database migrations
│   │   └── seeders/          # Database seeders
│   └── ...
└── autocoding/                 # Project documentation
    ├── backend/               # Backend documentation
    ├── frontend/              # Frontend documentation
    ├── guides/               # Development guides
    └── ...
```

## 🗄️ Database Schema

### Core Tables
- **users** - User management with roles
- **products** - Product catalog with dual pricing
- **categories** - Hierarchical product categories
- **cart_items** - Shopping cart management
- **orders** - Order processing and tracking
- **suppliers** - Supplier management
- **product_images** - Product image management

### Key Features
- **Dual Pricing**: Retail and wholesale prices
- **Role-based Access**: Admin, supplier, customer roles
- **Hierarchical Categories**: Parent-child relationships
- **Order Tracking**: Complete order lifecycle
- **Multi-currency**: Support for USD, AED, RWF

## 🔧 Development

### Available Commands
```bash
# Navigate to Laravel directory
cd kidu-ecommerce

# Laravel commands
php artisan serve              # Start development server
php artisan migrate           # Run database migrations
php artisan db:seed          # Seed database
php artisan route:list       # List all routes
php artisan queue:work       # Process queued jobs

# Frontend commands
npm run dev                  # Start Vite development server
npm run build               # Build for production
npm run preview             # Preview production build
```

### Code Style
- **PHP**: PSR-12 coding standard
- **JavaScript**: ESLint configuration
- **CSS**: BEM methodology for naming

## 📱 Frontend Features

### Components
- **Header**: Sticky navigation with cart indicator
- **Product Cards**: Modern product display
- **Shopping Cart**: Real-time cart updates
- **User Authentication**: Login/register forms
- **Admin Dashboard**: Product and order management

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Modern glassmorphism effects

## 🔐 Security

- **Laravel Sanctum**: API authentication
- **CSRF Protection**: Cross-site request forgery protection
- **Input Validation**: Comprehensive form validation
- **Role-based Access**: Granular permissions
- **Password Hashing**: Bcrypt password hashing
- **SQL Injection Prevention**: Eloquent ORM protection

## 🚀 Deployment

### Production Setup
1. Set up production environment variables
2. Configure database and Redis
3. Run migrations and seeders
4. Build frontend assets
5. Configure web server (Apache/Nginx)
6. Set up SSL certificates
7. Configure caching and optimization

### Environment Variables
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-domain.com
DB_CONNECTION=mysql
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
```

## 📖 Documentation

Comprehensive documentation is available in the `autocoding/` directory:

- [Architecture Overview](autocoding/architecture.md)
- [Backend Documentation](autocoding/backend/ai.md)
- [Frontend Documentation](autocoding/frontend/ai.md)
- [Development Guide](autocoding/guides/development.md)
- [Deployment Guide](autocoding/guides/deployment.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Senior Developer**: Sebastien Ndagijimana
- **Project Type**: Cross-border E-commerce Platform
- **Technology**: Laravel + React Full Stack

## 📞 Support

For support and questions:
- Create an issue in this repository
- Check the [API documentation](http://localhost:8000/test-api)
- Review the [development guides](autocoding/guides/)

## 🔄 Migration History

This project was successfully migrated from:
1. **Odoo** → **React** (12 pages)
2. **React** → **Laravel + React** (Current architecture)

The migration preserved all original Odoo styling while implementing modern React functionality and Laravel backend architecture.

---

**Built with ❤️ for cross-border e-commerce between Dubai and Rwanda** 