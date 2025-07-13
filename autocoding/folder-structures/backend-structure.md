# Backend Folder Structure (Custom WordPress Plugins & API)

This structure is for the backend powering Kidu, including custom WordPress plugins, REST API, and integrations. Each folder and file is described for clarity and future reference.

```
backend/
├── plugins/                        # Custom WordPress plugins
│   ├── kidu-core/                  # Core plugin (custom post types, taxonomies, etc.)
│   ├── kidu-suppliers/             # Supplier management plugin
│   ├── kidu-quality-control/       # Quality control plugin
│   ├── kidu-logistics/             # Logistics integration plugin
│   ├── kidu-payments/              # Payment gateway integrations
│   ├── kidu-orders/                # Order management plugin
│   ├── kidu-analytics/             # Analytics & reporting plugin
│   └── ...                         # Other custom plugins
├── mu-plugins/                     # Must-use plugins (autoloaded)
├── api/                            # Custom REST API endpoints
│   ├── controllers/                # API controllers (business logic)
│   ├── routes/                     # API route definitions
│   ├── middleware/                 # API middleware (auth, validation)
│   ├── helpers/                    # Helper functions
│   ├── models/                     # Data models (if using custom DB tables)
│   └── index.php                   # API bootstrap
├── config/                         # Backend configuration (env, constants)
├── database/                       # Database migrations, seeds, schema
├── tests/                          # Backend unit/integration tests
├── scripts/                        # CLI scripts for maintenance, import/export
├── logs/                           # Log files
├── README.md                       # Backend documentation
└── ...                             # Other backend files (composer.json, etc.)
```

## Folder Descriptions
- **plugins/**: All custom WordPress plugins for Kidu features.
- **mu-plugins/**: Must-use plugins autoloaded by WordPress.
- **api/**: Custom REST API endpoints, controllers, routes, middleware, and helpers.
- **config/**: Backend configuration files and environment variables.
- **database/**: Migrations, seeds, and schema files for custom tables.
- **tests/**: Unit and integration tests for backend logic.
- **scripts/**: CLI scripts for automation and maintenance.
- **logs/**: Log files for debugging and monitoring.
- **README.md**: Backend documentation and setup instructions. 