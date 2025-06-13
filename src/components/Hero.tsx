import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = 'Anushka Umayanga';
  const typingSpeed = 150; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const handleScroll = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Enhanced animated background elements with glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse shadow-2xl shadow-blue-500/50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/20 dark:bg-teal-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse animation-delay-2000 shadow-2xl shadow-teal-500/50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-pulse animation-delay-4000 shadow-2xl shadow-purple-500/30"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full animate-bounce animation-delay-1000 shadow-lg shadow-blue-500/50"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-teal-400 dark:bg-teal-300 rounded-full animate-bounce animation-delay-2000 shadow-lg shadow-teal-500/50"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-purple-400 dark:bg-purple-300 rounded-full animate-bounce animation-delay-3000 shadow-lg shadow-purple-500/50"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-pink-400 dark:bg-pink-300 rounded-full animate-bounce animation-delay-4000 shadow-lg shadow-pink-500/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Enhanced Profile Image with glow */}
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 dark:shadow-blue-400/50 transform hover:scale-110 transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/70 dark:hover:shadow-blue-400/70 animate-glow">
            <img
              src="https://github.com/AppStaticsX/My-Portfolio/blob/main/src/images/profile.jpg?raw=true"
              alt="Anushka Umayanga"
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Main heading with typing animation */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-slide-in-left">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient-shift relative">
                {displayedName}
                {!isTypingComplete && (
                  <span className="animate-pulse text-blue-600 dark:text-blue-400 ml-1">|</span>
                )}
              </span>
            </h1>
            <h2 className={`text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium transition-all duration-500 ${
              isTypingComplete ? 'animate-slide-in-right opacity-100' : 'opacity-0'
            }`}>
              Mobile Application Developer
            </h2>
          </div>

          {/* Description */}
          <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-500 ${
            isTypingComplete ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}>
            Passionate mobile developer specializing in Android & iOS applications. 
            Expert in Java, Flutter, Kotlin, and Python with a focus on creating beautiful, 
            performant mobile experiences.
          </p>

          {/* Enhanced technology badges with glow */}
          <div className={`flex flex-wrap justify-center gap-3 max-w-md mx-auto transition-all duration-500 ${
            isTypingComplete ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '500ms' }}>
            {['Java', 'Flutter', 'Kotlin', 'Python', 'Android', 'iOS'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-lg shadow-blue-500/20 dark:shadow-blue-400/20 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Enhanced CTA Buttons with glow */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 ${
            isTypingComplete ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '1000ms' }}>
            <button className="group bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-500/30 dark:shadow-blue-400/30 hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-blue-400/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 animate-glow-pulse">
              <Mail size={20} className="group-hover:animate-bounce" />
              Get In Touch
            </button>
            <button className="group bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium shadow-lg shadow-gray-500/20 dark:shadow-gray-700/30 hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-gray-600/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center gap-2 backdrop-blur-sm">
              <Download size={20} className="group-hover:animate-bounce" />
              Download CV
            </button>
          </div>

          {/* Enhanced scroll indicator */}
          <button
            onClick={handleScroll}
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 animate-bounce hover:scale-110 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 backdrop-blur-sm ${
              isTypingComplete ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1500ms' }}
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;