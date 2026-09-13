# JAC CREATION - Premium Architecture Studio Website

A production-quality, fully responsive home page for JAC CREATION architecture studio, built with React, Vite, and CSS.

## 🏗️ Project Overview

This is a premium architecture studio website showcasing:
- **Quiet luxury aesthetic** with editorial design language
- **Responsive single-page layout** with smooth scrolling navigation
- **High-quality architectural photography** integrated throughout
- **Refined typography** using Cormorant Garamond (display) and Inter (body)
- **Sophisticated color system** based on the JAC Creation logo
- **Production-ready code** with clean, maintainable components

## 📋 Sections Included

1. **Navigation** - Fixed navigation bar with responsive mobile menu
2. **Hero** - Full-screen hero section with architectural imagery
3. **Philosophy** - "We Design Experiences, Not Just Structures" statement
4. **The Framework** - Design methodology with scale indicator (Neighbourhood → City → Region)
5. **Selected Work** - 6-project portfolio grid with hover effects
6. **Featured Projects** - 2 detailed project showcases with tags
7. **Brand Statement** - "Architecture as a Quiet Act" closing statement
8. **CTA** - Call-to-action section for project inquiries
9. **Footer** - Comprehensive footer with links and social media

## 🎨 Design System

### Color Palette
```css
--charcoal: #181817
--burgundy: #A8354A (from logo)
--blue: #4A7BA7 (from logo)
--warm-mustard: #B58A2B (primary accent)
--cream: #E9E2D5
--stone: #D1C8BA
--off-white: #F7F4EE
```

### Typography
- **Display:** Cormorant Garamond (serif) - large headings, elegant
- **Body:** Inter (sans-serif) - navigation, body text, labels
- Careful letter spacing and hierarchy throughout

### Spacing System
Consistent 8px-based spacing scale:
- `--spacing-xs: 0.5rem`
- `--spacing-sm: 1rem`
- `--spacing-md: 1.5rem`
- `--spacing-lg: 2rem`
- `--spacing-xl: 3rem`
- `--spacing-2xl: 4rem`
- `--spacing-3xl: 5rem`
- `--spacing-4xl: 6rem`

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation & Running

```bash
# Extract the project
tar -xzf jac-creation.tar.gz
cd jac-creation

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173`

## 📁 Project Structure

```
jac-creation/
├── src/
│   ├── App.jsx           # Main component with all sections
│   ├── App.css           # Component-specific styles
│   ├── index.css         # Complete design system & styles
│   ├── main.jsx          # Entry point
├── public/
│   ├── logo.jpg          # JAC Creation logo asset
│   └── favicon.svg       # Favicon
├── index.html            # HTML with Google Fonts
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies & scripts
└── README.md             # This file
```

## ✨ Key Features

### Navigation
- **Fixed sticky navigation** with smooth transition
- **Dynamic background** - becomes dark when scrolling past hero
- **Smooth scroll** to all sections
- **Responsive mobile menu** with hamburger toggle
- **Hover effects** with underline animation on links

### Hero Section
- **Full-screen immersive** design (100vh minimum)
- **Architectural photography** with subtle overlay
- **Elegant typography** with primary and secondary headlines
- **Scroll indicator** with animated arrow
- **Fade-in animations** on load

### Philosophy Section
- **Asymmetrical two-column layout** for desktop
- **Editorial composition** with whitespace emphasis
- **Responsive stacking** on mobile
- **High-quality imagery** on right side

### Framework Section
- **Dark themed** section with warm accents
- **Multi-paragraph content** with hierarchy
- **Scale indicator** showing Neighbourhood → City → Region
- **Subtle scroll reveal** animations

### Projects Section
- **3-column grid** with hover effects
- **Image zoom** on hover
- **Text overlay** with smooth reveal animation
- **Responsive grid** (2 columns tablet, 1 column mobile)

### Featured Projects
- **Alternating layout** (image left/right)
- **Detailed project descriptions**
- **Tag system** for project categories
- **Professional typography** hierarchy

### Responsive Design
- **Desktop:** Full feature set with sophisticated layouts
- **Tablet (1024px):** 2-column grids, adjusted spacing
- **Mobile (768px):** Single column, optimized typography
- **Mobile menu:** Hamburger navigation with slide-out menu

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📸 Image Assets

All images are sourced from high-quality providers:
- Architecture photography from Unsplash
- High-resolution, consistent style throughout
- Lazy loading ready (can be implemented)
- Proper alt text for accessibility

**To customize with your own images:**
1. Replace image URLs in `App.jsx`
2. Maintain consistent aspect ratios:
   - Hero: 16/9 or full-bleed
   - Philosophy: 4/5 (portrait)
   - Projects: 3/4 (portrait)
   - Featured: 4/3 (landscape)

## 🔧 Customization

### Brand Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --warm-mustard: #B58A2B; /* Primary accent */
  --charcoal: #181817;     /* Dark background */
  /* ... other colors ... */
}
```

### Typography
Change fonts in `index.html` and `src/index.css`:
```css
--font-serif: 'Cormorant Garamond', serif;
--font-sans: 'Inter', sans-serif;
```

### Content
All content is in `App.jsx`:
- Update headings, descriptions, and copy
- Modify project names and types
- Update footer links and contact info
- Adjust navigation links

### Spacing & Layout
Adjust spacing variables in `:root`:
```css
--spacing-4xl: 6rem; /* Section padding */
--spacing-lg: 2rem;  /* Container padding */
```

## 🚀 Production Deployment

The built site is in `dist/` after running `npm run build`:

```bash
# Build for production
npm run build

# Contents of dist/ are ready for deployment
```

Deploy to:
- Vercel: `vercel --prod`
- Netlify: Drag `dist/` folder
- Any static host (GitHub Pages, AWS S3, etc.)

## 📱 Performance

- **Optimized CSS:** 12.17 kB (2.86 kB gzipped)
- **Optimized JS:** 229.93 kB (71.34 kB gzipped)
- **Fast load times** with Vite's optimized bundling
- **Smooth animations** using CSS transitions
- **Lazy loading ready** for images

## 🎓 Interview Notes

This project demonstrates:

1. **Design Excellence**
   - Premium aesthetic without clichés
   - Intentional typography hierarchy
   - Sophisticated color usage based on brand identity
   - Editorial/magazine-like composition

2. **Frontend Development**
   - React components with hooks
   - Responsive design best practices
   - Clean, maintainable code structure
   - Proper HTML semantics

3. **User Experience**
   - Smooth scrolling navigation
   - Thoughtful hover interactions
   - Mobile-first responsive approach
   - Clear visual hierarchy

4. **Code Quality**
   - Modular CSS with custom properties
   - Meaningful class names
   - Consistent spacing system
   - No unnecessary dependencies

## 📝 Credits

- **Fonts:** Google Fonts (Cormorant Garamond, Inter)
- **Photography:** Unsplash (high-quality architecture)
- **Framework:** React + Vite
- **Styling:** Pure CSS with design system tokens

## 📄 License

This project is for portfolio/interview purposes.

---

Built as a premium frontend design & development project showcasing architecture studio aesthetic with production-quality code.
