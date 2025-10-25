import { useState } from 'react';

// Icon components
const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Whatsapp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.52 3.478A11.85 11.85 0 0012 0C5.373 0 .094 4.98.01 11.5a11.78 11.78 0 001.6 5.7L0 24l6.95-1.82A11.84 11.84 0 0012 24c6.627 0 11.906-4.98 11.99-11.5a11.85 11.85 0 00-3.47-8.022zM12 21.5c-1.2 0-2.38-.28-3.44-.82l-.24-.13-4.13 1.09 1.11-3.99-.15-.26A9.25 9.25 0 012.75 11.5C2.75 6.47 6.97 2.5 12 2.5c5.02 0 9.25 3.97 9.25 9 0 5.03-4.23 9-9.25 9z"/>
    <path d="M17.1 14.03c-.26-.13-1.54-.76-1.77-.85-.23-.09-.4-.13-.58.13-.18.26-.71.85-.87 1.02-.16.18-.32.2-.59.07-.26-.13-1.09-.4-2.07-1.28-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.11-.11.26-.29.39-.43.13-.13.17-.22.26-.36.09-.13.04-.25-.02-.38-.06-.13-.58-1.39-.8-1.9-.21-.5-.43-.43-.6-.44-.15-.01-.33-.01-.5-.01s-.38.06-.58.29c-.2.23-.77.75-.77 1.83 0 1.08.79 2.12.9 2.27.11.15 1.55 2.37 3.76 3.32 2.21.95 2.21.63 2.61.59.4-.04 1.29-.53 1.47-1.04.18-.51.18-.94.13-1.03-.05-.09-.18-.13-.44-.26z"/>
  </svg>
);

const ArrowLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const Home = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const Contact = () => {
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: 'success', message: '' }), 5000);
  };

  const validateForm = (data) => {
    const errors = [];
    
    if (!data.name.trim()) {
      errors.push('Name is required');
    }
    
    if (!data.email.trim()) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (!data.phone.trim()) {
      errors.push('Phone number is required');
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(data.phone.replace(/\s/g, ''))) {
      errors.push('Please enter a valid phone number');
    }
    
    if (!data.service) {
      errors.push('Please select a service');
    }
    
    if (!data.message.trim()) {
      errors.push('Message is required');
    } else if (data.message.trim().length < 5) {
      errors.push('Please add your requirement briefly');
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      message: form.message.value,
    };

    // Client-side validation
    const validationErrors = validateForm(data);
    if (validationErrors.length > 0) {
      showToast('error', validationErrors.join('. ') + '.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("https://jetechhydro.up.railway.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      
      if (result.success) {
        showToast('success', result.message || 'Message sent successfully!');
        form.reset();
      } else {
        showToast('error', result.message || result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      showToast('error', 'Network error: Unable to connect to server. Please check your connection and try again.');
      console.error('Network error:', err);
    } finally {
      setIsLoading(false);
    }
  };


  const handleBack = () => {
    alert('Navigating back to previous page');
  };

  const handleHome = () => {
    alert('Navigating to homepage');
  };

  return (
    <div className="bg-gray-50 relative min-h-screen">
      {/* Enhanced Toast Notification */}
      {toast.show && (
        <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 rounded-xl shadow-2xl flex items-center space-x-3 max-w-lg mx-4 backdrop-blur-sm border ${
          toast.type === 'success' 
            ? 'bg-green-600 text-white border-green-500 animate-slide-in animate-gentle-pulse' 
            : 'bg-red-600 text-white border-red-500 animate-slide-in animate-gentle-pulse-red'
        }`}>
          {toast.type === 'success' ? (
            <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
          <div className="flex-1">
            <p className="font-semibold">
              {toast.type === 'success' ? 'Success!' : 'Error!'}
            </p>
            <p className="text-sm opacity-90">{toast.message}</p>
          </div>
          <button 
            onClick={() => setToast({ show: false, type: 'success', message: '' })}
            className="ml-2 text-white hover:text-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      {/* <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </button>
              <button
                onClick={handleHome}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </button>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-primary">Jetech Hydro</span> Contact
            </div>
          </div>
        </div>
      </nav> */}

      {/* Breadcrumb */}
      {/* <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="hover:text-primary cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-primary font-medium">Contact</span>
          </div>
        </div>
      </div> */}

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Ready to discuss your industrial hydro jetting needs? We're here to help with expert solutions.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <MapPin className="w-5 h-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <a
                      href="https://www.google.com/maps/search/516%2F1+Puthuvalavu+Paganeri+Sivaganga+630558"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 text-sm leading-relaxed hover:text-primary"
                    >
                      S. Muthupillappan, Jetech Hydro (Headquarters)<br />
                      516/1 Puthuvalavu, Paganeri,<br />
                      Sivaganga – 630558, Tamil Nadu
                    </a>
                  </div>
                </div>
                <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <Phone className="w-5 h-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <div className="text-gray-700 text-sm flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <a href="tel:+919677210456" className="hover:text-primary whitespace-nowrap inline-flex items-center">+91 96772 10456</a>
                        <a
                          className="text-green-600 hover:text-green-700 ml-1 inline-flex items-center"
                          href="https://wa.me/919677210456"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Chat with +91 96772 10456 on WhatsApp"
                          title="WhatsApp"
                        >
                          <Whatsapp className="w-5 h-5" />
                        </a>
                      </div>
                      <span className="text-gray-400">/</span>
                      <a href="tel:+919080730058" className="hover:text-primary whitespace-nowrap inline-flex items-center">90807 30058</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <Mail className="w-5 h-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:jetechydro@gmail.com" className="text-gray-700 text-sm hover:text-primary">jetechydro@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start">
                <Clock className="w-6 h-6 mt-1 mr-3 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Business Hours</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday – Saturday:</span>
                      <span>9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday & Holidays:</span>
                      <span>Emergency Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-red-900 mb-2 flex items-center">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">!</span>
                Emergency Service Available
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                For urgent hydro jetting needs in refineries, ports, or industrial plants, call us directly for immediate response 24/7.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white" name="service" required>
                  <option value="">Select a service</option>
                  <option value="hydro-demolition">Hydro Demolition</option>
                  <option value="pipe-cleaning">Pipe & Pipeline Cleaning</option>
                  <option value="marine-cleaning">Marine Cleaning (Hull, Propeller)</option>
                  <option value="tank-cleaning">Reactor & Tank Cleaning</option>
                  <option value="equipment-rental">Equipment Rental</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Describe your project, location, timeline, and specific requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                  isLoading 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-primary text-white hover:bg-blue-900'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
              <p className="text-xs text-gray-500 text-center">
                We typically respond within 24 hours on business days
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-12 bg-gradient-to-r from-primary to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
            Partner with Jetech Hydro for Safe, Reliable Solutions
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Serving customers across India with certified technicians and 3000-bar equipment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
