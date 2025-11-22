# 🚀 GitHub Pages Setup Instructions

## Your Site is 404 Because GitHub Pages Isn't Configured

GitHub Pages deployment requires these steps to be completed:

### ✅ Step 1: Enable GitHub Actions as the Deployment Source

1. Go to your repository: https://github.com/vivekvsingh19/portfolio
2. Click **Settings** (top right)
3. In left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"** from dropdown
   - This allows our workflow to deploy automatically

### ✅ Step 2: Monitor the Workflow

1. Click **Actions** tab in your repository
2. Watch for the workflow to complete (should take ~30 seconds)
3. You should see a green checkmark ✅ when it succeeds

### ✅ Step 3: Verify Deployment

After workflow completes:
1. Visit https://vivekvsingh.me (hard refresh: Ctrl+Shift+R)
2. Your portfolio should now display! 🎉
3. Check console (F12) for any errors

---

## What Our Workflow Does

When you push code to `main`:
1. GitHub Actions automatically runs `npm install`
2. Builds the project: `npm run build`
3. Creates optimized `dist/` folder
4. Deploys to GitHub Pages automatically
5. Makes it live at your custom domain

---

## Custom Domain Configuration

Your custom domain `vivekvsingh.me` should already be:
- Set in **GitHub Pages Settings** → **Custom domain**
- Configured in your DNS provider with A records pointing to GitHub

If you haven't done this yet, add the DNS A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

---

## Troubleshooting

**Still seeing 404?**
1. Go to Settings → Pages
2. Confirm **Source** is set to "GitHub Actions"
3. Check the Actions tab for workflow errors
4. Hard refresh your browser (Ctrl+Shift+R)

**Workflow failing?**
1. Click on the failed workflow in Actions tab
2. Look at the logs for error details
3. Common issues: Missing dependencies, build errors

---

## Summary

✅ Workflow file created: `.github/workflows/deploy.yml`
✅ Code pushed to GitHub
⏳ **NOW: Go to Settings → Pages and set Source to "GitHub Actions"**
⏳ Then: Wait for workflow to complete
⏳ Finally: Visit your domain

That's it! 🚀
