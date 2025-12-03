# GitHub Setup Instructions for MedExpert

## Prerequisites
1. Install Git from https://git-scm.com/download/win
2. Create a GitHub account (if you don't have one)
3. Repository URL: https://github.com/disha-1605/disha-23bce11104.git

## Step-by-Step Instructions

### Step 1: Install Git (if not installed)
1. Download Git from: https://git-scm.com/download/win
2. Install with default settings
3. Restart your terminal/PowerShell after installation

### Step 2: Configure Git (First time only)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Navigate to Project Folder
```bash
cd "C:\Users\acer\OneDrive\Desktop\web dev\project"
```

### Step 4: Initialize Git Repository
```bash
git init
```

### Step 5: Add Remote Repository
```bash
git remote add origin https://github.com/disha-1605/disha-23bce11104.git
```

### Step 6: Add All Files
```bash
git add .
```

### Step 7: Create Initial Commit
```bash
git commit -m "Initial commit: MedExpert - Expert System for Medicine Prescription"
```

### Step 8: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## Alternative: Using GitHub Desktop

If you prefer a GUI:

1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Navigate to: `C:\Users\acer\OneDrive\Desktop\web dev\project`
5. Click "Publish repository"
6. Select the repository: `disha-23bce11104`
7. Click "Publish Repository"

## Quick Command Reference

```bash
# Check Git version
git --version

# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Pull from GitHub
git pull origin main
```

## Troubleshooting

### If you get "repository not found" error:
- Make sure the repository exists on GitHub
- Check that you have write access to the repository
- Verify the repository URL is correct

### If you get authentication error:
- Use GitHub Personal Access Token instead of password
- Generate token at: https://github.com/settings/tokens
- Use token as password when prompted

### If files are too large:
- Make sure `node_modules` is in `.gitignore`
- Don't commit `dist` folder (already in `.gitignore`)

## Files Included in Repository

✅ Source code (src/)
✅ Configuration files (package.json, vite.config.js)
✅ Documentation (README.md, SYSTEM_ARCHITECTURE_PROMPT.md)
✅ .gitignore file

❌ node_modules/ (excluded)
❌ dist/ (excluded)
❌ Environment files (excluded)

