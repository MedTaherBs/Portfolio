import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/MedTaherBenSlama", label: "GitHub" },
    { icon: Linkedin, href: "https://tn.linkedin.com/in/med-taher-ben-slama-b42b1828b", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative py-16 border-t border-purple-500/20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Mohamed Taher Ben Slama
                </h3>
                <p className="text-sm text-gray-400">Software Engineer & Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Passionate about creating exceptional digital experiences through innovative technology, 
              elegant code, and meaningful user interactions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-purple-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Tunis, Tunisia</p>
              <p>📧 medtaherbenslama007@gmail.com</p>
              <p>� +216 29 554 089</p>
              <p>💬 Available for internships and projects</p>
            </div>
            
            {/* Status Indicator */}
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-green-400">Currently available</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} Mohamed Taher Ben Slama</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span>and lots of</span>
                <span>☕</span>
              </span>
            </div>

            {/* Fun Stats */}
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <span>🚀 Lines of code: 20K+</span>
              <span>🎯 Projects: 10+</span>
              <span>⚡ Still learning: 100%</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-purple-600/20 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-600/30 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 text-purple-400 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/10">
            <span className="text-xs text-gray-500 font-mono">
              // Built with React, TypeScript, and endless curiosity 🤓
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;