import { Link } from 'react-router-dom';
import { useState } from 'react';
// Use public asset path so the image can be served from /public without bundler resolution.
// Put the file at `public/JetechHydroLogo.svg` (SVG created in workspace).
const publicLogoPath = '/JetechHydroLogo.png';

const Footer = () => {
  const [useFallback, setUseFallback] = useState(false);

  const handleImgError = (e) => {
    // eslint-disable-next-line no-console
    console.error('Footer logo failed to load:', e?.target?.src || e);
    setUseFallback(true);
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {!useFallback ? (
                <img
                  src={publicLogoPath}
                  alt="Jetech Hydro Logo"
                  className="site-logo h-10 w-auto"
                  onError={handleImgError}
                  onLoad={() => console.log('Footer logo loaded:', publicLogoPath)}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="h-10 w-auto"
                  role="img"
                  aria-label="Jetech Hydro"
                >
                  <rect width="100" height="100" rx="12" fill="#0ea5a0" />
                  <text x="50" y="55" fontSize="26" fill="white" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle">JH</text>
                </svg>
              )}
              <h3 className="text-lg font-bold">Jetech Hydro</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leaders in high-pressure water jetting services across India. Specializing in hydro demolition, marine cleaning, pipe descaling, and equipment rental with unmatched safety standards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Key Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Hydro Demolition</li>
              <li>Marine Hull & Propeller Cleaning</li>
              <li>Pipeline & Heat Exchanger Cleaning</li>
              <li>Reactor Tank Cleaning</li>
              <li>3000 Bar Equipment Rental</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=516%2F1%20Puthuvalavu%2C%20Paganeri%2C%20Sivaganga%20-%20630558%2C%20Tamil%20Nadu%2C%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Open Jetech Hydro headquarters in Google Maps"
                >
                  516/1 Puthuvalavu, Paganeri,<br />
                  Sivaganga - 630558, Tamil Nadu, India
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm flex items-center">
                  <a href="tel:+919677210456" className="hover:text-accent transition-colors mr-2 flex items-center" aria-label="Call +91 96772 10456">+91 96772 10456</a>
                  {/* WhatsApp quick-link for the first number */}
                  <a
                    href="https://wa.me/919677210456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center justify-center w-6 h-6 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                    aria-label="Chat on WhatsApp +91 96772 10456"
                    title="Chat on WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                      <path d="M20.52 3.48A11.86 11.86 0 0012 .25 11.9 11.9 0 00.75 12c0 2.1.55 4.12 1.6 5.9L.25 23.75l5.17-1.35A11.9 11.9 0 0012 23.75c6.58 0 11.95-5.38 11.95-11.99 0-3.2-1.24-6.2-3.43-8.28zM12 21.5c-1.3 0-2.58-.35-3.69-1.02l-.26-.15-3.07.8.8-3.01-.17-.29A9.44 9.44 0 012.5 12 9.5 9.5 0 1112 21.5z" />
                      <path d="M17.47 14.14c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.28-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.36-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.28.27-.47.09-.18.05-.34-.03-.48-.09-.14-.61-1.48-.84-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.26-.95.92-.95 2.24 0 1.32.98 2.6 1.12 2.78.14.18 1.94 2.96 4.7 4.15 1.32.57 2.35.91 3.15 1.16.83.26 1.58.22 2.17.13.66-.1 1.6-.65 1.82-1.28.22-.63.22-1.17.15-1.28-.07-.11-.25-.18-.52-.31z" fill="#fff" />
                    </svg>
                  </a>
                  <span className="mx-2 text-gray-400">/</span>
                  <a href="tel:+919080730058" className="hover:text-accent transition-colors ml-2 flex items-center" aria-label="Call 90807 30058">90807 30058</a>
                  <a
                    href="https://wa.me/919080730058"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 inline-flex items-center justify-center w-6 h-6 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                    aria-label="Chat on WhatsApp 90807 30058"
                    title="Chat on WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                      <path d="M20.52 3.48A11.86 11.86 0 0012 .25 11.9 11.9 0 00.75 12c0 2.1.55 4.12 1.6 5.9L.25 23.75l5.17-1.35A11.9 11.9 0 0012 23.75c6.58 0 11.95-5.38 11.95-11.99 0-3.2-1.24-6.2-3.43-8.28zM12 21.5c-1.3 0-2.58-.35-3.69-1.02l-.26-.15-3.07.8.8-3.01-.17-.29A9.44 9.44 0 012.5 12 9.5 9.5 0 1112 21.5z" />
                      <path d="M17.47 14.14c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.28-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.36-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.28.27-.47.09-.18.05-.34-.03-.48-.09-.14-.61-1.48-.84-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.26-.95.92-.95 2.24 0 1.32.98 2.6 1.12 2.78.14.18 1.94 2.96 4.7 4.15 1.32.57 2.35.91 3.15 1.16.83.26 1.58.22 2.17.13.66-.1 1.6-.65 1.82-1.28.22-.63.22-1.17.15-1.28-.07-.11-.25-.18-.52-.31z" fill="#fff" />
                    </svg>
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:jetechydro@gmail.com" className="hover:text-accent transition-colors" aria-label="Email jetechydro at jetechydro@gmail.com">jetechydro@gmail.com</a>

                {/* LinkedIn icon/link (replace URL with your company's LinkedIn page) */}
                <a
                  href="https://www.linkedin.com/in/jetech-hydro-24a093146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center justify-center w-6 h-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors"
                  aria-label="Visit Jetech Hydro on LinkedIn"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.379-.021-3.155-1.922-3.155-1.924 0-2.219 1.503-2.219 3.055v5.6h-3v-10h2.879v1.367h.041c.401-.76 1.379-1.56 2.838-1.56 3.035 0 3.6 1.998 3.6 4.593v5.6z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jetech Hydro. All rights reserved. | Serving customers across India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;