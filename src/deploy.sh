#!/bin/bash

# EarnGrid Deployment Script
echo "🚀 Deploying EarnGrid to earngrid.io..."

# Build the React app
echo "📦 Building React app..."
npm run build

# Create deployment directory if it doesn't exist
sudo mkdir -p /var/www/earngrid

# Copy built files to web server directory
echo "📂 Copying files to server..."
sudo cp -r dist/* /var/www/earngrid/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/earngrid
sudo chmod -R 755 /var/www/earngrid

# Test nginx configuration
echo "🔧 Testing nginx configuration..."
sudo nginx -t

# Reload nginx
echo "🔄 Reloading nginx..."
sudo systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌐 Your site should now be available at https://earngrid.io"

# Check if site is responding
echo "🏥 Health check..."
curl -I https://earngrid.io || echo "⚠️  Site not responding yet - DNS may still be propagating"