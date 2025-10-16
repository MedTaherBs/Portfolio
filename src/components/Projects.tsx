import React, { useState } from 'react';
import { ExternalLink, Github, Cpu, Database, Globe, BarChart3, Brain, Network } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Full-Stack', 'AI/ML', 'Spring Boot', 'Node.js'];

  const projects = [
    {
      id: 1,
      title: "Recommendation System for Task Assignment",
      description: "Developed an NLP-based system to divide projects into tasks automatically with machine learning models to predict complexity.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["NLP", "Machine Learning", "Python", "Project Management"],
      category: "AI/ML",
      icon: Brain,
      color: "from-blue-500 to-cyan-400",
      github: "https://github.com/MedTaherBenSlama/task-recommendation-system",
      demo: "#",
      features: ["Automatic task division", "Complexity prediction", "Difficulty scoring", "Intelligent task distribution"]
    },
    {
      id: 2,
      title: "Foody - Restaurant Management App",
      description: "Full-stack restaurant management application with real-time order tracking, menu management, and customer database.",
      image: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Spring Boot", "Angular", "MVC Architecture", "MySQL"],
      category: "Spring Boot",
      icon: Globe,
      color: "from-green-500 to-emerald-400",
      github: "https://github.com/MedTaherBenSlama/foody-restaurant-app",
      demo: "#",
      features: ["Menu management", "Order tracking", "Customer database", "Payment processing"]
    },
    {
      id: 3,
      title: "Data Traffic Analysis Platform",
      description: "Interactive platform for analyzing network traffic data with dynamic visualization tools and filtering capabilities.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Node.js", "React.js", "Chart.js", "AMCharts"],
      category: "Node.js",
      icon: BarChart3,
      color: "from-purple-500 to-pink-400",
      github: "https://github.com/MedTaherBenSlama/traffic-analysis-platform",
      demo: "#",
      features: ["Data visualization", "Sorting & filtering", "Live updates", "Large dataset handling"]
    },
    {
      id: 4,
      title: "SmartCare - Healthcare Advisory Web App",
      description: "Healthcare platform with appointment scheduling, patient management, and AI-powered health advice system.",
      image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["PHP", "JavaScript", "AI Integration", "MySQL"],
      category: "Full-Stack",
      icon: Database,
      color: "from-orange-500 to-red-400",
      github: "https://github.com/MedTaherBenSlama/smartcare-healthcare",
      demo: "#",
      features: ["Appointment scheduling", "Patient management", "AI health advice", "Medical records"]
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website built with React and Tailwind CSS to showcase projects, skills, and professional experience.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
      category: "Full-Stack",
      icon: Globe,
      color: "from-violet-500 to-purple-400",
      github: "https://github.com/MedTaherBenSlama/portfolio",
      demo: "#",
      features: ["Responsive design", "Project showcase", "Skills visualization", "Contact form"]
    },
    {
      id: 6,
      title: "E-Commerce Dashboard",
      description: "Administrative dashboard for e-commerce platforms with inventory management, sales analytics, and customer insights.",
      image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      category: "Node.js",
      icon: Cpu,
      color: "from-teal-500 to-blue-400",
      github: "https://github.com/MedTaherBenSlama/ecommerce-dashboard",
      demo: "#",
      features: ["Sales analytics", "Inventory tracking", "Customer insights", "Order management"]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A collection of web applications and personal projects I've developed
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'border-purple-500/30 text-gray-300 hover:border-purple-400/50 hover:text-purple-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-4 left-4 p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                  <project.icon className="h-5 w-5 text-white" />
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.github}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-gray-400">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-purple-400 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-purple-600/30 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 border border-purple-500/20">
            <span className="text-gray-300">💡</span>
            <span className="text-gray-300 text-sm">
              More projects available on GitHub - always building something new!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;