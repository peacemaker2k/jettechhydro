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
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const handleBack = () => {
    alert('Navigating back to previous page');
  };

  const handleHome = () => {
    alert('Navigating to homepage');
  };

  return (
    <div className="bg-gray-50 relative min-h-screen">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl flex items-center space-x-2 animate-pulse">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Message sent successfully!</span>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
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
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="hover:text-primary cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-primary font-medium">Contact</span>
          </div>
        </div>
      </div>

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
                    <p className="text-gray-700 text-sm leading-relaxed">
                      S. Muthupillappan, Jetech Hydro (Headquarters)<br />
                      516/1 Puthuvalavu, Paganeri,<br />
                      Sivaganga – 630558, Tamil Nadu
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <Phone className="w-5 h-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <p className="text-gray-700 text-sm">+91 96772 10456 / 90807 30058</p>
                  </div>
                </div>
                <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <Mail className="w-5 h-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-gray-700 text-sm">jetechydro@gmail.com</p>
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
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white">
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
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Describe your project, location, timeline, and specific requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Send Message
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