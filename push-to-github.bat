@echo off
echo ========================================
echo MedExpert - GitHub Push Script
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    echo Then run this script again.
    pause
    exit /b 1
)

echo Git is installed. Proceeding...
echo.

REM Navigate to project directory
cd /d "%~dp0"

echo Current directory: %CD%
echo.

REM Initialize git if not already initialized
if not exist ".git" (
    echo Initializing Git repository...
    git init
    echo.
)

REM Add remote if not exists
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo Adding remote repository...
    git remote add origin https://github.com/disha-1605/disha-23bce11104.git
    echo.
) else (
    echo Remote repository already configured.
    echo.
)

REM Add all files
echo Adding all files...
git add .
echo.

REM Check if there are changes to commit
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo No changes to commit.
) else (
    echo Creating commit...
    git commit -m "Initial commit: MedExpert - Expert System for Medicine Prescription"
    echo.
)

REM Set main branch
git branch -M main

REM Push to GitHub
echo Pushing to GitHub...
echo.
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS! Project pushed to GitHub!
    echo Repository: https://github.com/disha-1605/disha-23bce11104
    echo ========================================
) else (
    echo.
    echo ========================================
    echo ERROR: Failed to push to GitHub
    echo Please check:
    echo 1. You have access to the repository
    echo 2. Your GitHub credentials are correct
    echo 3. The repository exists on GitHub
    echo ========================================
)

echo.
pause

