# Deployment Guide - Kidu E-commerce Platform

## Overview

This guide provides comprehensive instructions for deploying the Kidu e-commerce platform from development to production environments.

## Prerequisites

### Server Requirements
- **Operating System**: Ubuntu 20.04 LTS or higher
- **Web Server**: Apache 2.4+ or Nginx 1.18+
- **PHP**: 8.0 or higher
- **MySQL**: 8.0 or higher
- **SSL Certificate**: Let's Encrypt or commercial certificate
- **Domain Name**: Configured DNS records

### Server Specifications
- **CPU**: 2+ cores
- **RAM**: 4GB+ (8GB recommended)
- **Storage**: 50GB+ SSD
- **Bandwidth**: 100Mbps+

## Environment Setup

### 1. Server Preparation

#### Update System
```bash
# Update package list
sudo apt update && sudo apt upgrade -y

# Install essential packages
sudo apt install -y curl wget git unzip software-properties-common
```

#### Install PHP
```bash
# Add PHP repository
sudo add-apt-repository ppa:ondrej/php
sudo apt update

# Install PHP and extensions
sudo apt install -y php8.1 php8.1-fpm php8.1-mysql php8.1-curl php8.1-gd php8.1-mbstring php8.1-xml php8.1-zip php8.1-bcmath

# Verify installation
php -v
```

#### Install MySQL
```bash
# Install MySQL
sudo apt install -y mysql-server

# Secure MySQL installation
sudo mysql_secure_installation

# Create database and user
sudo mysql -u root -p
```

```sql
CREATE DATABASE kidu_ecommerce CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'kidu_user'@'localhost' IDENTIFIED BY 'strong_password_here';
GRANT ALL PRIVILEGES ON kidu_ecommerce.* TO 'kidu_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

#### Install Apache
```bash
# Install Apache
sudo apt install -y apache2

# Enable required modules
sudo a2enmod rewrite
sudo a2enmod ssl
sudo a2enmod headers

# Restart Apache
sudo systemctl restart apache2
```

### 2. Application Deployment

#### Clone Repository
```bash
# Navigate to web directory
cd /var/www

# Clone repository
sudo git clone <repository-url> kidu-site
sudo chown -R www-data:www-data kidu-site
sudo chmod -R 755 kidu-site
```

#### Configure Application
```bash
# Create configuration file
sudo cp kidu-site/backend/config/config.example.php kidu-site/backend/config/config.php

# Edit configuration
sudo nano kidu-site/backend/config/config.php
```

Update configuration with production values:
```php
<?php
// Production Configuration
define('DEBUG_MODE', false);
define('DB_HOST', 'localhost');
define('DB_NAME', 'kidu_ecommerce');
define('DB_USER', 'kidu_user');
define('DB_PASS', 'strong_password_here');
define('JWT_SECRET', 'your-production-secret-key-here');
define('SITE_URL', 'https://your-domain.com');
define('UPLOAD_PATH', '/var/www/kidu-site/uploads/');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB

// Email configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'your-email@gmail.com');
define('SMTP_PASS', 'your-app-password');

// Security configuration
define('PASSWORD_MIN_LENGTH', 8);
define('SESSION_TIMEOUT', 1800); // 30 minutes
define('MAX_LOGIN_ATTEMPTS', 5);
define('LOGIN_TIMEOUT', 900); // 15 minutes
?>
```

#### Import Database Schema
```bash
# Import database schema
mysql -u kidu_user -p kidu_ecommerce < kidu-site/autocoding/database/schema.sql
```

### 3. Web Server Configuration

#### Apache Configuration
```bash
# Create virtual host configuration
sudo nano /etc/apache2/sites-available/kidu-site.conf
```

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
    DocumentRoot /var/www/kidu-site/frontend/client
    
    # Redirect to HTTPS
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</VirtualHost>

<VirtualHost *:443>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
    DocumentRoot /var/www/kidu-site/frontend/client
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/your-domain.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/your-domain.com/privkey.pem
    
    # Security Headers
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    
    # API Proxy
    ProxyPreserveHost On
    ProxyPass /api/ http://localhost:8000/api/
    ProxyPassReverse /api/ http://localhost:8000/api/
    
    # File uploads
    <Directory /var/www/kidu-site/uploads/>
        Require all granted
    </Directory>
    
    # Error logs
    ErrorLog ${APACHE_LOG_DIR}/kidu-error.log
    CustomLog ${APACHE_LOG_DIR}/kidu-access.log combined
</VirtualHost>
```

#### Enable Site
```bash
# Enable site
sudo a2ensite kidu-site.conf

# Disable default site
sudo a2dissite 000-default.conf

# Test configuration
sudo apache2ctl configtest

# Restart Apache
sudo systemctl restart apache2
```

