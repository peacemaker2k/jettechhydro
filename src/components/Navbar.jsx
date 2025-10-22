import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Use public asset path so the image can be served from /public without bundler resolution.
// Put the file at `public/JetechHydroLogo.svg` (SVG created in workspace).
const publicLogoPath = '/JetechHydroLogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  const handleImgError = (e) => {
    // eslint-disable-next-line no-console
    console.error('Navbar logo failed to load:', e?.target?.src || e);
    setUseFallback(true);
  };

  const getLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-accent bg-white/10' : 'text-white hover:text-accent'
    }`;

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-3 group">
              {!useFallback ? (
                <img
                  src={publicLogoPath}
                  alt="Jetech Hydro Logo"
                  className="site-logo h-10 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                  onError={handleImgError}
                  onLoad={() => console.log('Navbar logo loaded:', publicLogoPath)}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="h-10 md:h-12 w-auto"
                  role="img"
                  aria-label="Jetech Hydro"
                >
                  <rect width="100" height="100" rx="12" fill="#0ea5a0" />
                  <text x="50" y="55" fontSize="26" fill="white" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle">JH</text>
                </svg>
              )}
              <span className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                Jetech Hydro
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={getLinkClass}>Home</NavLink>
            <NavLink to="/about" className={getLinkClass}>About</NavLink>
            <NavLink to="/services" className={getLinkClass}>Services</NavLink>
            <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
          </div>

          {/* Contact - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+919677210456" className="text-sm hover:text-accent transition-colors">
              +91 96772 10456
            </a>

            {/* Contact action icons: WhatsApp, Email, LinkedIn */}
            <div className="flex items-center space-x-2 ml-2">
              <a
                href="https://wa.me/919677210456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-6 h-6 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                aria-label="Chat on WhatsApp +91 96772 10456"
                title="Chat on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.86 11.86 0 0012 .25 11.9 11.9 0 00.75 12c0 2.1.55 4.12 1.6 5.9L.25 23.75l5.17-1.35A11.9 11.9 0 0012 23.75c6.58 0 11.95-5.38 11.95-11.99 0-3.2-1.24-6.2-3.43-8.28zM12 21.5c-1.3 0-2.58-.35-3.69-1.02l-.26-.15-3.07.8.8-3.01-.17-.29A9.44 9.44 0 012.5 12 9.5 9.5 0 1112 21.5z" />
                  <path d="M17.47 14.14c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.28-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.36-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.28.27-.47.09-.18.05-.34-.03-.48-.09-.14-.61-1.48-.84-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.26-.95.92-.95 2.24 0 1.32.98 2.6 1.12 2.78.14.18 1.94 2.96 4.7 4.15 1.32.57 2.35.91 3.15 1.16.83.26 1.58.22 2.17.13.66-.1 1.6-.65 1.82-1.28.22-.63.22-1.17.15-1.28-.07-.11-.25-.18-.52-.31z" fill="#fff" />
                </svg>
              </a>

              <a href="mailto:jetechydro@gmail.com" className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 hover:bg-gray-200 text-primary rounded-full transition-colors" aria-label="Email jetechydro@gmail.com" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                  <path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h15A2.25 2.25 0 0121.75 4.5v15a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.5v-15zm3.06 1.12l6.19 4.4a1.5 1.5 0 001.9 0l6.19-4.4A.75.75 0 0019.5 6h-15a.75.75 0 00-.69-.38z" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/jetech-hydro-24a093146" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-6 h-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors" aria-label="Visit Jetech Hydro on LinkedIn" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.379-.021-3.155-1.922-3.155-1.924 0-2.219 1.503-2.219 3.055v5.6h-3v-10h2.879v1.367h.041c.401-.76 1.379-1.56 2.838-1.56 3.035 0 3.6 1.998 3.6 4.593v5.6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3 px-2">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">Home</NavLink>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">About</NavLink>
              <NavLink to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">Services</NavLink>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">Contact</NavLink>
              <div className="pt-2 mt-2 border-t border-gray-700">
                <a href="tel:9677210456" className="flex items-center text-sm hover:text-accent">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: 96772 10456
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;