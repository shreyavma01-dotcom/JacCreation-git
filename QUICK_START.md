# JAC CREATION - Quick Start Guide

Get the website running in 5 minutes.

## 📦 Installation

### Step 1: Extract the Project
```bash
tar -xzf jac-creation.tar.gz
cd jac-creation
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

Open your browser to: **http://localhost:5173**

That's it! The website is now running with hot reload enabled.

## ✨ What You'll See

- **Navigation:** Top bar with logo and menu links
- **Hero Section:** Full-screen architectural image with headline
- **Philosophy:** "We Design Experiences" statement with image
- **Framework:** Dark section explaining design methodology
- **Projects:** 6-project portfolio grid
- **Featured:** 2 detailed project showcases
- **Brand Statement:** "Architecture as a Quiet Act"
- **CTA:** Call-to-action for inquiries
- **Footer:** Links and contact information

## 🎯 Try These

### Navigation
- Click navigation links to smooth scroll to sections
- Scroll down to see nav background change
- On mobile: Click hamburger icon to open menu

### Hover Interactions (Desktop)
- Hover over project cards to see text overlay
- Hover over navigation links to see underline animation
- Hover over CTA button to see color invert

### Mobile Testing
- Resize browser to test responsive design
- Use Chrome DevTools: Toggle device toolbar (Ctrl+Shift+M)

## 🎨 Quick Customizations

### Change Brand Color
Edit `src/index.css` (line ~29):
```css
--warm-mustard: #B58A2B;  /* Change this */
```

### Update Navigation Links
Edit `src/App.jsx` (line ~31):
```jsx
const navLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'Your Link', id: 'your-section' },
  // Add more...
];
```

### Update Project Names
Edit `src/App.jsx` (line ~133):
```jsx
{ name: 'Your Project Name', type: 'Project Type' },
```

### Replace Images
Find image URLs in `src/App.jsx` and replace with your own:
```jsx
<img src="YOUR_IMAGE_URL" alt="..." />
```

## 🚀 Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized `dist/` folder containing your website.

### Deploy to Vercel (Easiest)
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
1. Run `npm run build`
2. Go to netlify.com
3. Drag the `dist/` folder
4. Done!

## 📂 File You'll Need to Edit

For most customizations, edit just one file:

**`src/App.jsx`** - Contains all content:
- Headlines and text
- Project information
- Navigation links
- Footer content
- Image URLs

**`src/index.css`** - Contains all styling:
- Colors
- Typography
- Spacing
- Responsive breakpoints
- Animations

That's really it for basic customization!

## ❓ Common Questions

### Q: How do I change the logo?
Replace `/public/logo.jpg` with your logo file. The import path in navigation is `/logo.jpg`.

### Q: How do I add more projects?
Add more items to the projects array in `App.jsx` (around line 133):
```jsx
{ name: 'New Project', type: 'Category' },
```

### Q: Can I use different fonts?
Yes! Edit `index.html` to change Google Fonts import, then update `--font-serif` and `--font-sans` in `src/index.css`.

### Q: How do I add a new section?
1. Add HTML section in `App.jsx`
2. Give it an `id` attribute
3. Add CSS in `src/index.css`
4. Add link to `navLinks` array
5. Test responsive behavior

### Q: How do I deploy?
Run `npm run build`, then upload the `dist/` folder to any web host (Netlify, Vercel, GitHub Pages, etc.).

### Q: Can I modify without the terminal?
Not easily - this requires Node.js and npm. Consider using CodePen or another online editor if you can't install locally.

## 🔧 Troubleshooting

### Port 5173 Already in Use
```bash
npm run dev -- --port 3000
```

### Images Not Loading
- Check image URLs are correct
- Check internet connection
- Images are external - need internet to load

### Fonts Not Loading
- Clear browser cache
- Check internet connection
- Fonts load from Google Fonts CDN

### Styles Not Updating
- Hard refresh browser: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Check no syntax errors in CSS
- Vite auto-refreshes on save

## 📚 Next Steps

1. **Customize Content:** Edit text in `src/App.jsx`
2. **Update Colors:** Change CSS variables in `src/index.css`
3. **Replace Images:** Update image URLs
4. **Add Your Info:** Update footer with real contact info
5. **Deploy:** Run `npm run build` and upload `dist/`

## 📖 Full Documentation

- **README.md** - Complete project overview
- **DESIGN_SYSTEM.md** - Colors, typography, spacing
- **IMPLEMENTATION.md** - Code architecture, best practices

## 💡 Pro Tips

1. **Test on mobile:** Always test responsive behavior
2. **Keep backups:** Before making big changes, save originals
3. **Use browser DevTools:** Inspect elements, test responsive
4. **Lighthouse audit:** Check performance with Chrome Lighthouse
5. **Version control:** Use git to track changes

## 🎓 Learning Resources

- **React Basics:** https://react.dev/learn
- **CSS Fundamentals:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **Responsive Design:** https://web.dev/responsive-web-design-basics/
- **Web Accessibility:** https://www.w3.org/WAI/

---

**Need help?** Check the full README.md and IMPLEMENTATION.md files for detailed information.

Enjoy building! 🚀
