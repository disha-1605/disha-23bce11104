# MedExpert - GitHub Push Script (PowerShell)
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "MedExpert - GitHub Push Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version 2>&1
    Write-Host "Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Then run this script again." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Current directory: $PWD" -ForegroundColor Gray
Write-Host ""

# Initialize git if not already initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host ""
}

# Check if remote exists
$remoteExists = git remote get-url origin 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Adding remote repository..." -ForegroundColor Yellow
    git remote add origin https://github.com/disha-1605/disha-23bce11104.git
    Write-Host ""
} else {
    Write-Host "Remote repository already configured: $remoteExists" -ForegroundColor Green
    Write-Host ""
}

# Add all files
Write-Host "Adding all files..." -ForegroundColor Yellow
git add .
Write-Host ""

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "Creating commit..." -ForegroundColor Yellow
    git commit -m "Initial commit: MedExpert - Expert System for Medicine Prescription"
    Write-Host ""
} else {
    Write-Host "No changes to commit." -ForegroundColor Gray
    Write-Host ""
}

# Set main branch
Write-Host "Setting main branch..." -ForegroundColor Yellow
git branch -M main
Write-Host ""

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "You may be prompted for GitHub credentials." -ForegroundColor Cyan
Write-Host ""
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "SUCCESS! Project pushed to GitHub!" -ForegroundColor Green
    Write-Host "Repository: https://github.com/disha-1605/disha-23bce11104" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "ERROR: Failed to push to GitHub" -ForegroundColor Red
    Write-Host "Please check:" -ForegroundColor Yellow
    Write-Host "1. You have access to the repository" -ForegroundColor Yellow
    Write-Host "2. Your GitHub credentials are correct" -ForegroundColor Yellow
    Write-Host "3. The repository exists on GitHub" -ForegroundColor Yellow
    Write-Host "4. Use Personal Access Token if password doesn't work" -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Red
}

Write-Host ""
Read-Host "Press Enter to exit"

