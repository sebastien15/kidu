# API Documentation - Kidu E-commerce

## Base URL
```
http://localhost:8000/api/v1/
```

## Authentication
All protected endpoints require JWT token in header:
```
Authorization: Bearer {jwt_token}
```

## Endpoints

### Authentication (`/api/v1/auth/`)
- `POST /login` - User login
- `POST /register` - User registration
- `POST /logout` - User logout
- `POST /refresh` - Refresh JWT token

### Products (`/api/v1/products/`)
- `GET /` - List all products
- `GET /{id}` - Get single product
- `POST /` - Create product (admin)
- `PUT /{id}` - Update product (admin)
- `DELETE /{id}` - Delete product (admin)
- `GET /search?q={query}` - Search products
- `GET /category/{id}` - Products by category

### Orders (`/api/v1/orders/`)
- `GET /` - List user orders
- `GET /{id}` - Get order details
- `POST /` - Create new order
- `PUT /{id}/status` - Update order status (admin)

### Users (`/api/v1/users/`)
- `GET /profile` - Get user profile
- `PUT /profile` - Update user profile
- `GET /` - List all users (admin)

### Dashboard (`/api/v1/dashboard/`)
- `GET /stats` - Dashboard statistics
- `GET /recent-orders` - Recent orders
- `GET /top-products` - Top selling products

## Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "errors": []
}
```

## Error Handling
- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error 