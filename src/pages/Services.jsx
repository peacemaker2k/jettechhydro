import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  const categories = [
    { id: 'all', label: 'All Services', icon: '🔷' },
    { id: 'cleaning', label: 'Industrial Cleaning', icon: '🧹' },
    { id: 'demolition', label: 'Hydro Demolition', icon: '🏗️' },
    { id: 'marine', label: 'Marine Services', icon: '🚢' },
    { id: 'testing', label: 'Testing & Prep', icon: '🔬' }
  ];

  const coreServices = [
    {
      title: "Boiler External Pressure Parts Cleaning",
      icon: "🔥",
      description: "Thorough cleaning of boiler exteriors and pressure components to ensure optimal performance and safety compliance.",
      category: 'cleaning',
      features: ['Zero downtime', 'Safety certified', 'Eco-friendly'],
      image: "https://4.imimg.com/data4/PE/SA/IMOB-23808220/img-5268-500x500.jpg"
    },
    {
      title: "Hydro Demolition",
      icon: "🏗️",
      description: "Precision concrete removal using ultra-high-pressure water jets with zero structural damage.",
      category: 'demolition',
      features: ['No vibration', 'Dust-free', 'Precise removal'],
      image: "https://image.made-in-china.com/365f3j00UMEinQmRhOrk/40000psi-Super-High-Pressure-Water-Jetting-Machine-for-Hydraulic-Demolition-of-Concrete.webp"
    },
    {
      title: "Ship Hydrojet Cleaning",
      icon: "🚢",
      description: "WJ1 and WJ2 standard cleaning,Comprehensive hull, propeller, rudder, and sea chest cleaning for commercial and industrial vessels.",
      category: 'marine',
      features: ['Underwater cleaning', 'Quick turnaround', 'Port certified'],
      image: "https://watex.org/wp-content/uploads/2025/09/water-blasting-machine-uhp-water-jetting-equipment-hydro-blasting.webp"
    },
    {
      title: "Pipe & Pipeline Cleaning",
      icon: "🔧",
      description: "Clearing blockages and scale from pipelines up to 24 inches in diameter using advanced jetting systems.",
      category: 'cleaning',
      features: ['Up to 24" diameter', '3500 bar pressure', 'Zero damage'],
      image: "https://5.imimg.com/data5/SELLER/Default/2024/12/470728897/SO/ZK/ZY/235073600/hydro-jet-cleaning-service.jpg"
    },
    {
      title: "Heat Exchanger & Evaporator Tube Cleaning",
      icon: "🌡️",
      description: "Specialized cleaning for tubes (10mm–30mm) to restore thermal efficiency and prevent fouling.",
      category: 'cleaning',
      features: ['Tube sizes 10-30mm', 'Efficiency restored', 'Minimal downtime'],
      image:"https://5.imimg.com/data5/SELLER/Default/2023/3/FM/ZW/DL/3908668/industrial-hydro-jetting-cleaning-services.jpg"
    },
    {
      title: "Reactor & Vessel Tank Cleaning",
      icon: "🧪",
      description: "Safe, confined-space cleaning of industrial reactors and storage tanks with minimal downtime.",
      category: 'cleaning',
      features: ['Confined space certified', 'Chemical residue removal', 'Safety protocols'],
      image:"https://www.biocleanjetting.co.uk/wp-content/uploads/2023/03/IMG-20230307-WA0016.webp"
    },
    {
      title: "Hydro Testing",
      icon: "💧",
      description: "Pressure integrity testing of pipelines, vessels, and systems to meet industry safety standards.",
      category: 'testing',
      features: ['ISO certified', 'Detailed reports', 'Compliance assured'],
      image:"https://lh5.googleusercontent.com/proxy/u2YHUQN0JkxNu5P_MMeZmqw3APRl3g91uh3PODuU9VegZKgf8L8sKRUIK_TBKIpuc2zt3LRIzgVJ6voUFyrEnQnekJNt6Y1QdEBd8WnNf125DaFCCrU"
    },
    {
      title: "Surface Preparation & Paint Removal",
      icon: "🎨",
      description: "Eco-friendly, abrasive-free surface prep for coatings, including rubber and GRP lining removal.",
      category: 'testing',
      features: ['Abrasive-free', 'Surface profiling', 'Coating ready'],
      image:"https://www.kamat.de/wp-content/uploads/applications/entlacken-800x534.jpg"
    },
    {
      title: "Specialty Line Cleaning",
      icon: "🏭",
      description: "Cleaning of sugar syrup lines, sulphur lines, and other process-specific industrial piping.",
      category: 'cleaning',
      features: ['Process-specific', 'Food-grade safe', 'Custom solutions'],
      image:"https://watex.com/wp-content/uploads/2024/07/reasons-hydro-jetting-is-ideal-for-pipe-cleaning.webp"
    },
    {
      title: "Evaporator Tube Hydrojet Cleaning",
      icon: "💧",
      description: "High-pressure hydrojet cleaning process for removing scale, rust, and deposits inside evaporator tubes, restoring optimal heat transfer efficiency.",
      category: "cleaning",
      features: [
        'Removes hard scale & corrosion',
        'Restores heat transfer efficiency',
        'Eco-friendly, chemical-free process',
        'Suitable for all industrial evaporators'
      ],
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/432488930/GV/KB/SJ/55787852/evaporator-tube-cleaning-service-500x500.jpg"
    },
    {
      title: "Temple Water Wash Paint Removal",
      icon: "🕌",
      description: "Gentle high-pressure water jet cleaning process designed for removing old paint, dust, and surface impurities from temple walls, domes, and statues without causing damage.",
      category: "cleaning",
      features: [
        "Safe for stone and heritage surfaces",
        "Removes paint, dust, and biological stains",
        "Eco-friendly, chemical-free cleaning",
        "Restores original texture and shine"
      ],
  image: "/temple_wash.jpg"
    }
    
    
  ];

  const equipmentRental = [
    { pressure: "500-1000 bar", type: "Electric Driven", applications: "General industrial cleaning" },
    { pressure: "1400-2000 bar", type: "Electric Driven", applications: "Heavy-duty cleaning" },
    { pressure: "2500-3000 bar", type: "Electric Driven", applications: "Surface preparation" },
    { pressure: "1500-2500 bar", type: "Diesel Driven", applications: "Remote operations" },
    { pressure: "3500 bar", type: "Diesel Driven", applications: "Hydro demolition" }
  ];

  const filteredServices = activeCategory === 'all' 
    ? coreServices 
    : coreServices.filter(service => service.category === activeCategory);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const CategoryIcon = ({ category, className = 'w-6 h-6' }) => {
    // simple inline SVGs for consistent icons
    if (category === 'cleaning') {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.134 6.686 5 9.5 5 12a7 7 0 0014 0c0-2.5-3.134-5.314-7-10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    if (category === 'demolition') {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21l3-3 4 4 11-11-4-4L6 17 3 21z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 7l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    if (category === 'marine') {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12s4-4 9-4 9 4 9 4-4 4-9 4-9-4-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    // testing / default
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Header with Quick Navigation */}
  <section className="relative bg-gradient-to-br from-primary to-blue-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Precision industrial cleaning and hydro jetting solutions with unmatched safety standards
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Serving customers across India with 24/7 Support
            </div>
          </div>

          {/* Quick Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => scrollToSection('services-section')}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full transition-all font-medium"
            >
              Browse Services
            </button>
            <button
              onClick={() => scrollToSection('equipment-section')}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full transition-all font-medium"
            >
              Equipment Rental
            </button>
            <button
              onClick={() => scrollToSection('cta-section')}
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-6 py-3 rounded-full transition-all font-semibold"
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <section id="services-section" className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-3 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-900 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Grid with Animation */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Industrial Hydro Jetting Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showing {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} in {categories.find(c => c.id === activeCategory)?.label}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 overflow-hidden ${
                  hoveredService === index ? 'border-blue-500 scale-105' : 'border-gray-100'
                }`}
              >
                {/* Service Image */}
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    {!service.image && <CategoryIcon category={service.category} className="w-8 h-8 text-blue-600" />}
                    <div className={`transition-all duration-300 ${hoveredService === index ? 'rotate-45 scale-110' : ''}`}>
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 transition-all duration-300 ${
                  hoveredService === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Rental Section with Interactive Cards */}
      <section id="equipment-section" className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              High-Pressure Equipment Rental
            </h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              One of India's most advanced and versatile fleets of hydro jetting pumps for demanding industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {equipmentRental.map((equipment, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-lg mr-4">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-bold text-xl text-yellow-400">{equipment.pressure}</div>
                    <div className="text-sm text-blue-200">{equipment.type}</div>
                  </div>
                </div>
                <p className="text-blue-100 text-sm">{equipment.applications}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-bold text-xl mb-2">On-Site Support</h3>
              <p className="text-blue-100 text-sm">Certified technicians available 24/7 for immediate assistance across India</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-bold text-xl mb-2">Spare Parts</h3>
              <p className="text-blue-100 text-sm">Complete inventory of genuine parts for minimal downtime</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="font-bold text-xl mb-2">Pan-India Coverage</h3>
              <p className="text-blue-100 text-sm">Serving customers across India with local teams and fast response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose Jetech Hydro?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '✓', title: 'Safety First', desc: 'ISO certified processes' },
              { icon: '⚡', title: 'Fast Response', desc: '24/7 emergency service' },
              { icon: '💪', title: 'Expert Team', desc: 'Highly trained technicians' },
              { icon: '🎯', title: 'Precision Work', desc: 'Advanced equipment' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Ready to Tackle Your Most Demanding Cleaning Challenges?
          </h2>
          <p className="text-blue-800 text-lg max-w-2xl mx-auto mb-8">
            From ultra-high-pressure demolition to delicate heat exchanger tube cleaning, our certified team delivers precision, safety, and reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-900 text-white hover:bg-blue-800 font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Request a Service Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <a
              href="tel:+919677210456"
              className="inline-flex items-center bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: 24/7 Support
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-blue-800">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free Consultation
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Custom Solutions
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              ISO Certified
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;