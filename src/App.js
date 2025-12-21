import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export default function DesignOverAtlanta() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message sent successfully! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setFormStatus(''), 5000);
  };

  const projects = [
    { id: 1, title: 'Corporate Rebrand', category: 'Branding', color: 'from-blue-600 to-blue-800' },
    { id: 2, title: 'E-Commerce Platform', category: 'Web Design', color: 'from-blue-500 to-blue-700' },
    { id: 3, title: 'Mobile App Interface', category: 'UI/UX Design', color: 'from-blue-700 to-blue-900' },
    { id: 4, title: 'Marketing Campaign', category: 'Digital Marketing', color: 'from-blue-600 to-indigo-700' },
    { id: 5, title: 'Product Launch', category: 'Brand Strategy', color: 'from-blue-500 to-blue-600' },
    { id: 6, title: 'Dashboard Design', category: 'Interface Design', color: 'from-blue-800 to-indigo-800' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                Design over Atlanta
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all hover:text-blue-600 relative ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } ${
                    activeSection === item.toLowerCase() 
                      ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                      : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded transition-all ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Elevating Brands Through
            <br />
            <span className="text-blue-300">Strategic Design</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Professional digital design solutions that drive business growth and create lasting impact
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Brand Strategy',
                description: 'Develop compelling brand identities that resonate with your target audience and differentiate you in the market.'
              },
              {
                title: 'Digital Design',
                description: 'Create engaging digital experiences across web, mobile, and interactive platforms that convert and delight users.'
              },
              {
                title: 'UI/UX Design',
                description: 'Design intuitive interfaces with exceptional user experiences backed by research and testing methodologies.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mb-6"></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Why Choose Design over Atlanta?</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-white">
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of our recent projects showcasing design excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer bg-white"
              >
                <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="text-center text-white p-6">
                    <div className="text-6xl font-bold opacity-20 mb-4">{project.id}</div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to elevate your brand? Get in touch with our team to discuss your project requirements.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-blue-600 mt-1 mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">hello@designoveratlanta.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-blue-600 mt-1 mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">(404) 555-0123</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mt-1 mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">Atlanta, Georgia</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-6 rounded font-semibold hover:from-blue-700 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
                {formStatus && (
                  <div className="text-center text-green-600 font-medium">{formStatus}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Design over Atlanta</h3>
              <p className="text-gray-400">Elevating brands through strategic design</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Design over Atlanta. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}