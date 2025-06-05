
export const Skills = () => {
  const skills = [
    { name: "React Native", level: 95 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "Redux/Context API", level: 88 },
    { name: "Firebase", level: 85 },
    { name: "REST APIs", level: 92 },
    { name: "GraphQL", level: 80 },
    { name: "Native Modules", level: 75 },
    { name: "CI/CD", level: 78 },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-medium text-white">{skill.name}</span>
                <span className="text-purple-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out group-hover:scale-105"
                  style={{
                    width: `${skill.level}%`,
                    animation: `slideInRight 1s ease-out ${index * 0.1}s both`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
