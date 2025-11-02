import { Link } from 'react-router-dom';

const Home = () => {
  const whatWeOffer = [
    "Rental of high and low pressure water jetting units and accessories to suit all applications.",
    "Rental of 45 ton aerial bundle pullers.",
    "On site assistance with experienced Jetech Hydro technicians.",
    "Spare parts, services and advice for most brands of water blast pumps.",
    "Training on applications, equipment and safety."
  ];

  const services = [
    { title: "Low to medium pressure surface preparation", desc: "Jetech Hydro has served the industrial services industry since 2021." },
    { title: "Retro jetting / Pipeline flushing", desc: "Internal cleaning of pipes, process lines, and tubes using high-pressure systems." },
    { title: "Underwater maintenance", desc: "Removal of marine growth from hulls, propellers, and sea chests." },
    { title: "Concrete hydro demolition", desc: "Precise concrete removal with ultra-high-pressure water jets." },
    { title: "Cold cutting of steel pipelines & tanks", desc: "Spark-free cutting for hazardous environments." },
    { title: "Camera survey of pipelines", desc: "Mini-Cam push rod inspections for pipeline integrity." },
    { title: "Pre-commissioning cleaning", desc: "Essential cleaning for oil & gas plants before startup." },
    { title: "GRP / Rubber lining removal", desc: "Specialized systems for coating removal (3–5mm)." },
    { title: "Drain & sewer cleaning", desc: "Municipal and industrial drain cleaning since 2021." },
    { title: "Boiler cleaning", desc: "Automated and manual boiler tube cleaning services." },
    { title: "Industrial cleaning services", desc: "Comprehensive solutions for all industrial sectors." },
    { title: "Heat exchanger tube cleaning", desc: "Customized cleaning based on site history and requirements." },
    { title: "Column and vessels cleaning", desc: "Efficient manual and automated vessel cleaning." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner - Full Width */}
      <section className="relative">
      <div
        className="h-[600px] bg-cover bg-center relative"
        style={{
        backgroundImage: "url('https://hydroflow-me.com/wp-content/themes/hydroflow/assets/img/what-we-offer-bg.jpg')",
        }}
>
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-900 opacity-90"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
              <div>
                <div className="inline-block bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-accent text-sm font-medium mb-6">
                  🏭 Industrial Hydro Jetting Experts
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Precision <span className="text-accent">Hydro Jetting</span><br />
                  Solutions
                </h1>
                <p className="text-lg mb-6 text-gray-200 leading-relaxed">
                  Jetech Hydro delivers professional high-pressure water jetting services across India. 
                  From marine cleaning to industrial maintenance, we provide safe, efficient solutions with 
                  equipment up to 3500 bar pressure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services"
                    className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <img
                    src="https://hydroflow-me.com/wp-content/themes/hydroflow/assets/img/what-we-offer-bg.jpg"
                    alt="Industrial hydro jetting"
                    className="rounded-xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-accent p-4 rounded-lg shadow-lg">
                    <div className="text-primary font-bold text-lg">3500 Bar</div>
                    <div className="text-primary text-sm">Max Pressure</div>
                  </div>
                  </div>
                  {/* Decorative badge: show in-flow on small screens, absolute on large screens */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Jetech Hydro? */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Jetech Hydro?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Leading India's industrial cleaning revolution with unmatched expertise and cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Certified Safety Standards</h3>
                  <p className="text-gray-600">100% compliance with industrial safety protocols and environmental regulations across all operations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Advanced Equipment Fleet</h3>
                  <p className="text-gray-600">State-of-the-art hydro jetting systems from 500 to 3000 bar pressure for every industrial challenge.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Pan India Coverage</h3>
                  <p className="text-gray-600">Serving customers across India, with local teams and expertise in 20+ states.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">24/7 Emergency Support</h3>
                  <p className="text-gray-600">Round-the-clock availability for critical industrial maintenance and emergency cleaning services.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Decorative badge: in-flow on small screens (centered), absolutely positioned on large screens */}
              <div className="relative lg:absolute lg:-bottom-8 lg:-left-8 bg-white p-4 lg:p-6 rounded-xl shadow-lg text-center mx-auto lg:mx-0 w-full max-w-xs lg:w-auto z-10">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary">10+</div>
                  <div className="text-gray-600 text-sm lg:text-base">Years Combined Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Specialized <span className="text-accent">Services</span></h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Cutting-edge hydro jetting solutions for the most demanding industrial applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Tube Bundle Cleaning", 
                img: "https://watex.org/wp-content/uploads/2025/09/high-pressure-water-cleaning-heat-exchanger-uhp-machine-hydro-jetting-machine.webp",
                desc: "Precision cleaning of heat exchanger tubes with automated systems",
                pressure: "500-2000 Bar"
              },
              { 
                title: "Cold Cutting", 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTQ_oRY53PHIuBT0zc1qILLy3ePcuaD82cQ&s",
                desc: "Spark-free cutting for hazardous environments and confined spaces",
                pressure: "2000-3000 Bar"
              },
              { 
                title: "Hydro-demolition", 
                img: "https://image.made-in-china.com/365f3j00UMEinQmRhOrk/40000psi-Super-High-Pressure-Water-Jetting-Machine-for-Hydraulic-Demolition-of-Concrete.webp",
                desc: "Controlled concrete removal with zero structural damage",
                pressure: "2500-3000 Bar"
              }
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="inline-block bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {item.pressure}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
  <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What we <span className="text-accent">Offer</span></h2>
              <p className="text-gray-200 text-lg mb-8">
                Comprehensive hydro jetting solutions backed by industry-leading equipment and expertise
              </p>
              <ul className="space-y-4">
                {whatWeOffer.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-accent/20 p-2 rounded-lg mr-4 mt-0.5">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                <div className="text-accent mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
                <p className="text-gray-200 text-sm mb-6">
                  Contact our experts for a customized quote tailored to your specific requirements
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our <span className="text-accent">Services</span></h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive industrial cleaning solutions tailored to meet your specific requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-primary mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;