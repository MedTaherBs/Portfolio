import React from 'react';
import { MapPin, Calendar, ExternalLink, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Digixi",
      position: "PFA Internship - ML Engineer",
      duration: "Jul 2025 - Aug 2025",
      location: "Tunisia",
      type: "Internship",
      description: "Developed an NLP-based recommendation system for automating task assignment in project management.",
      achievements: [
        "Developed an NLP-based system to divide projects into tasks automatically",
        "Applied machine learning models to predict task complexity and assign difficulty scores",
        "Enhanced teamwork efficiency by creating intelligent task distribution suggestions",
        "Implemented a user-friendly interface for the recommendation system"
      ],
      technologies: ["Python", "NLP", "Machine Learning", "Project Management", "AI"],
      color: "from-blue-500 to-cyan-400",
      highlight: true
    },
    {
      id: 2,
      company: "Academic Project",
      position: "Full-Stack Developer",
      duration: "Jul 2023 - Aug 2023",
      location: "Tunisia",
      type: "Project",
      description: "Built a full-stack restaurant management application with order tracking and menu management features.",
      achievements: [
        "Developed a full-stack app to manage menu items, orders, and customers",
        "Used Angular for a dynamic front-end with real-time order tracking",
        "Implemented CRUD operations following backend best practices",
        "Applied MVC architecture principles for clean code organization"
      ],
      technologies: ["Spring Boot", "Angular", "MySQL", "MVC Architecture", "REST API"],
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      company: "Tunisie Telecom",
      position: "Network Service Quality Intern",
      duration: "Jul 2024 - Aug 2024",
      location: "Tunisia",
      type: "Internship",
      description: "Created a data visualization platform for network traffic analysis with interactive dashboards and filtering capabilities.",
      achievements: [
        "Developed a Node.js backend to process and visualize network traffic data",
        "Built an interactive React.js front-end with Chart.js and AMCharts for dynamic charts",
        "Implemented sorting, filtering, and live-updating features for large datasets",
        "Designed intuitive user interfaces for complex data visualization"
      ],
      technologies: ["Node.js", "React.js", "Chart.js", "AMCharts", "Data Visualization"],
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 4,
      company: "Academic Project",
      position: "Full-Stack Developer",
      duration: "Jul 2024 - Aug 2024",
      location: "Tunisia",
      type: "Project",
      description: "Designed and implemented a healthcare advisory web application with patient management and AI integration.",
      achievements: [
        "Designed a platform with appointment and patient management",
        "Integrated a basic AI model to provide health advice",
        "Built a responsive, user-friendly interface",
        "Implemented secure authentication and authorization systems"
      ],
      technologies: ["PHP", "JavaScript", "MySQL", "AI Integration", "Bootstrap"],
      color: "from-orange-500 to-red-400"
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My internships and projects in software development and AI integration
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-black z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 group ${
                    exp.highlight ? 'ring-2 ring-purple-400/30' : ''
                  }`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {exp.position}
                          </h3>
                          {exp.highlight && (
                            <Award className="h-5 w-5 text-yellow-400" />
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-purple-400 font-semibold">
                          <span>{exp.company}</span>
                          <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-lg rounded-full px-8 py-4 border border-purple-500/20">
            <span className="text-2xl">🚀</span>
            <div className="text-left">
              <div className="text-white font-semibold">Ready for the next challenge</div>
              <div className="text-sm text-gray-400">Always open to exciting opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;