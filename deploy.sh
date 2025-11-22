#!/bin/bash
# Deploy portfolio to GitHub Pages

echo "📦 Building portfolio..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
git add dist -f
git commit -m "Deploy: Update production build"
git push origin main

echo "✅ Deployment pushed!"
echo "⏳ Wait 1-2 minutes for GitHub Actions to complete..."
echo "🌐 Then visit: https://vivekvsingh.me"
