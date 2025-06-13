import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient-shift">
              Anushka Umayanga
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Mobile Application Developer specializing in Android & iOS development with Python expertise. 
              Passionate about creating innovative solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up animation-delay-200">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fade-in-up animation-delay-400">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors duration-300">Android App Development</li>
              <li className="hover:text-white transition-colors duration-300">iOS App Development</li>
              <li className="hover:text-white transition-colors duration-300">Cross-Platform Development</li>
              <li className="hover:text-white transition-colors duration-300">Python Development</li>
              <li className="hover:text-white transition-colors duration-300">App Maintenance & Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 animate-fade-in-up animation-delay-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} AppStaticsX - All Rights Reserved.   Made with{' '}
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              and lots of coffee.
            </p>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;