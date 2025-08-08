# Deploying Your Portfolio to GitHub Pages

This guide will walk you through deploying your portfolio to GitHub Pages under any GitHub account.

## Prerequisites

1. Create or use an existing GitHub account
2. Install Git on your computer:
   - Download from: https://git-scm.com/downloads
   - During installation, select the option to add Git to your PATH

## Step-by-Step Deployment Instructions

### 1. Create a new GitHub repository

1. Log in to GitHub
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio`)
4. Set the repository to "Public"
5. Leave the "Initialize this repository with a README" option unchecked
6. Click "Create repository"

### 2. Configure Git locally

Open Command Prompt (cmd) and run the following commands:

```
cd c:\Users\E953691\Python\portfolio

git init

git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

git add .

git commit -m "Initial portfolio commit"

git branch -M main
```

### 3. Link your local repository to GitHub

Replace `YOUR_USERNAME` and `REPOSITORY_NAME` with your GitHub username and repository name:

```
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git

git push -u origin main
```

When prompted, enter your GitHub username and password or personal access token.

### 4. Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. In the "Source" dropdown, select "main" branch
5. Click "Save"

### 5. Access your deployed portfolio

After a few minutes, your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/REPOSITORY_NAME
```

If you named your repository `YOUR_USERNAME.github.io` (replacing YOUR_USERNAME with your actual username), then your portfolio will be available at:
```
https://YOUR_USERNAME.github.io
```

## Updating Your Portfolio

After making changes to your portfolio locally, deploy the updates with:

```
git add .
git commit -m "Update portfolio"
git push origin main
```

## Troubleshooting

- **Error: Git not found** - Ensure Git is installed and added to your PATH
- **Error: Permission denied** - Check your GitHub credentials or set up SSH keys
- **Error: Failed to push** - Try `git pull origin main` first, then push again
- **Site not showing up** - Wait a few minutes and check the GitHub Pages settings in your repository
