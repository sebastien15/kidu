#!/bin/bash

# Kidu E-commerce Platform Setup Script
# This script helps you set up the Laravel + React application quickly

echo "🚀 Kidu E-commerce Platform Setup"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -d "kidu-ecommerce" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    echo "   Make sure you're in the kidu-site directory"
    exit 1
fi

# Navigate to Laravel directory
cd kidu-ecommerce

echo "📦 Installing PHP dependencies..."
if ! composer install; then
    echo "❌ Failed to install PHP dependencies"
    exit 1
fi

echo "📦 Installing JavaScript dependencies..."
if ! npm install; then
    echo "❌ Failed to install JavaScript dependencies"
    exit 1
fi

echo "⚙️  Setting up environment..."
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "✅ Created .env file"
else
    echo "ℹ️  .env file already exists"
fi

echo "🔑 Generating application key..."
php artisan key:generate

echo "🗄️  Setting up database..."
echo "Please make sure you have:"
echo "1. Created a MySQL database named 'kidu_ecommerce'"
echo "2. Updated the database credentials in .env file"
echo ""
read -p "Press Enter to continue after setting up your database..."

echo "📊 Running database migrations..."
if ! php artisan migrate; then
    echo "❌ Failed to run migrations. Please check your database configuration."
    exit 1
fi

echo "🌱 Seeding database with sample data..."
php artisan db:seed

echo "🏗️  Building frontend assets..."
npm run build

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "To start the development server:"
echo "  cd kidu-ecommerce"
echo "  php artisan serve"
echo ""
echo "For hot reloading during development:"
echo "  cd kidu-ecommerce"
echo "  npm run dev"
echo ""
echo "🌐 Application will be available at: http://localhost:8000"
echo "📚 API Documentation: http://localhost:8000/test-api"
echo "🧪 API Tester: http://localhost:8000/api-test"
echo ""
echo "Happy coding! 🚀" 