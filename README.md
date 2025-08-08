# Nikhil Abhiram Naidu Maney - Portfolio

A minimalistic and attention-seeking portfolio website showcasing professional experience, skills, and projects.

## Features

- Clean, modern design with responsive layout
- Smooth scrolling and navigation
- Interactive elements that enhance user experience
- Sections for experience, education, skills, projects, and certifications
- Contact form (frontend only - requires backend implementation for actual functionality)

## Structure

- `index.html` - Main HTML document structure
- `styles.css` - All styling for the website
- `script.js` - JavaScript functionality for interactivity

## Usage

1. Open `index.html` in a web browser to view the portfolio
2. Modify content in the HTML file to personalize it with your information
3. Customize colors and styling in the CSS file if desired

## Customization

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

To deploy this portfolio to GitHub Pages:

1. Create a GitHub account if you don't have one
2. Create a new repository on GitHub (you can name it `portfolio` or any name you prefer)
3. Open terminal/command prompt and navigate to your portfolio folder
4. Run the following commands:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
git push -u origin main
```

5. Enable GitHub Pages in the repository settings:
   - Go to your repository on GitHub
   - Click "Settings" > "Pages"
   - In the "Source" section, select "main" branch and click "Save"
   - Your site will be published at `https://YOUR_USERNAME.github.io/REPOSITORY_NAME`

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Created based on LinkedIn profile: linkedin.com/in/abhirammaney
