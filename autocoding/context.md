# Kidu E-commerce Platform - Development Context

## Project Overview
##Kidu is a modern e-commerce platform specializing in electronics, cars, and car spare parts with integrated retail, wholesale, and logistics services. The platform serves as a comprehensive solution for international trade, connecting suppliers from Dubai and China with global customers, providing end-to-end services from sourcing to delivery.

## Business Model
- **Retail**: Direct sales to individual customers
- **Wholesale**: Bulk sales to businesses and resellers
- **Logistics**: International shipping and customs clearance
- **Sourcing**: Direct partnerships with manufacturers in Dubai and China
- **Import Services**: Customs clearance and import documentation

## Technical Architecture
- **Frontend**: HTML5, CSS3, JavaScript (AJAX-based)
- **Backend**: PHP 8.x RESTful APIs
- **Database**: MySQL 8.x
- **Authentication**: JWT tokens
- **Communication**: AJAX → PHP APIs → MySQL

## Development Philosophy
- **Clean Code**: Follow SOLID principles and clean architecture
- **Security First**: Implement proper authentication, authorization, and data validation
- **Performance**: Optimize database queries and frontend loading
- **User Experience**: Responsive design with intuitive navigation
- **Scalability**: Design for future growth and feature expansion

## Key Features
- **Product Categories**: Electronics, Cars, Car Spare Parts
- **Multi-tier Pricing**: Retail and wholesale pricing
- **Inventory Management**: Real-time stock tracking across locations
- **Order Processing**: Retail and wholesale order management
- **Logistics Integration**: Shipping, tracking, and customs clearance
- **Supplier Management**: Dubai and China supplier networks
- **Import Services**: Documentation and customs assistance
- **Multi-currency Support**: USD, AED, CNY, EUR
- **Multi-language Support**: English, Arabic, Chinese
- **Payment Integration**: Multiple international payment gateways
- **Customer Support**: Multi-language customer service

## Development Guidelines
- Use semantic HTML5 elements
- Follow BEM CSS methodology
- Implement proper error handling
- Add loading states for all operations
- Ensure accessibility compliance
- Write comprehensive documentation
- Follow security best practices
- Optimize for mobile devices

## Code Standards
- **PHP**: PSR-12 coding standards
- **JavaScript**: ES6+ with proper error handling
- **CSS**: BEM methodology with responsive design
- **HTML**: Semantic markup with accessibility
- **Database**: Normalized schema with proper indexing

## Security Requirements
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF protection
- JWT authentication
- Rate limiting
- HTTPS enforcement
- Data encryption

## Performance Requirements
- Page load time < 3 seconds
- Database query optimization
- Image optimization and lazy loading
- Caching implementation
- CDN for static assets
- Gzip compression

## Testing Strategy
- Unit testing for backend functions
- Integration testing for API endpoints
- Frontend testing for user interactions
- Database testing for data integrity
- Security testing for vulnerabilities
- Performance testing for load handling 