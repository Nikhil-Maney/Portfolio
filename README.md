# Nikhil Abhiram Naidu Maney - Portfolio

A minimalistic and attention-seeking portfolio website showcasing professional experience, skills, and projects.

## Features

- Clean, modern design with responsive layout
- Smooth scrolling and navigation
- Interactive elements that enhance user experience
- Sections for experience, education, skills, projects, and certifications
- Contact form (frontend only - requires backend implementation for actual functionality)

## Structure

- `index.html` - Cover page (default landing page)
- `portfolio.html` - Detailed portfolio content
- `styles.css` - Styling for the portfolio page
- `cover.css` - Styling for the cover page
- `script.js` - JavaScript functionality for interactivity

## Usage

1. Open `index.html` in a web browser to view the portfolio
2. Modify content in the HTML file to personalize it with your information
3. Customize colors and styling in the CSS file if desired

## Customization

### Profile Image

To replace the placeholder profile image with your actual LinkedIn profile image:

1. Download your profile picture from LinkedIn
2. Save it as "profile-image.jpg" in this folder
3. Open the `portfolio.html` and `index.html` files and find the profile image sections:
   ```html
   <div class="profile-image">
       <!-- Uncomment and update the src when you have your image -->
       <!-- <img src="profile-image.jpg" alt="Nikhil Abhiram Naidu Maney"> -->
       N
   </div>
   ```
4. Uncomment the image tag by removing the <!-- and --> markers
5. If your image has a different filename, update the "src" attribute accordingly

### Changing Colors

The color scheme can be easily modified by editing the CSS variables at the top of the `styles.css` file:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #001f3f;
    --background-color: #ffffff;
    --alt-background-color: #f5f8fa;
    /* other variables... */
}
```

### Adding Profile Image

To replace the placeholder profile image (currently just showing the letter "N"), add your image file to the project directory and update the HTML:

```html
<div class="hero-image">
    <img src="your-image-file.jpg" alt="Nikhil Abhiram Naidu Maney" class="profile-image">
</div>
```

Then update the CSS for `.profile-image` in `styles.css` to style your image appropriately.

## Contact Form

The contact form is currently set up for demonstration purposes only. To make it functional:

1. Create a backend endpoint to handle form submissions
2. Modify the JavaScript in `script.js` to send form data to your endpoint
3. Implement email sending or data storage as required

## Browser Support

This portfolio website works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Deployment to GitHub Pages

### Prerequisites

1. Create or use an existing GitHub account
2. Install Git on your computer:
   - Download from: https://git-scm.com/downloads
   - During installation, select the option to add Git to your PATH

### Step-by-Step Deployment Instructions

#### 1. Create a new GitHub repository

1. Log in to GitHub
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio`)
4. Set the repository to "Public"
5. Leave the "Initialize this repository with a README" option unchecked
6. Click "Create repository"

#### 2. Deploy using Git command line

Open Command Prompt (cmd) and run the following commands:

```
cd path\to\your\portfolio\folder

git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY-NAME` with your actual GitHub username and repository name.

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "main" branch and click "Save"
5. Wait a few minutes for your site to deploy
6. Access your live portfolio at: https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/

#### Alternative: Deploy directly through GitHub's web interface

If you prefer not to use Git commands:

1. Create a new repository on GitHub
2. Click "uploading an existing file" on the repository page
3. Drag and drop all your portfolio files or use the file picker
4. Click "Commit changes"
5. Follow steps 1-6 from the "Enable GitHub Pages" section above

## Local Development Server

You can use the included Python server to test your portfolio locally:

```
python server.py
```

This will start a local server and display the URL where you can view your portfolio.

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Created based on LinkedIn profile: linkedin.com/in/abhirammaney
