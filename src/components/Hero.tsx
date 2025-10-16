import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import NetworkBackground from './NetworkBackground';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Start letter animation after a short delay
    setTimeout(() => setLettersVisible(true), 500);
  }, []);

  const typewriterText = "Building the future, one line of code at a time";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(typewriterText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, typewriterText]);

  // Split name into individual letters for animation
  const firstName = "Mohamed Taher".split('');
  const lastName = "Ben Slama".split('');
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkBackground />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Profile Picture with Lightning Frame */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              {/* Lightning Frame */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-black"></div>
              </div>
              
              {/* Animated Thunder Effects */}
              <div className="absolute -inset-8 pointer-events-none">
                {/* Thunder Bolt 1 - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="thunder-bolt thunder-bolt-1">
                    <div className="w-1 h-6 bg-gradient-to-b from-purple-400 via-white to-purple-400 transform rotate-12 animate-thunder-1"></div>
                    <div className="w-1 h-4 bg-gradient-to-b from-purple-400 via-white to-transparent transform -rotate-12 -mt-2 ml-1 animate-thunder-1" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-0.5 h-3 bg-gradient-to-b from-white to-purple-400 transform rotate-6 -mt-1 ml-0.5 animate-thunder-1" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>

                {/* Thunder Bolt 2 - Right */}
                <div className="absolute top-1/4 right-0 transform translate-x-4">
                  <div className="thunder-bolt thunder-bolt-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-pink-400 via-white to-pink-400 transform rotate-45 animate-thunder-2"></div>
                    <div className="w-1 h-5 bg-gradient-to-b from-pink-400 via-white to-transparent transform -rotate-45 -mt-3 ml-2 animate-thunder-2" style={{ animationDelay: '0.15s' }}></div>
                    <div className="w-0.5 h-4 bg-gradient-to-b from-white to-pink-400 transform rotate-12 -mt-2 ml-1 animate-thunder-2" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>

                {/* Thunder Bolt 3 - Bottom */}
                <div className="absolute bottom-0 right-1/3 transform translate-y-4">
                  <div className="thunder-bolt thunder-bolt-3">
                    <div className="w-1 h-7 bg-gradient-to-b from-blue-400 via-white to-purple-400 transform -rotate-12 animate-thunder-3"></div>
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-400 via-white to-transparent transform rotate-12 -mt-2 ml-1 animate-thunder-3" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-0.5 h-3 bg-gradient-to-b from-white to-blue-400 transform -rotate-6 -mt-1 ml-0.5 animate-thunder-3" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>

                {/* Thunder Bolt 4 - Left */}
                <div className="absolute top-2/3 left-0 transform -translate-x-4">
                  <div className="thunder-bolt thunder-bolt-4">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 via-white to-purple-400 transform -rotate-45 animate-thunder-4"></div>
                    <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 via-white to-transparent transform rotate-45 -mt-2 ml-1 animate-thunder-4" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-0.5 h-3 bg-gradient-to-b from-white to-cyan-400 transform -rotate-12 -mt-1 ml-0.5 animate-thunder-4" style={{ animationDelay: '0.25s' }}></div>
                  </div>
                </div>

                {/* Thunder Bolt 5 - Top Right */}
                <div className="absolute top-0 right-1/4 transform -translate-y-2 translate-x-2">
                  <div className="thunder-bolt thunder-bolt-5">
                    <div className="w-0.5 h-5 bg-gradient-to-b from-purple-300 via-white to-purple-300 transform rotate-24 animate-thunder-5"></div>
                    <div className="w-0.5 h-3 bg-gradient-to-b from-purple-300 via-white to-transparent transform -rotate-24 -mt-1 ml-1 animate-thunder-5" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>

                {/* Thunder Bolt 6 - Bottom Left */}
                <div className="absolute bottom-0 left-1/4 transform translate-y-2 -translate-x-2">
                  <div className="thunder-bolt thunder-bolt-6">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-pink-300 via-white to-pink-300 transform -rotate-24 animate-thunder-6"></div>
                    <div className="w-0.5 h-2 bg-gradient-to-b from-pink-300 via-white to-transparent transform rotate-24 -mt-1 ml-0.5 animate-thunder-6" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>

                {/* Electric Sparks */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-white rounded-full animate-electric-spark"
                      style={{
                        top: `${15 + Math.random() * 70}%`,
                        left: `${15 + Math.random() * 70}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${1.5 + Math.random()}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Glowing Ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-lg animate-pulse"></div>
              
              {/* Picture Container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500/50 group-hover:border-purple-400 transition-all duration-500">
                {/* Placeholder for your picture */}
                <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <div className="text-4xl md:text-5xl font-bold text-white/80">MT</div>
                </div>
                {/* Replace the div above with your actual image when you have it:
                <img 
                  src="/path-to-your-image.jpg" 
                  alt="Mohamed Taher Ben Slama" 
                  className="w-full h-full object-cover"
                /> */}
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mb-6">
            <span className="inline-block text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 animate-pulse">
              Software Engineer & Full-Stack Developer
            </span>
            
            {/* Animated Name */}
            <div className="mb-6">
              <div className="text-5xl md:text-7xl font-bold leading-tight">
                {/* First Name */}
                <div className="mb-2">
                  {firstName.map((letter, index) => (
                    <span
                      key={`first-${index}`}
                      className={`inline-block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent transition-all duration-700 ease-out ${
                        lettersVisible 
                          ? 'translate-y-0 opacity-100' 
                          : '-translate-y-20 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${index * 0.1}s`
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </div>
                
                {/* Last Name */}
                <div className="text-purple-400">
                  {lastName.map((letter, index) => (
                    <span
                      key={`last-${index}`}
                      className={`inline-block transition-all duration-700 ease-out ${
                        lettersVisible 
                          ? 'translate-y-0 opacity-100' 
                          : '-translate-y-20 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${(firstName.length + index) * 0.1}s`
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="h-12 mb-8">
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "https://github.com/MedTaherBenSlama", label: "GitHub" },
              { icon: Linkedin, href: "https://tn.linkedin.com/in/med-taher-ben-slama-b42b1828b", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <social.icon className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <div className="space-y-2 text-sm text-gray-400 mb-12">
            <p>🚀 Software Engineering Student at Higher Institute of Computer Science</p>
            <p>💡 Specialized in Full-Stack Development & AI Integration</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;