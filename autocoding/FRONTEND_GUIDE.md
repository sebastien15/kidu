# Frontend Development Guide

## Structure
```
frontend/
├── client/          # Customer-facing website
└── dashboard/       # Admin dashboard
```

## Client Application (`/frontend/client/`)

### File Structure
```
client/
├── assets/
│   ├── css/
│   │   ├── main.css          # Main styles
│   │   ├── components.css    # Component styles
│   │   └── responsive.css    # Media queries
│   ├── js/
│   │   ├── main.js          # Main application
│   │   ├── api.js           # API communication
│   │   ├── auth.js          # Authentication
│   │   ├── cart.js          # Shopping cart
│   │   └── utils.js         # Utility functions
│   └── images/              # Static images
├── pages/
│   ├── products.html        # Product listing
│   ├── product-detail.html  # Single product
│   ├── cart.html           # Shopping cart
│   ├── checkout.html       # Checkout process
│   └── account.html        # User account
├── components/
│   ├── header.html         # Site header
│   ├── footer.html         # Site footer
│   ├── product-card.html   # Product card component
│   └── navigation.html     # Navigation menu
└── index.html              # Home page
```

### Key Features
- **Responsive Design**: Mobile-first approach
- **AJAX Communication**: No page reloads
- **JWT Authentication**: Token-based auth
- **Shopping Cart**: Local storage + server sync
- **Product Search**: Real-time search with filtering
- **User Account**: Profile management and order history

### JavaScript Modules
- **main.js**: Application initialization and routing
- **api.js**: All API calls and error handling
- **auth.js**: Authentication management
- **cart.js**: Shopping cart functionality
- **utils.js**: Common utility functions

## Dashboard Application (`/frontend/dashboard/`)

### File Structure
```
dashboard/
├── assets/
│   ├── css/
│   │   ├── admin.css        # Admin styles
│   │   ├── dashboard.css    # Dashboard specific
│   │   └── tables.css       # Data tables
│   ├── js/
│   │   ├── admin.js         # Main admin app
│   │   ├── products.js      # Product management
│   │   ├── orders.js        # Order management
│   │   └── users.js         # User management
│   └── images/              # Admin images
├── pages/
│   ├── products.html        # Product management
│   ├── orders.html          # Order management
│   ├── users.html           # User management
│   └── analytics.html       # Analytics dashboard
├── components/
│   ├── sidebar.html         # Admin sidebar
│   ├── topbar.html          # Admin topbar
│   └── modal.html           # Modal dialogs
└── index.html               # Dashboard home
```

### Development Guidelines
- Use semantic HTML5 elements
- Follow BEM CSS methodology
- Implement proper error handling
- Add loading states for all operations
- Ensure accessibility compliance 