# 🚀 Quick Guide: Push MedExpert to GitHub

## ⚡ Fastest Method (3 Steps)

### Step 1: Install Git
Download and install from: **https://git-scm.com/download/win**
- Click "Download for Windows"
- Run the installer
- Use default settings
- **Restart your terminal/PowerShell after installation**

### Step 2: Open PowerShell in Project Folder
```powershell
cd "C:\Users\acer\OneDrive\Desktop\web dev\project"
```

### Step 3: Run These Commands
```powershell
# Initialize Git
git init

# Add remote repository
git remote add origin https://github.com/disha-1605/disha-23bce11104.git

# Add all files
git add .

# Commit
git commit -m "Initial commit: MedExpert - Expert System for Medicine Prescription"

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🔐 Authentication

When you run `git push`, you'll be asked for credentials:

**Option 1: Personal Access Token (Recommended)**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "MedExpert Project"
4. Select scopes: ✅ `repo` (full control)
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. When prompted for password, paste the token

**Option 2: GitHub Desktop (Easier)**
1. Download: https://desktop.github.com/
2. Sign in with GitHub
3. File → Add Local Repository
4. Select: `C:\Users\acer\OneDrive\Desktop\web dev\project`
5. Click "Publish repository"

## 📋 Alternative: Use the Script

After installing Git, you can use the provided script:

**PowerShell:**
```powershell
.\push-to-github.ps1
```

**Or Batch File:**
```cmd
push-to-github.bat
```

## ✅ Verify Success

After pushing, visit:
**https://github.com/disha-1605/disha-23bce11104**

You should see all your project files!

## 🆘 Troubleshooting

### "Git is not recognized"
- Git is not installed or not in PATH
- Restart terminal after installing Git
- Or use GitHub Desktop instead

### "Repository not found"
- Make sure repository exists: https://github.com/disha-1605/disha-23bce11104
- Check you're signed in to GitHub
- Verify repository name is correct

### "Authentication failed"
- Use Personal Access Token instead of password
- Generate token at: https://github.com/settings/tokens
- Make sure token has `repo` scope

### "Permission denied"
- You need write access to the repository
- Check repository settings on GitHub
- Make sure you're the owner or have write permissions

## 📁 What Gets Uploaded

✅ **Included:**
- All source code (src/)
- Configuration files
- Documentation (README.md, etc.)
- .gitignore file

❌ **Excluded (by .gitignore):**
- node_modules/ (too large)
- dist/ (build files)
- .env files (secrets)
- Temporary files

## 🎯 Next Steps After Pushing

1. **Add a README badge** (optional)
2. **Set up GitHub Pages** for live demo
3. **Add topics/tags** to repository
4. **Create releases** for versions

---

**Need help?** Check `GITHUB_SETUP.md` for detailed instructions.

