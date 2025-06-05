
import { FaReact, FaJs, FaLaravel, FaNodeJs, FaGitAlt, FaAndroid, FaApple } from "react-icons/fa";
import { SiTypescript, SiRedux, SiFirebase, SiGraphql, SiMongodb, SiDocker, SiKubernetes, SiAmazonaws } from "react-icons/si";

export const Skills = () => {
  const skills = [
    { name: "React Native", icon: FaReact, color: "text-blue-400" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Redux", icon: SiRedux, color: "text-purple-400" },
    { name: "Laravel", icon: FaLaravel, color: "text-red-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
    { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Docker", icon: SiDocker, color: "text-cyan-400" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
    { name: "AWS", icon: SiAmazonaws, color: "text-yellow-500" },
    { name: "iOS", icon: FaApple, color: "text-gray-300" },
    { name: "Android", icon: FaAndroid, color: "text-green-400" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
  ];

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-slate-900 to-navy-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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
                <h3 className="text-sm sm:text-base font-semibold text-white text-center">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
