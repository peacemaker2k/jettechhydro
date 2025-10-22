import logo from '../assets/JetechHydroLogo.png';

const LogoTest = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-8">Logo Test Component</h1>
      
      {/* Test 1: Basic Logo Display */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Basic Logo Display</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <img 
            src={logo} 
            alt="Jetech Hydro Logo" 
            className="h-16 w-auto"
            onLoad={() => console.log('Logo loaded successfully!')}
            onError={(e) => console.error('Logo failed to load:', e)}
          />
        </div>
      </div>

      {/* Test 2: Different Sizes */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Different Sizes</h2>
        <div className="bg-white p-4 rounded-lg shadow space-y-4">
          <div className="flex items-center space-x-4">
            <span className="w-20">Small:</span>
            <img src={logo} alt="Small" className="h-8 w-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <span className="w-20">Medium:</span>
            <img src={logo} alt="Medium" className="h-12 w-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <span className="w-20">Large:</span>
            <img src={logo} alt="Large" className="h-16 w-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <span className="w-20">X-Large:</span>
            <img src={logo} alt="X-Large" className="h-20 w-auto" />
          </div>
        </div>
      </div>

      {/* Test 3: Hover Effects */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Hover Effects</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <img 
            src={logo} 
            alt="Jetech Hydro Logo" 
            className="h-16 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <p className="text-sm text-gray-600 mt-2">Hover over the logo to see the scale effect</p>
        </div>
      </div>

      {/* Test 4: With Text */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Logo with Text</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Jetech Hydro Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h3 className="text-xl font-bold text-primary">Jetech Hydro</h3>
              <p className="text-gray-600">Industrial Hydro Jetting Solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Test 5: Responsive Design */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Responsive Design</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <img 
            src={logo} 
            alt="Jetech Hydro Logo" 
            className="h-10 md:h-12 lg:h-16 w-auto"
          />
          <p className="text-sm text-gray-600 mt-2">
            Resize your browser window to see responsive sizing: 40px (mobile) → 48px (tablet) → 64px (desktop)
          </p>
        </div>
      </div>

      {/* Debug Info */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Debug Information:</h3>
        <p className="text-sm text-blue-700">
          Logo path: <code>../assets/Jetech Hydro.logo.png</code>
        </p>
        <p className="text-sm text-blue-700">
          Check browser console for load/error messages
        </p>
      </div>
    </div>
  );
};

export default LogoTest;
