# JAC CREATION - Design System Reference

## 🎨 Color System

All colors are derived from the JAC Creation logo, creating a cohesive visual identity.

### Primary Colors
```
Charcoal (Dark Base)
#181817
- Navigation background
- Section backgrounds
- Primary text color

Warm Mustard (Accent)
#B58A2B
- Eyebrow labels
- Links & hover states
- CTA buttons
- Scale indicator
```

### Secondary Colors
```
Burgundy (Logo Red)
#A8354A
- Logo element
- Available for accents

Blue (Logo Blue)
#4A7BA7
- Logo element
- Available for accents
```

### Neutral Palette
```
Cream (Light Text)
#E9E2D5
- Headlines on dark backgrounds
- Premium feel

Stone (Medium Neutral)
#D1C8BA
- Footer text
- Secondary text on dark

Off-White (Light Background)
#F7F4EE
- Default background
- Light section backgrounds

White
#FFFFFF
- Navigation text
- Maximum contrast elements
```

## 🔤 Typography System

### Display Typography
**Font:** Cormorant Garamond (Serif)
- Weight: 300-400 (light to regular)
- Used for: Main headlines, section titles
- Characteristics: Elegant, editorial, refined

```
H1 Size: 4.5rem / 72px
  Line-height: 1.1
  Letter-spacing: -0.01em

H2 Size: 2.5rem / 40px
  Line-height: 1.2
  Letter-spacing: -0.01em

H3 Size: 1.5rem / 24px
```

### Body Typography
**Font:** Inter (Sans-serif)
- Weight: 400-600
- Used for: Body text, labels, navigation
- Characteristics: Clean, modern, highly readable

```
Body Text: 1rem / 16px
  Line-height: 1.8
  Letter-spacing: 0.3px

Navigation: 0.9rem
  Letter-spacing: 0.5px

Eyebrow Label: 0.7rem
  Text-transform: UPPERCASE
  Letter-spacing: 0.15em
  Font-weight: 600
```

## 📏 Spacing Scale

All spacing uses an 8px base unit for consistency:

```
--spacing-xs:   0.5rem (8px)
--spacing-sm:   1rem   (16px)
--spacing-md:   1.5rem (24px)
--spacing-lg:   2rem   (32px)
--spacing-xl:   3rem   (48px)
--spacing-2xl:  4rem   (64px)
--spacing-3xl:  5rem   (80px)
--spacing-4xl:  6rem   (96px)
```

## 🔄 Motion & Transitions

### Timing
```
--transition-smooth: 0.3s ease
--transition-slow:   0.6s ease
```

### Animation Types
- **Fade In:** opacity transitions
- **Slide:** transform: translateY/X
- **Scale:** transform: scale() on hover
- **Scroll Animations:** reveal on scroll

### Usage
- Navigation background fade: 0.3s
- Project image zoom: 0.8s
- Menu animation: 0.3s
- Scroll reveals: 0.6s

## 📐 Layout Breakpoints

### Desktop
- Standard layout, full-width features
- Navigation horizontal menu
- Multi-column grids

### Tablet (≤1024px)
- Adjusted font sizes
- 2-column grids become 2-column
- Reduced spacing

### Mobile (≤768px)
- Single column layouts
- Hamburger menu
- Optimized typography
- Reduced section padding

## 🎯 Visual Hierarchy

### Section Structure
1. **Eyebrow Label** (Small caps, mustard color)
2. **Main Headline** (Large serif, dark)
3. **Supporting Paragraph** (Regular sans-serif)
4. **Content** (Hierarchical typography)
5. **CTA** (Accented button or link)

### Color Hierarchy
1. White text on dark = Primary content
2. Off-white/cream = Secondary on dark
3. Charcoal on light = Primary content
4. Mustard accent = Interactive elements

## 🏗️ Component Specifications

### Navigation
```
Height: Auto (logo 50px)
Padding: var(--spacing-lg) vertical
Background: Transparent (light) / Dark (scrolled)
Text Color: White
Transition: Smooth background change
```

### Hero Section
```
Min-height: 100vh
Image: Full-bleed cover
Overlay: Subtle (20-30% opacity)
Headline: Left-aligned
Scroll indicator: Bottom-left
```

### Section Padding
```
Default: var(--spacing-4xl) = 96px top/bottom
Mobile: var(--spacing-3xl) = 80px top/bottom
```

### Project Cards
```
Grid Desktop: 3 columns
Grid Tablet: 2 columns
Grid Mobile: 1 column
Aspect Ratio: 3/4 (portrait)
Hover: Image scale 1.05, text overlay appears
```

### CTA Buttons
```
Padding: var(--spacing-md) var(--spacing-3xl)
Background: Warm mustard
Text: Charcoal
Hover: Background transparent, text mustard
Border: 2px solid (changes with state)
```

## 💾 CSS Custom Properties

All styling uses CSS variables for easy maintenance:

```css
:root {
  /* Colors */
  --charcoal: #181817;
  --warm-mustard: #B58A2B;
  /* Typography */
  --font-serif: 'Cormorant Garamond', serif;
  --font-sans: 'Inter', sans-serif;
  /* Spacing */
  --spacing-lg: 2rem;
  /* Transitions */
  --transition-smooth: 0.3s ease;
}
```

## 🎭 Design Principles Applied

1. **Quiet Luxury**
   - Understated elegance
   - Negative space emphasis
   - Quality over quantity

2. **Editorial Design**
   - Asymmetrical layouts
   - Strong typography hierarchy
   - Magazine-like composition

3. **Minimalism**
   - Essential elements only
   - Clean whitespace
   - Reduced visual clutter

4. **User-Centered**
   - Readable typography
   - Clear navigation
   - Purposeful interactions

## 📋 Best Practices

### When Customizing

**Colors:**
- Maintain contrast ratios (WCAG AA minimum 4.5:1)
- Test color combinations on all sections
- Keep consistent accent usage

**Typography:**
- Don't exceed 3 font sizes per section
- Maintain line-height 1.4+ for readability
- Use letter-spacing judiciously

**Spacing:**
- Always use spacing scale variables
- Maintain consistency within sections
- Increase spacing on mobile doesn't necessarily mean decrease size

**Components:**
- Keep states (hover, active) consistent
- Use transitions for interactivity
- Ensure mobile-first responsive behavior

## 📱 Responsive Considerations

### Images
- Use srcset or picture element for retina displays
- Maintain consistent aspect ratios
- Alt text for accessibility

### Typography
- Decrease h1 from 4.5rem to 3rem on mobile
- Maintain line-height consistency
- Adjust letter-spacing if needed

### Spacing
- Use CSS variables that adjust by breakpoint
- Reduce section padding on mobile
- Maintain vertical rhythm

---

**Version 1.0** | JAC Creation Premium Architecture Studio
