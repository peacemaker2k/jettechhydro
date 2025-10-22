import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LogoTest from './components/LogoTest';

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Loading Jetech Hydro...</p>
      </div>
    </div>
  );
}

// Simple fade-in wrapper for route transitions
function PageFade({ children }) {
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    setOpacity(0);
    const timer = setTimeout(() => setOpacity(1), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      style={{ 
        opacity, 
        transition: 'opacity 300ms ease-in-out',
        willChange: 'opacity'
      }}
    >
      {children}
    </div>
  );
}

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div 
      className="min-h-screen flex flex-col bg-gray-50" 
      style={{ 
        fontFamily: "'Poppins', 'Open Sans', system-ui, sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      }}
    >
      <Navbar />
      <main className="flex-grow bg-white">
        <PageFade key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logo-test" element={<LogoTest />} />
          </Routes>
        </PageFade>
      </main>
      <Footer />
    </div>
  );
}

export default App;