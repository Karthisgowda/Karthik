# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your computer

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click **"New"** or **"+"** → **"New repository"**
3. Repository name: `portfolio` (or any name you prefer)
4. Make it **Public**
5. **Do NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

## Step 2: Upload Your Portfolio Files

### Option A: Using Git (Recommended)

1. Download all project files from Replit
2. Open terminal/command prompt in your portfolio folder
3. Run these commands (replace `YOUR_USERNAME` and `REPO_NAME`):

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

### Option B: Using GitHub Web Interface

1. Download all project files from Replit
2. Go to your GitHub repository
3. Click **"uploading an existing file"**
4. Drag and drop all your portfolio files
5. Commit changes

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"GitHub Actions"**
5. The workflow will automatically deploy your site

## Step 4: Update Repository Name in Workflow (Important!)

1. In your repository, edit `.github/workflows/deploy.yml`
2. If your repo name is NOT `portfolio`, you need to update the base path
3. Or keep the current setup which will work for any repository name

## Step 5: Access Your Portfolio

After the workflow completes (usually 2-3 minutes):
- Your portfolio will be available at: `https://YOUR_USERNAME.github.io/REPO_NAME/`
- Check the **"Actions"** tab to see deployment status

## Future Updates

Whenever you make changes:
1. Update files in your repository
2. Commit and push changes
3. GitHub Actions will automatically redeploy your site

## Custom Domain (Optional)

To use your own domain:
1. In repository **Settings** → **Pages**
2. Add your custom domain
3. Update DNS settings with your domain provider

## Troubleshooting

- If deployment fails, check the **"Actions"** tab for errors
- Make sure your repository is public
- Verify all files are uploaded correctly
- Check that the workflow file is in `.github/workflows/deploy.yml`