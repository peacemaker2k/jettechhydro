import logo from '../assets/JetechHydroLogo.png';

// Example component showing different logo usage patterns
const LogoExample = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-primary mb-6">Logo Usage Examples</h2>
      
      {/* 1. Header Logo with Text */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Header Style (Navbar)</h3>
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Jetech Hydro Logo" 
            className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
          <span className="text-xl md:text-2xl font-bold text-primary">
            Jetech Hydro
          </span>
        </div>
      </div>

      {/* 2. Centered Logo */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Centered Logo (Hero Section)</h3>
        <div className="flex justify-center">
          <img 
            src={logo} 
            alt="Jetech Hydro Logo" 
            className="h-16 md:h-20 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* 3. Card Logo */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Card Style</h3>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Jetech Hydro Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h4 className="font-semibold text-gray-800">Jetech Hydro</h4>
              <p className="text-sm text-gray-600">Industrial Hydro Jetting Solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Footer Logo */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Footer Style</h3>
        <div className="bg-primary text-white p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Jetech Hydro Logo" 
              className="h-10 w-auto"
            />
            <span className="text-lg font-bold">Jetech Hydro</span>
          </div>
        </div>
      </div>

      {/* 5. Small Logo */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Small Logo (Inline)</h3>
        <p className="text-gray-700">
          Welcome to <img src={logo} alt="Jetech Hydro" className="h-6 w-auto inline mx-1" /> 
          - your trusted partner in industrial cleaning solutions.
        </p>
      </div>

      {/* 6. Logo with Badge */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Logo with Badge</h3>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img 
              src={logo} 
              alt="Jetech Hydro Logo" 
              className="h-12 w-auto"
            />
            <div className="absolute -top-1 -right-1 bg-accent text-primary text-xs font-bold px-1.5 py-0.5 rounded-full">
              NEW
            </div>
          </div>
          <span className="text-lg font-bold text-primary">Jetech Hydro</span>
        </div>
      </div>
    </div>
  );
};

export default LogoExample;
