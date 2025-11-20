import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Brain, Server, Globe } from 'lucide-react';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "Java", level: 88, description: "Object-oriented programming" },
        { name: "JavaScript", level: 85, description: "Web & application development" },
        { name: "TypeScript", level: 82, description: "Type-safe JavaScript" },
        { name: "Python", level: 82, description: "General programming & AI" },
        { name: "PHP", level: 80, description: "Web development" }
      ]
    },
    {
      icon: Server,
      title: "Frameworks",
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "Spring Boot", level: 85, description: "Java-based backend framework" },
        { name: "Angular", level: 80, description: "TypeScript-based frontend framework" },
        { name: "Node.js", level: 85, description: "JavaScript runtime environment" },
        { name: "React.js", level: 85, description: "Frontend UI library" }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-purple-500 to-pink-400",
      skills: [
        { name: "MySQL", level: 85, description: "Relational database" },
        { name: "PostgreSQL", level: 80, description: "Advanced relational database" },
        { name: "NoSQL", level: 75, description: "Non-relational databases" },
        { name: "SQL", level: 88, description: "Database query language" }
      ]
    },
    {
      icon: Brain,
      title: "Concepts & Methodologies",
      color: "from-orange-500 to-red-400",
      skills: [
        { name: "Agile", level: 80, description: "Iterative development approach" },
        { name: "Scrum", level: 80, description: "Project management framework" },
        { name: "CI/CD", level: 75, description: "GitLab CI/CD pipelines" },
        { name: "Blockchain", level: 65, description: "Distributed ledger technology" }
      ]
    },
    {
      icon: Brain,
      title: "AI & ML",
      color: "from-violet-500 to-purple-400",
      skills: [
        { name: "RAG", level: 80, description: "Retrieval-Augmented Generation" },
        { name: "LangChain", level: 78, description: "AI framework for LLM apps" },
        { name: "NLP", level: 75, description: "Natural Language Processing" },
        { name: "ML Models", level: 70, description: "Machine learning applications" },
        { name: "Task Automation", level: 80, description: "Intelligent automation" }
      ]
    },
    {
      icon: Globe,
      title: "Tools & Others",
      color: "from-teal-500 to-blue-400",
      skills: [
        { name: "Git", level: 88, description: "Version control" },
        { name: "GitLab", level: 85, description: "DevOps platform" },
        { name: "Docker", level: 75, description: "Containerization" },
        { name: "Figma", level: 80, description: "UI/UX design tool" }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My technical toolkit for building software solutions and solving complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 group"
              style={{
                animationDelay: `${categoryIndex * 0.1}s`,
                transform: inView ? 'translateY(0)' : 'translateY(50px)',
                opacity: inView ? 1 : 0,
                transition: `all 0.8s ease-out ${categoryIndex * 0.1}s`
              }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fun Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/5 backdrop-blur-lg rounded-full px-8 py-4 border border-purple-500/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">15+</div>
              <div className="text-xs text-gray-400">Technologies</div>
            </div>
            <div className="w-px h-8 bg-purple-500/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">6+</div>
              <div className="text-xs text-gray-400">Languages</div>
            </div>
            <div className="w-px h-8 bg-purple-500/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">4+</div>
              <div className="text-xs text-gray-400">Frameworks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;