### 4. SSL Certificate

#### Let's Encrypt Setup
```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-apache

# Obtain certificate
sudo certbot --apache -d your-domain.com -d www.your-domain.com

# Test auto-renewal
sudo certbot renew --dry-run
```

### 5. PHP Configuration

#### Optimize PHP Settings
```bash
# Edit PHP configuration
sudo nano /etc/php/8.1/apache2/php.ini
```

Update these settings:
```ini
; Memory and execution
memory_limit = 256M
max_execution_time = 300
max_input_time = 300

; File uploads
upload_max_filesize = 10M
post_max_size = 10M
max_file_uploads = 20

; Error reporting (production)
display_errors = Off
log_errors = On
error_log = /var/log/php/error.log

; Session security
session.cookie_httponly = 1
session.cookie_secure = 1
session.use_strict_mode = 1

; OPcache (performance)
opcache.enable = 1
opcache.memory_consumption = 128
opcache.interned_strings_buffer = 8
opcache.max_accelerated_files = 4000
opcache.revalidate_freq = 2
opcache.fast_shutdown = 1
```

#### Create Log Directory
```bash
# Create PHP log directory
sudo mkdir -p /var/log/php
sudo chown www-data:www-data /var/log/php
```

### 6. Backend Server Setup

#### Create Systemd Service
```bash
# Create service file
sudo nano /etc/systemd/system/kidu-backend.service
```

```ini
[Unit]
Description=Kidu Backend API Server
After=network.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/var/www/kidu-site/backend
ExecStart=/usr/bin/php -S localhost:8000
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

#### Start Backend Service
```bash
# Enable and start service
sudo systemctl enable kidu-backend
sudo systemctl start kidu-backend

# Check status
sudo systemctl status kidu-backend
```

### 7. File Permissions

#### Set Proper Permissions
```bash
# Set ownership
sudo chown -R www-data:www-data /var/www/kidu-site

# Set permissions
sudo find /var/www/kidu-site -type d -exec chmod 755 {} \;
sudo find /var/www/kidu-site -type f -exec chmod 644 {} \;

# Make uploads directory writable
sudo chmod -R 775 /var/www/kidu-site/uploads
```

### 8. Security Configuration

#### Firewall Setup
```bash
# Install UFW
sudo apt install -y ufw

# Configure firewall
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

#### Fail2ban Setup
```bash
# Install Fail2ban
sudo apt install -y fail2ban

# Configure Fail2ban
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

Add these configurations:
```ini
[apache]
enabled = true
port = http,https
filter = apache-auth
logpath = /var/log/apache2/error.log
maxretry = 3
bantime = 600

[apache-badbots]
enabled = true
port = http,https
filter = apache-badbots
logpath = /var/log/apache2/access.log
maxretry = 2
bantime = 600
```

```bash
# Restart Fail2ban
sudo systemctl restart fail2ban
```

## Monitoring Setup

### 1. Log Monitoring

#### Configure Log Rotation
```bash
# Create logrotate configuration
sudo nano /etc/logrotate.d/kidu-site
```

```conf
/var/log/apache2/kidu-*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
    postrotate
        /usr/sbin/apache2ctl graceful
    endscript
}
```

### 2. Performance Monitoring

#### Install Monitoring Tools
```bash
# Install monitoring packages
sudo apt install -y htop iotop nethogs

# Install MySQL monitoring
sudo apt install -y mysql-client
```

#### Database Monitoring
```sql
-- Create monitoring user
CREATE USER 'monitor'@'localhost' IDENTIFIED BY 'monitor_password';
GRANT PROCESS, REPLICATION CLIENT ON *.* TO 'monitor'@'localhost';
FLUSH PRIVILEGES;
```

### 3. Backup Configuration

#### Database Backup
```bash
# Create backup script
sudo nano /usr/local/bin/backup-kidu.sh
```

```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/kidu"
DB_NAME="kidu_ecommerce"
DB_USER="kidu_user"
DB_PASS="strong_password_here"

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup database
mysqldump -u $DB_USER -p$DB_PASS $DB_NAME > $BACKUP_DIR/db_backup_$DATE.sql

# Backup uploads
tar -czf $BACKUP_DIR/uploads_backup_$DATE.tar.gz /var/www/kidu-site/uploads/

# Keep only last 7 days of backups
find $BACKUP_DIR -name "*.sql" -mtime +7 -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
```

```bash
# Make script executable
sudo chmod +x /usr/local/bin/backup-kidu.sh

