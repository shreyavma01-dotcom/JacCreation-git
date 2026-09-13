# JAC CREATION - Implementation Guide

## 🏗️ Architecture Overview

This is a single-page React application built with Vite, using a modular component approach with centralized CSS styling.

### Tech Stack
- **Frontend Framework:** React 18
- **Build Tool:** Vite 4.3
- **Styling:** Pure CSS with custom properties
- **Fonts:** Google Fonts (Cormorant Garamond, Inter)
- **Images:** External sources (Unsplash) - easily replaceable

### Why This Stack?

**React + Vite**
- Fast development experience with HMR
- Optimized production builds
- Small bundle size (229KB JS, 71KB gzipped)
- No unnecessary dependencies

**Pure CSS**
- Full control over styling
- No CSS-in-JS overhead
- Easy to maintain and modify
- CSS custom properties for design system

## 📂 File Structure Explained

```
src/
├── App.jsx
│   ├── Navigation component
│   ├── All section components (Hero, Philosophy, etc.)
│   ├── Footer component
│   └── State management (menu, nav scroll)
│
├── App.css
│   └── Component-specific styles (minimal)
│
└── index.css
    ├── CSS Custom Properties (design system)
    ├── Global styles
    ├── Component styles (.hero, .philosophy, etc.)
    └── Responsive breakpoints
```

## 🧩 Component Architecture

### Single Component Approach
Instead of splitting into multiple components, App.jsx contains all sections inline because:
1. **Simplicity** - All content is in one place
2. **Performance** - No prop drilling or context
3. **Navigation** - Smooth scroll to sections uses IDs
4. **Maintainability** - Easy to find and edit sections

### If You Need to Split Components

Example structure:
```jsx
// src/components/Navigation.jsx
export function Navigation({ navDark, menuOpen, onMenuToggle }) {
  // Navigation JSX
}

// src/components/Hero.jsx
export function Hero() {
  // Hero section JSX
}

// src/App.jsx
import { Navigation, Hero, ... } from './components'
export default function App() {
  return <>
    <Navigation {...props} />
    <Hero />
    ...
  </>
}
```

## 🔄 State Management

### Navigation State
```jsx
const [navDark, setNavDark] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
```

**navDark:**
- Toggles nav background on scroll
- Triggers on `window.scrollY > 100`
- Uses `useEffect` with scroll listener

**menuOpen:**
- Controls mobile menu visibility
- Toggles `.active` class on menu and hamburger
- Closes when link clicked

## 🎯 Key Implementation Details

### Navigation
```jsx
// Smooth scroll to sections
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }
};

// Navigation links array
const navLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'Projects', id: 'projects' },
  // ...
];
```

**Mobile Menu Toggle**
- Hamburger button toggles `menuOpen` state
- `.hamburger.active` triggers CSS animations
- Links close menu when clicked

### Smooth Scroll Background
```jsx
useEffect(() => {
  const handleScroll = () => {
    setNavDark(window.scrollY > 100);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

This creates the smooth transition from transparent to dark background as you scroll.

### Section IDs
Every major section has an ID for navigation:
```jsx
<section id="hero" className="hero">...</section>
<section id="philosophy" className="philosophy">...</section>
<section id="projects" className="projects">...</section>
```

## 🎨 CSS Architecture

### Custom Properties as Design Tokens
```css
:root {
  /* Color tokens */
  --charcoal: #181817;
  --warm-mustard: #B58A2B;
  
  /* Typography tokens */
  --font-serif: 'Cormorant Garamond', serif;
  
  /* Spacing tokens */
  --spacing-lg: 2rem;
  
  /* Motion tokens */
  --transition-smooth: 0.3s ease;
}
```

**Benefits:**
- Change theme by updating variables
- Consistent values across entire codebase
- Easy to maintain
- No repeated values

### Utility Classes
```css
.container { max-width: 1400px; margin: 0 auto; padding: 0 var(--spacing-lg); }
.eyebrow { font-size: 0.7rem; letter-spacing: 0.15em; ... }
.section-padding { padding: var(--spacing-4xl) 0; }
```

### Component Classes
```css
.hero { ... }
.hero-content { ... }
.hero-headline { ... }
.hero-scroll { ... }
```

**BEM-inspired naming:**
- `.hero` = component
- `.hero-content` = component element
- `.hero.active` = component state

## 📸 Image Handling

### Current Implementation
Images use Unsplash URLs directly:
```jsx
<img
  src="https://images.unsplash.com/photo-xxxxx?w=1600&h=900&fit=crop"
  alt="Descriptive alt text"
