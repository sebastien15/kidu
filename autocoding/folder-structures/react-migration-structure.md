# Kidu E-commerce Platform: React Migration Folder Structure

This structure is designed for the React-based frontend migration, ensuring 100% visual and functional parity with the current platform. Each folder and file is described for clarity and future development.

```
react-client/
├── public/
│   ├── index.html                # Main HTML file
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       └── fonts/
├── src/
│   ├── components/
│   │   ├── common/               # Shared UI (Header, Footer, Navbar, Button, Modal, Loading)
│   │   ├── product/              # Product UI (ProductCard, ProductGrid, ProductDetail, etc.)
│   │   ├── cart/                 # Cart UI (CartItem, CartSummary, CartDropdown, CartIcon)
│   │   ├── checkout/             # Checkout UI (CheckoutForm, PaymentForm, ShippingForm, OrderSummary)
│   │   ├── user/                 # User UI (LoginForm, RegisterForm, ProfileForm, OrderHistory)
│   │   └── admin/                # Admin UI (Dashboard, ProductManager, OrderManager, UserManager)
│   ├── pages/
│   │   ├── Home/
│   │   ├── Shop/
│   │   ├── ProductDetail/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── Account/
│   │   ├── About/
│   │   ├── Contact/
│   │   └── Admin/
│   ├── hooks/                    # Custom React hooks (useApi, useAuth, useCart, useProducts, useLocalStorage)
│   ├── services/                 # API services (api.js, authService.js, productService.js, etc.)
│   ├── context/                  # React Context (AuthContext, CartContext, ThemeContext, AppContext)
│   ├── utils/                    # Utility functions (constants, helpers, validators, formatters, localStorage)
│   ├── styles/                   # Global and modular styles (globals.css, variables.css, reset.css, typography.css, utilities.css, components.css)
│   ├── assets/                   # Local assets (images, icons, fonts)
│   ├── App.jsx                   # Main App component
│   ├── App.css                   # App-level styles
│   ├── index.js                  # Entry point
│   └── index.css                 # Global styles
├── .env                          # Environment variables
├── package.json                  # Project dependencies
├── vite.config.js                # Vite configuration
├── README.md                     # Project documentation
└── ...                           # Other config files (eslint, prettier, etc.)
```

## Folder Descriptions
- **public/**: Static files and assets served directly.
- **src/components/**: All React UI components, organized by feature/domain.
- **src/pages/**: Top-level page components mapped to routes.
- **src/hooks/**: Custom React hooks for stateful logic and API calls.
- **src/services/**: API service modules for backend communication.
- **src/context/**: React Context providers for global state management.
- **src/utils/**: Helper functions and utilities.
- **src/styles/**: CSS Modules and global styles, including variables and resets.
- **src/assets/**: Images, icons, and fonts used in the app.
- **App.jsx**: Main application component.
- **index.js**: App entry point.
- **.env**: Environment variables.
- **vite.config.js**: Vite build configuration.
- **README.md**: Project documentation. 