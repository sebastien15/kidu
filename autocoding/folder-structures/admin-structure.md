# Admin/Dashboard (Backoffice) Folder Structure

This structure is for the admin dashboard used by Kidu staff for managing products, orders, suppliers, logistics, and analytics. Each folder and file is described for clarity and future reference.

```
admin/
├── public/                  # Static assets (favicon, robots.txt, etc.)
│   ├── images/              # Public images
│   └── ...
├── src/                     # Source code
│   ├── assets/              # Images, icons, SVGs, etc. used in the dashboard
│   ├── components/          # Reusable UI components (tables, forms, modals, etc.)
│   ├── layouts/             # Layout components (sidebar, header, footer)
│   ├── pages/               # Page components (Dashboard, Products, Orders, etc.)
│   ├── modules/             # Feature modules (user, product, order, supplier, logistics, analytics, etc.)
│   ├── services/            # API service handlers
│   ├── hooks/               # Custom hooks for stateful logic
│   ├── contexts/            # Global state/context providers
│   ├── utils/               # Utility functions/helpers
│   ├── i18n/                # Internationalization (translations)
│   ├── styles/              # Global and modular styles (CSS/SCSS)
│   ├── config/              # App configuration (env, constants)
│   ├── routes/              # Route definitions
│   ├── types/               # TypeScript types/interfaces (if using TS)
│   └── index.js|ts          # App entry point
├── .env                     # Environment variables
├── package.json             # NPM/Yarn dependencies and scripts
├── README.md                # Project documentation
└── ...                      # Other config files (tsconfig, eslint, etc.)
```

## Folder Descriptions
- **public/**: Static files served as-is.
- **src/assets/**: Images, icons, and other static resources.
- **src/components/**: Reusable UI building blocks for admin.
- **src/layouts/**: Dashboard layout wrappers (sidebar, header, etc.).
- **src/pages/**: Top-level dashboard pages mapped to routes.
- **src/modules/**: Feature-specific logic and UI (e.g., user, product, order, supplier, logistics, analytics).
- **src/services/**: API calls and data fetching logic.
- **src/hooks/**: Custom hooks for stateful logic.
- **src/contexts/**: Global state/context providers.
- **src/utils/**: Helper functions and utilities.
- **src/i18n/**: Translation files and i18n setup.
- **src/styles/**: CSS/SCSS files for styling.
- **src/config/**: App-wide configuration and constants.
- **src/routes/**: Route definitions and guards.
- **src/types/**: TypeScript types/interfaces.
- **index.js|ts**: Main entry point for the dashboard app. 