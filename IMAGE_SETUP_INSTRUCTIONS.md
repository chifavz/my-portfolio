# Geo-Map Image Setup Instructions

## Overview
A reference to your geo-map prototype image has been added to the portfolio showcase. To complete the setup, you need to replace the placeholder image with your actual image file.

## Steps to Add Your Image

### 1. Locate Your Image
Your image is currently at:
```
C:\Users\chifa\OneDrive\Pictures\map_prototype
```

### 2. Rename and Copy the Image
1. Copy your image file from the above location
2. Rename it to: `map_prototype.png`
3. Place it in the `public` folder of this repository

**Full path where the image should be placed:**
```
/home/runner/work/my-portfolio/my-portfolio/public/map_prototype.png
```

Or on Windows (in your local repository):
```
[your-repo-path]\public\map_prototype.png
```

### 3. Verify the Setup

After placing your image, you should see it displayed in the Geo-map project section of your portfolio showcase, alongside the existing screenshots.

## Current Configuration

The image has been added to the **Geo-map** project in `src/components/Showcase.js`:

```javascript
{
  id: 2,
  title: 'Geo-map',
  description: 'Users grouped by location - Interactive mapping application...',
  images: [
    { src: './Screenshot (17).png', alt: 'Screenshot (17)', link: 'https://spiffy-puffpuff-f1466f.netlify.app/' },
    { src: './Screenshot (18).png', alt: 'Geo-map Screenshot', link: 'https://geo-map-users.netlify.app' },
    { src: './map_prototype.png', alt: 'Geo-map Prototype', link: 'https://geo-map-users.netlify.app' }, // NEW
  ],
  // ...
}
```

## Testing Locally

To test your changes locally:

1. Copy your image to the `public` folder as `map_prototype.png`
2. Run the development server:
   ```bash
   npm start
   ```
3. Open http://localhost:3000 in your browser
4. Navigate to the Showcase section
5. Verify that your geo-map prototype image appears in the Geo-map project card

## Notes

- A minimal placeholder image has been created temporarily to prevent build errors
- Replace this placeholder with your actual image before deploying
- The image will be displayed with the other Geo-map screenshots
- All three images in the Geo-map project link to: https://geo-map-users.netlify.app
