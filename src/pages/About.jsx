import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  // compute years since company start date (2021-02-15)
  const getYearsSince = (start) => {
    const startDate = new Date(start);
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    // adjust if before anniversary this year
    const thisYearAnniv = new Date(now.getFullYear(), startDate.getMonth(), startDate.getDate());
    if (now < thisYearAnniv) years -= 1;
    return years;
  };
  const yearsOfExcellence = getYearsSince('2021-02-15');
  // stats for the "Our Impact" section (use dynamic years)
  const stats = [
    { value: `${yearsOfExcellence}+`, label: 'Years of Excellence', icon: '🏆' },
    { value: '20+', label: 'States Served', icon: '🗺️' },
    { value: '40,000', label: 'PSI Max Pressure', icon: '⚡' },
    { value: '80%', label: 'Repeat Clients', icon: '🤝' }
  ];

  // Icon components
  const Shield = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const Users = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  );

  const Target = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const Zap = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  const Award = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  const Clock = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tabs = [
    { id: 'story', label: 'Our Story', icon: '📖' },
    { id: 'equipment', label: 'Equipment', icon: '⚙️' },
    { id: 'commitment', label: 'Commitment', icon: '🤝' },
    { id: 'impact', label: 'Our Impact', icon: '📊' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">Since 2021</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-yellow-400">JETECH HYDRO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
              Leading provider of high-pressure water jetting equipment rentals and sales across India
            </p>

            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <button
                onClick={() => scrollToSection('story-section')}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm px-6 py-3 rounded-full transition-all font-medium"
              >
                Our Story
              </button>
              <button
                onClick={() => scrollToSection('offerings-section')}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm px-6 py-3 rounded-full transition-all font-medium"
              >
                What We Offer
              </button>
              <button
                onClick={() => scrollToSection('cta-section')}
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-6 py-3 rounded-full transition-all font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Interactive Tab Navigation */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  scrollToSection(`${tab.id}-section`);
                }}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-900 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section id="story-section" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                📖 Our Journey
              </div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Established in <strong className="text-blue-900">2021</strong> and headquartered in Sivaganga, Tamil Nadu, <strong className="text-blue-900">JETECH HYDRO</strong> is a premier provider in the rental and sales of high-pressure water jetting equipment across India. We specialize in supporting the oil & gas industry, ship repair facilities, and civil construction projects.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through our brand <strong className="text-blue-900">Jetech Hydro</strong>, we've built one of India's largest and most diverse rental fleets, delivering top-quality equipment and service nationwide. With over <strong className="text-blue-900">20 years of practical water jetting experience</strong>, our management team ensures expert technical support, reliable machinery, and professional advice for all hydro jetting operations.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  We understand the unique demands of industrial cleaning and surface preparation. By focusing on <strong className="text-blue-900">productivity, safety, and efficiency</strong>, we help clients select the right tools and accessories for each job.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-1">{yearsOfExcellence}+</div>
                  <div className="text-sm text-gray-600">Years Excellence</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-1">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-1">80%</div>
                  <div className="text-sm text-gray-600">Repeat Clients</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-200 rounded-full opacity-50"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about.jpg"
                  alt="Jetech Hydro team and equipment on site — demonstrating our operational capability"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-blue-100">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Safety First</h3>
              <p className="text-gray-600">Safety-first approach in all operations with ISO certified processes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-blue-100">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced management with 20+ years in hydro jetting industry</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-blue-100">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Tailored Solutions</h3>
              <p className="text-gray-600">Customized equipment selection for your industrial requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Commitment Section */}
      <section id="equipment-section" className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⚙️ Premium Fleet
            </div>
            <h2 className="text-4xl font-bold mb-4">Our Equipment & Commitment</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We deliver only premium hydro jetting solutions — empowering industries with reliability, safety, and performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Equipment Selection Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all border border-white border-opacity-20">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Equipment Selection</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-blue-100">
                    Rental fleet includes <strong className="text-white">diesel and electric-driven pumps</strong> ranging from <strong className="text-white">40 HP to 300 HP</strong>
                  </p>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-blue-100">
                    Capable of delivering <strong className="text-white">5,000 PSI to 40,000 PSI</strong> at variable flow rates
                  </p>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-blue-100">
                    Sourced from <strong className="text-white">manufacturers in USA, Germany, and China</strong> from Environment Products Group
                  </p>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-blue-100">
                    Comprehensive range of <strong className="text-white">manual, semi-automatic, and automatic accessories</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Commitment Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all border border-white border-opacity-20">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Our Commitment</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-blue-100">
                    Dedicated solely to delivering <strong className="text-white">premium hydro jetting services</strong>
                  </p>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-blue-100">
                    Ensure <strong className="text-white">consistent, reliable, and cost-effective results</strong> for all clients
                  </p>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-blue-100">
                    Nearly <strong className="text-white">80% of business</strong> comes from repeat clients
                  </p>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-blue-100">
                    Manage <strong className="text-white">specialized hydro jetting projects</strong> under our supervision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="offerings-section" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎯 Comprehensive Solutions
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end hydro jetting solutions designed to support every aspect of your industrial operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all border-2 border-blue-100 hover:border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Equipment Rental & Sales</h3>
              <p className="text-gray-600 leading-relaxed">
                Rental of high and low-pressure water jetting units and accessories for all industrial applications. Complete fleet management and support.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all border-2 border-blue-100 hover:border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">On-site Technical Assistance</h3>
              <p className="text-gray-600 leading-relaxed">
                Support from experienced Jetech Hydro technicians, spare parts, maintenance, and servicing for major pump brands available 24/7.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all border-2 border-blue-100 hover:border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Training & Safety</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive training programs on equipment operation, application techniques, and industry-leading safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="impact-section" className="py-16 md:py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Impact</h2>
            <p className="text-xl text-blue-800">Trusted by industries across India</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
  <section id="cta-section" className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Industrial Cleaning?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Partner with JETECH HYDRO — your trusted expert in high-pressure hydro jetting solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="/contact"
                className="inline-flex items-center bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href="/services"
                className="inline-flex items-center bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm border-2 border-white text-white font-bold px-8 py-4 rounded-full transition-all"
              >
                Explore Our Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-blue-100 flex-wrap">
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
                20+ Years Experience
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;