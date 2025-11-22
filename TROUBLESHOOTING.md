# 🔧 GitHub Pages Deployment Troubleshooting

## Your Issue
> MIME type error on vivekvsingh.me: "Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'application/octet-stream'"

This means **GitHub Pages is serving something, but it's the wrong files**.

---

## ✅ Step-by-Step Fix

### Step 1: Check GitHub Pages Settings
1. Go to: https://github.com/vivekvsingh19/portfolio/settings/pages
2. Look at **"Build and deployment"** section
3. Verify:
   - **Source**: Should show `gh-pages` branch (NOT `main`)
   - If it shows `GitHub Actions`, click dropdown and select `Deploy from a branch`
   - **Branch**: Select `gh-pages`
   - **Folder**: `/root`
   - Click **Save**

### Step 2: Check gh-pages Branch Exists
1. Go to: https://github.com/vivekvsingh19/portfolio/branches
2. Look for `gh-pages` branch
3. If it doesn't exist, the workflow hasn't run successfully yet
4. Check **Actions** tab to see if workflow is running

### Step 3: Check Recent Deployment
1. Go to: https://github.com/vivekvsingh19/portfolio/actions
2. Find the most recent "Build and Deploy" workflow
3. It should have a ✅ green checkmark (success)
4. Click on it to see logs
5. If there's a ❌, read the error message

### Step 4: Verify CNAME File
1. Check that `gh-pages` branch has a `CNAME` file
2. Go to: https://github.com/vivekvsingh19/portfolio/blob/gh-pages/CNAME
3. It should contain: `vivekvsingh.me`
4. If it doesn't exist or has wrong domain, that's the problem!

### Step 5: Check DNS Configuration
1. Verify your domain DNS points to GitHub:
   - Use: https://mxtoolbox.com/mxlookup.aspx
   - Search: `vivekvsingh.me`
   - Should show GitHub's IPs

---

## 🚀 If Still Not Working

### Option A: Manual Deploy
```bash
# Build locally
npm run build

# Force push dist folder to gh-pages
git add dist -f
git commit -m "Deploy: Push dist to gh-pages"
git subtree push --prefix dist origin gh-pages
```

### Option B: Re-run Workflow
1. Go to Actions tab
2. Find "Build and Deploy" workflow
3. Click "Run workflow" button
4. Select `main` branch
5. Click green "Run workflow" button
6. Wait 2-3 minutes

### Option C: Check Vite Config
Ensure `vite.config.ts` has:
```typescript
export default defineConfig({
  base: './',  // Important for custom domains!
  build: {
    outDir: 'dist',
  }
});
```

---

## 📊 Current Status

**Your Setup:**
- ✅ Code: Clean and ready
- ✅ Build: Produces correct files locally
- ✅ Workflow: Configured and running
- ⏳ GitHub Pages: Needs to be configured to use `gh-pages` branch

**What Should Happen:**
1. Code pushed → GitHub Actions workflow triggers
2. Workflow builds app → Creates `dist/` folder
3. `peaceiris/actions-gh-pages` pushes to `gh-pages` branch
4. GitHub Pages serves from `gh-pages` branch
5. Your domain shows live portfolio

---

## 🎯 Most Common Issue

**Problem**: GitHub Pages shows "Not Found" or MIME errors

**Cause**: Settings point to `main` branch or wrong source

**Fix**: 
1. Go to Settings → Pages
2. Select `gh-pages` branch as source
3. Wait 1 minute
4. Hard refresh: `Ctrl+Shift+R`

---

## ❓ Questions?

- **Workflow failing?** Check Actions tab for error logs
- **No gh-pages branch?** Workflow hasn't run successfully
- **DNS not working?** Check domain registrar DNS settings
- **Still seeing old site?** Clear browser cache: `Ctrl+Shift+Delete`

---

Good luck! Your portfolio is almost live! 🚀