/>
```

### For Production:
**Option 1: Local Images**
```jsx
import heroImage from './images/hero.jpg'
<img src={heroImage} alt="..." />
```

**Option 2: CDN/Cloud Storage**
```jsx
<img src="https://cdn.example.com/images/hero.jpg" alt="..." />
```

**Option 3: Responsive Images**
```jsx
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="..." />
</picture>
```

### Aspect Ratios
```css
.hero { min-height: 100vh; }
.philosophy-image { aspect-ratio: 4/5; }
.featured-image { aspect-ratio: 4/3; }
.project-card { aspect-ratio: 3/4; }
```

## 🔗 Navigation Flow

### Desktop Flow
1. Click nav link
2. Trigger `scrollToSection(id)`
3. Find element by ID
4. Smooth scroll to element
5. Navigation CSS class updates on scroll position

### Mobile Flow
1. Click hamburger
2. Toggle menu open
3. Click link
4. Scroll to section
5. Close menu automatically
6. Navigation CSS class updates on scroll position

## 🚀 Performance Optimizations

### Already Implemented
- Vite's optimized bundling (229KB JS)
- CSS variables reduce file size
- Minimal dependencies
- No animation libraries (pure CSS)
- Semantic HTML structure

### Possible Improvements
```jsx
// Lazy load images
<img loading="lazy" src="..." />

// Use React.memo for static components
const Navigation = React.memo(({ navDark, ... }) => { ... })

// Debounce scroll events
const debounce = (fn, delay) => { ... }
window.addEventListener('scroll', debounce(handleScroll, 100))

// Image optimization
<img 
  srcSet="image-small.jpg 640w, image-large.jpg 1280w"
  sizes="(max-width: 640px) 100vw, 1280px"
  src="image.jpg"
  alt="..."
/>
```

## 🧪 Testing Approach

### Manual Testing Checklist
- [ ] Navigation links scroll correctly
- [ ] Mobile menu opens/closes
- [ ] Navigation background toggles on scroll
- [ ] All sections render correctly
- [ ] Images load (use browser dev tools)
- [ ] Responsive layout (use dev tools)
- [ ] Hover states work (desktop)
- [ ] Text is readable on all backgrounds

### Browser Testing
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Performance Testing
```bash
# Lighthouse audit
npm run build
npm run preview

# Then run Chrome DevTools Lighthouse
```

## 🔐 Accessibility Features

### Implemented
- Semantic HTML structure
- Proper heading hierarchy
- Alt text on all images
- Color contrast compliance
- Readable font sizes
- Clear navigation

### Could Be Enhanced
```jsx
// ARIA labels
<button aria-label="Open menu" className="hamburger">

// ARIA live regions
<nav aria-label="Main navigation">

// Focus states
.nav-links a:focus { outline: 2px solid var(--warm-mustard); }

// Skip link
<a href="#main" className="skip-link">Skip to main content</a>
```

## 🔄 Development Workflow

### Local Development
```bash
npm run dev      # Start dev server with HMR
```

### Building for Production
```bash
npm run build    # Creates optimized dist/ folder
npm run preview  # Preview production build locally
```

### Code Organization Tips
1. Keep sections in order in App.jsx
2. Update navigation links when adding sections
3. Use CSS variables for consistency
4. Test responsiveness frequently
5. Update README when changing structure

## 📝 Common Modifications

### Changing Colors
1. Update CSS variables in `index.css`:
```css
:root {
  --warm-mustard: #NEW_COLOR;
}
```
2. All references update automatically

### Updating Typography
1. Change Google Fonts link in `index.html`
2. Update font-family in `index.css`:
```css
--font-serif: 'New Font', serif;
```

### Adding New Sections
1. Create new section JSX in App.jsx
2. Add section ID for navigation
3. Add CSS class for styling
4. Add to navLinks array
5. Add styles to index.css
6. Test responsive behavior

### Replacing Images
1. Find all `<img>` tags in App.jsx
2. Replace `src` URL
3. Update `alt` text
4. Test display on all screen sizes

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ contents to gh-pages branch
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ folder via FTP/SFTP
```

## 📚 Resources & References

- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev
- **CSS Custom Properties:** https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **Google Fonts:** https://fonts.google.com
- **Web Accessibility:** https://www.w3.org/WAI/

---

**This implementation prioritizes:**
- Clean, readable code
- Easy maintenance
- Fast performance
- Responsive design
- Professional aesthetics
