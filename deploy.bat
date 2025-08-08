@echo off
echo ========================================
echo Portfolio GitHub Deployment Helper
echo ========================================
echo.
echo This script will guide you through deploying your portfolio to GitHub.
echo.
echo Before continuing, make sure you have:
echo 1. Created a GitHub account
echo 2. Installed Git on your computer
echo 3. Created a new repository on GitHub
echo.
echo Press any key to continue...
pause > nul

cls
echo ========================================
echo Step 1: Configure Git
echo ========================================
echo.
set /p name=Enter your name (for Git config): 
set /p email=Enter your email (for Git config): 
set /p username=Enter your GitHub username: 
set /p repo=Enter your GitHub repository name: 

echo.
echo Setting up Git configuration...
echo.
echo git config --global user.name "%name%"
echo git config --global user.email "%email%"
echo.
echo ========================================
echo Step 2: Initialize Git Repository
echo ========================================
echo.
echo Run the following commands in your terminal:
echo.
echo cd c:\Users\E953691\Python\portfolio
echo git init
echo git add .
echo git commit -m "Initial portfolio commit"
echo git branch -M main
echo git remote add origin https://github.com/%username%/%repo%.git
echo git push -u origin main
echo.
echo After pushing to GitHub:
echo 1. Go to https://github.com/%username%/%repo%/settings/pages
echo 2. Set the Source to "main" branch and click Save
echo.
echo Your portfolio will be available at:
echo https://%username%.github.io/%repo%
echo.
echo If you named your repository %username%.github.io, your site will be available at:
echo https://%username%.github.io
echo.
echo Press any key to exit...
pause > nul
