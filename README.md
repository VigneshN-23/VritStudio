# Graphic Designer Portfolio Template (Tailwind CSS Version)

A minimalist, modern portfolio website template for graphic designers, built with React, Tailwind CSS, and Framer Motion for smooth animations. This template is designed to be easily customizable by non-technical users.

## Features

- Clean, minimal design with generous whitespace
- Responsive layout for all devices
- Project showcase with grid and carousel
- Contact form with validation
- Smooth animations and micro-interactions with Framer Motion
- Easy to customize content

## How to Customize

### 1. Update Your Information

All the content is stored in a single file: `data.js`. Edit this file to update:

- Your personal information (name, title, location, email)
- Hero section content
- Featured projects
- Regular projects
- About section
- Social media links

### 2. Replace Images

Replace the image URLs in `data.js` with your own images. You can:
- Use direct URLs to images hosted online
- Add your images to the `public` folder and reference them like `/your-image.jpg`

### 3. Customize Colors

The main styling is done through Tailwind CSS. To change the color scheme:

1. Open `tailwind.config.js`
2. Edit the colors in the theme extension:

```js
theme: {
  extend: {
    colors: {
      accent: '#ff5555', // Change this to your accent color
    },
  },
},
```

### 4. Change Fonts

1. Go to Google Fonts (or another font provider)
2. Select your fonts and get the link tag
3. Replace the font link in `index.html`
4. Update the font names in `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
  display: ['Your Heading Font', 'sans-serif']
},
```

### 5. Customize Animations

The animations are created using Framer Motion. To modify them:

1. Look for the animation variants in component files
2. Adjust properties like duration, delay, or easing functions
3. Add new animations using the Framer Motion API

Example:
```jsx
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8, // Change the duration
      ease: [0.25, 0.1, 0.25, 1.0] // Change the easing curve
    }
  }
};
```

## Project Structure

- `data.js` - All content in one place
- `src/components/` - Reusable UI components
- `src/pages/` - Page components
- `public/` - Static assets

## Running the Project

### For Development

```
npm install
npm run dev
```

### For Production

```
npm run build
```

This will create a `dist` folder with your production-ready site.

## Technologies Used

- React
- Tailwind CSS
- Framer Motion (for animations)
- Vite (for fast development)
- Wouter (for routing)

## Need Help?

For any questions or customizations beyond what's covered here, please contact the template provider.