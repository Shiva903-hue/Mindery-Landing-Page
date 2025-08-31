
import React from "react";

function Footer() {
  const quickLinks = [
    { name: "About", href: "#" },
    { name: "Programs", href: "#Programs" },
    { name: "Pricing", href: "#Pricing" },
    { name: "Contact", href: "#" }
  ];

  const contactInfo = [
    { icon: "📧", text: "support@mindery.com", type: "email" },
    { icon: "📞", text: "9999999999", type: "phone" },
    { icon: "📍", text: "Bhnadara, Nagpur", type: "address" }
  ];

  const socialLinks = [
    { icon: "📘", name: "Facebook" },
    { icon: "📷", name: "Instagram" },
    { icon: "🐦", name: "Twitter" },
    { icon: "▶️", name: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/5 rounded-full animate-pulse-soft"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-pink-500/5 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-24 h-24 bg-blue-500/5 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-18 h-18 bg-purple-500/5 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="animate-fade-in-up">
            <div className="transform transition-all duration-300 hover:translate-y-1">
              <h2 className="text-3xl font-bold text-white transform transition-all duration-300 hover:text-purple-300">
                Mindery
              </h2>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                Helping kids, parents, and teachers build mindfulness for a
                brighter future.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg group opacity-0 animate-fade-in-up"
                  style={{ 
                    animationDelay: `${800 + index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="group flex items-center text-gray-400 hover:text-purple-300 transition-all duration-300 transform hover:translate-x-2 opacity-0 animate-fade-in-up"
                    style={{ 
                      animationDelay: `${600 + index * 100}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li 
                  key={contact.text}
                  className="group flex items-start text-sm transform transition-all duration-300 hover:translate-x-1 opacity-0 animate-fade-in-up"
                  style={{ 
                    animationDelay: `${800 + index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <span className="mr-3 text-lg transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {contact.icon}
                  </span>
                  <span className="text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700 opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms', animationFillMode: 'both' }}>
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Get mindfulness tips and updates delivered to your inbox</p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1200ms', animationFillMode: 'both' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Mindery. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

     
    </footer>
  );
}

export default Footer;