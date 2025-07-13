# Client (Customer Frontend) Folder Structure

This structure is for the main customer-facing web application of Kidu. Each folder and file is described for clarity and future reference.

```
client/
├── public/                  # Static assets (favicon, robots.txt, etc.)
│   ├── images/              # Public images
│   ├── fonts/               # Web fonts
│   └── ...
├── src/                     # Source code
│   ├── assets/              # Images, icons, SVGs, etc. used in the app
│   ├── components/          # Reusable UI components (buttons, cards, etc.)
│   ├── layouts/             # Layout components (header, footer, main layout)
│   ├── pages/               # Page components (Home, Product, Cart, etc.)
│   ├── modules/             # Feature modules (auth, cart, product, order, etc.)
│   ├── services/            # API service handlers (fetch, axios, etc.)
│   ├── hooks/               # Custom React/Vue hooks (if using React/Vue)
│   ├── contexts/            # React/Vue context providers (global state)
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
- **src/components/**: Small, reusable UI building blocks.
- **src/layouts/**: Page layout wrappers (header, footer, etc.).
- **src/pages/**: Top-level pages mapped to routes.
- **src/modules/**: Feature-specific logic and UI (e.g., product, cart, auth).
- **src/services/**: API calls and data fetching logic.
- **src/hooks/**: Custom hooks for stateful logic (React/Vue).
- **src/contexts/**: Global state/context providers.
- **src/utils/**: Helper functions and utilities.
- **src/i18n/**: Translation files and i18n setup.
- **src/styles/**: CSS/SCSS files for styling.
- **src/config/**: App-wide configuration and constants.
- **src/routes/**: Route definitions and guards.
- **src/types/**: TypeScript types/interfaces.
- **index.js|ts**: Main entry point for the app. 