
import { Smartphone, Code, Database, Cloud, Zap, Globe, Cpu, GitBranch } from "lucide-react";

export const Skills = () => {
  const skills = [
    { name: "React Native", icon: Smartphone, color: "text-blue-400" },
    { name: "JavaScript/TypeScript", icon: Code, color: "text-yellow-400" },
    { name: "Redux/Context API", icon: Zap, color: "text-purple-400" },
    { name: "Firebase", icon: Database, color: "text-orange-400" },
    { name: "REST APIs", icon: Globe, color: "text-green-400" },
    { name: "GraphQL", icon: Database, color: "text-pink-400" },
    { name: "Native Modules", icon: Cpu, color: "text-cyan-400" },
    { name: "CI/CD", icon: GitBranch, color: "text-red-400" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                <div className={`mb-4 p-3 rounded-full bg-white/10 ${skill.color} transition-all duration-300 group-hover:scale-110`}>
                  <skill.icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out group-hover:w-full`}
                       style={{ width: '85%', animation: `slideInRight 1s ease-out ${index * 0.1}s both` }}>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
