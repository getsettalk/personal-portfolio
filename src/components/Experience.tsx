
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior React Native Developer",
      company: "Tech Solutions Inc.",
      duration: "2022 - Present",
      description: "Leading development of cross-platform mobile applications, implementing complex features and mentoring junior developers.",
      achievements: ["Led team of 5 developers", "Improved app performance by 40%", "Implemented CI/CD pipeline"]
    },
    {
      title: "React Native Developer",
      company: "Mobile Innovations",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple mobile applications using React Native, Redux, and Firebase.",
      achievements: ["Built 8 successful apps", "Integrated payment systems", "Optimized app store rankings"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      duration: "2019 - 2020",
      description: "Worked on web and mobile development using Laravel, React, and React Native technologies.",
      achievements: ["Developed REST APIs", "Built responsive web apps", "Reduced load times by 60%"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-gradient-to-b from-navy-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="relative pl-8 pb-12 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-12 w-0.5 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 sm:mb-0">{exp.title}</h3>
                  <div className="flex items-center text-purple-300">
                    <FaCalendarAlt className="mr-2" size={14} />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <FaBriefcase className="text-pink-400 mr-3" size={16} />
                  <span className="text-white/80 font-medium">{exp.company}</span>
                </div>
                
                <p className="text-white/70 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                      <span className="text-white/60 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
