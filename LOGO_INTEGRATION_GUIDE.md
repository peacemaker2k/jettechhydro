# Jetech Hydro Logo Integration Guide

## Overview
This guide shows how to integrate the Jetech Hydro logo into your React components with professional styling using Tailwind CSS.

## File Structure
```
src/
├── assets/
│   └── Jetech Hydro.logo.png    # Your logo file (replace placeholder)
├── components/
│   └── Navbar.jsx               # Updated with logo
└── pages/
    └── About.jsx                # Updated with logo
```

## Logo Import
```javascript
import logo from '../assets/Jetech Hydro.logo.png';
```

## Usage Examples

### 1. Navbar Component (Header)
```jsx
import { NavLink } from 'react-router-dom';
import logo from '../assets/Jetech Hydro.logo.png';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with text */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-3 group">
              <img 
                src={logo} 
                alt="Jetech Hydro Logo" 
                className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                Jetech Hydro
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
```

### 2. Hero Section (Centered)
```jsx
import logo from '../assets/Jetech Hydro.logo.png';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <img 
              src={logo} 
              alt="Jetech Hydro Logo" 
              className="h-16 md:h-20 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">JETECH HYDRO</span>
          </h1>
        </div>
      </div>
    </section>
  );
};
```

### 3. Footer Component
```jsx
import logo from '../assets/Jetech Hydro.logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src={logo} 
              alt="Jetech Hydro Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold">Jetech Hydro</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
```

### 4. Card Component
```jsx
import logo from '../assets/Jetech Hydro.logo.png';

const CompanyCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={logo} 
          alt="Jetech Hydro Logo" 
          className="h-12 w-auto"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Jetech Hydro</h3>
          <p className="text-gray-600">Industrial Hydro Jetting Solutions</p>
        </div>
      </div>
    </div>
  );
};
```

## Tailwind CSS Classes Used

### Responsive Sizing
- `h-10 md:h-12` - 40px on mobile, 48px on desktop
- `h-12` - 48px fixed height
- `h-16 md:h-20` - 64px on mobile, 80px on desktop
- `w-auto` - Maintains aspect ratio

### Hover Effects
- `group-hover:scale-105` - Scales to 105% on hover
- `hover:scale-105` - Direct hover scale effect
- `transition-transform duration-300` - Smooth 300ms transition

### Layout & Spacing
- `flex items-center space-x-3` - Horizontal flex with 12px spacing
- `justify-center` - Centers the logo
- `flex-shrink-0` - Prevents logo from shrinking

### Colors & Styling
- `text-white` - White text color
- `group-hover:text-accent` - Changes to accent color on hover
- `transition-colors` - Smooth color transitions

## Mobile Optimization

### Responsive Breakpoints
- Mobile: `h-10` (40px height)
- Desktop: `md:h-12` (48px height)
- Large screens: `lg:h-16` (64px height)

### Touch-Friendly
- Minimum 44px touch target
- Adequate spacing between elements
- Clear visual hierarchy

## Performance Tips

1. **Image Optimization**: Use WebP format for better compression
2. **Lazy Loading**: Add `loading="lazy"` for below-the-fold images
3. **Alt Text**: Always include descriptive alt text for accessibility
4. **Aspect Ratio**: Use `w-auto` to maintain proper proportions

## Accessibility

- Always include `alt` attribute with descriptive text
- Ensure sufficient color contrast
- Use semantic HTML elements
- Test with screen readers

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on all screen sizes
- Graceful degradation for older browsers

## Next Steps

1. Replace the placeholder file with your actual logo
2. Test the logo display across different screen sizes
3. Verify hover effects work properly
4. Check accessibility with screen readers
5. Optimize the logo file size for web use

## File Naming Convention

- Use kebab-case: `jetech-hydro-logo.png`
- Include size in filename: `jetech-hydro-logo-200x50.png`
- Use descriptive names: `jetech-hydro-logo-white.png`