# Add to crontab
sudo crontab -e
```

Add this line:
```
0 2 * * * /usr/local/bin/backup-kidu.sh
```

## Deployment Scripts

### 1. Automated Deployment

#### Create Deployment Script
```bash
# Create deployment script
sudo nano /usr/local/bin/deploy-kidu.sh
```

```bash
#!/bin/bash
set -e

# Configuration
REPO_URL="your-repository-url"
DEPLOY_PATH="/var/www/kidu-site"
BACKUP_PATH="/var/backups/kidu"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting deployment...${NC}"

# Create backup
echo -e "${YELLOW}Creating backup...${NC}"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_PATH
cp -r $DEPLOY_PATH $BACKUP_PATH/backup_$DATE

# Pull latest changes
echo -e "${YELLOW}Pulling latest changes...${NC}"
cd $DEPLOY_PATH
git pull origin main

# Update permissions
echo -e "${YELLOW}Updating permissions...${NC}"
chown -R www-data:www-data $DEPLOY_PATH
find $DEPLOY_PATH -type d -exec chmod 755 {} \;
find $DEPLOY_PATH -type f -exec chmod 644 {} \;
chmod -R 775 $DEPLOY_PATH/uploads

# Restart services
echo -e "${YELLOW}Restarting services...${NC}"
systemctl restart kidu-backend
systemctl reload apache2

# Clear cache
echo -e "${YELLOW}Clearing cache...${NC}"
rm -rf /tmp/opcache/*

echo -e "${GREEN}Deployment completed successfully!${NC}"
```

```bash
# Make script executable
sudo chmod +x /usr/local/bin/deploy-kidu.sh
```

### 2. Health Check Script

#### Create Health Check
```bash
# Create health check script
sudo nano /usr/local/bin/health-check.sh
```

```bash
#!/bin/bash

# Configuration
SITE_URL="https://your-domain.com"
API_URL="https://your-domain.com/api/v1/products"

# Check website
echo "Checking website..."
if curl -f -s $SITE_URL > /dev/null; then
    echo "✓ Website is accessible"
else
    echo "✗ Website is not accessible"
    exit 1
fi

# Check API
echo "Checking API..."
if curl -f -s $API_URL > /dev/null; then
    echo "✓ API is accessible"
else
    echo "✗ API is not accessible"
    exit 1
fi

# Check database
echo "Checking database..."
if mysql -u kidu_user -p'strong_password_here' -e "SELECT 1;" > /dev/null 2>&1; then
    echo "✓ Database is accessible"
else
    echo "✗ Database is not accessible"
    exit 1
fi

echo "All systems are operational!"
```

```bash
# Make script executable
sudo chmod +x /usr/local/bin/health-check.sh

# Add to crontab for regular checks
sudo crontab -e
```

Add this line:
```
*/5 * * * * /usr/local/bin/health-check.sh >> /var/log/health-check.log 2>&1
```

## Troubleshooting

### Common Issues

#### 1. Permission Issues
```bash
# Fix ownership
sudo chown -R www-data:www-data /var/www/kidu-site

# Fix permissions
sudo find /var/www/kidu-site -type d -exec chmod 755 {} \;
sudo find /var/www/kidu-site -type f -exec chmod 644 {} \;
```

#### 2. Database Connection Issues
```bash
# Test database connection
mysql -u kidu_user -p kidu_ecommerce -e "SELECT 1;"

# Check MySQL status
sudo systemctl status mysql
```

#### 3. Apache Issues
```bash
# Check Apache configuration
sudo apache2ctl configtest

# Check Apache status
sudo systemctl status apache2

# Check error logs
sudo tail -f /var/log/apache2/error.log
```

#### 4. PHP Issues
```bash
# Check PHP version
php -v

# Check PHP modules
php -m

# Check PHP error log
sudo tail -f /var/log/php/error.log
```

### Performance Optimization

#### 1. Database Optimization
```sql
-- Analyze tables
ANALYZE TABLE products, orders, users;

-- Optimize tables
OPTIMIZE TABLE products, orders, users;

-- Check slow queries
SHOW VARIABLES LIKE 'slow_query_log';
SHOW VARIABLES LIKE 'long_query_time';
```

#### 2. Apache Optimization
```bash
# Edit Apache configuration
sudo nano /etc/apache2/apache2.conf
```

Add these optimizations:
```apache
# Performance settings
KeepAlive On
KeepAliveTimeout 5
MaxKeepAliveRequests 100

# Enable compression
LoadModule deflate_module modules/mod_deflate.so
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

This deployment guide provides comprehensive instructions for deploying the Kidu e-commerce platform to production, ensuring security, performance, and reliability. 