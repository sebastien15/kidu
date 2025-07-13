# Deployment Guide

## Server Requirements
- PHP 8.0 or higher
- MySQL 8.0 or higher
- Apache or Nginx
- SSL certificate (recommended)

## Local Development Setup
1. **Database Setup**
   ```bash
   mysql -u root -p
   CREATE DATABASE kidu_ecommerce;
   USE kidu_ecommerce;
   SOURCE database/schema.sql;
   SOURCE database/seeds/sample_data.sql;
   ```

2. **Backend Configuration**
   - Copy `backend/config/config.example.php` to `backend/config/config.php`
   - Update database credentials
   - Set JWT secret key
   - Configure CORS settings

3. **Start Development Server**
   ```bash
   cd backend
   php -S localhost:8000
   ```

4. **Frontend Development**
   - Use Live Server extension for VS Code
   - Or serve from local HTTP server
   - Ensure CORS is properly configured

## Production Deployment
1. **Server Setup**
   - Configure Apache/Nginx virtual host
   - Set up SSL certificate
   - Configure PHP settings

2. **Database Migration**
   - Import schema and initial data
   - Set up database user with proper permissions
   - Configure database backups

3. **Security Configuration**
   - Enable HTTPS
   - Configure firewall
   - Set proper file permissions
   - Enable security headers

4. **Performance Optimization**
   - Enable gzip compression
   - Configure caching headers
   - Optimize database queries
   - Use CDN for static assets

## Environment Variables
```php
// config.php
define('DB_HOST', 'localhost');
define('DB_NAME', 'kidu_ecommerce');
define('DB_USER', 'db_user');
define('DB_PASS', 'db_password');
define('JWT_SECRET', 'your-secret-key');
define('SITE_URL', 'https://your-domain.com');
```

## Monitoring and Maintenance
- Set up error logging
- Monitor database performance
- Regular backups
- Security updates
- Performance monitoring 