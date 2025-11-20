import React from 'react';
import { User, Heart, Coffee, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm an adaptable software engineering student with a strong passion for backend development, AI integration, and intelligent
                systems. I specialize in building modern applications with a focus on creating intuitive user experiences and leveraging
                cutting-edge AI technologies like RAG and LangChain.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Quick to learn and analytically minded, I'm eager to apply practical solutions to real-world challenges. I actively
                participate in competitive programming on Codeforces and am currently exploring advanced AI concepts, NLP, and intelligent
                task automation systems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, label: "Lines of Code", value: "25K+", color: "text-blue-400" },
                { icon: Coffee, label: "Coffee Cups", value: "∞", color: "text-orange-400" },
                { icon: User, label: "Projects", value: "12+", color: "text-green-400" },
                { icon: Heart, label: "Collaborations", value: "6+", color: "text-red-400" }
              ].map((stat, idx) => (
                <div key={stat.label + idx} className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 group">
                  <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-mono">Currently Available</span>
                </div>
                
                  <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="text-purple-400">Tunisia 🇹🇳</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Education:</span>
                    <span className="text-purple-400">Software Engineering Student</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Favorite Stack:</span>
                    <span className="text-purple-400">React + Node.js</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Focus:</span>
                    <span className="text-purple-400">RAG, LangChain & AI Integration</span>
                  </div>
                </div>                <div className="pt-6 border-t border-purple-500/20">
                  <p className="text-sm text-gray-400">
                    Passionate about creating practical and innovative software solutions
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-xl"></div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;