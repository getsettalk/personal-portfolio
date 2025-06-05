
import { Code2, Smartphone, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate React Native developer with over 1.6 years of experience building cross-platform mobile applications. I specialize in creating seamless, intuitive user experiences that work flawlessly on both iOS and Android.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              My expertise spans from complex state management with Zustand to implementing smooth animations and integrating native modules. I'm always exploring the latest technologies and best practices to deliver cutting-edge mobile solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {["JavaScript", "TypeScript", "React Native", "Redux", "Firebase", "GraphQL"].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 border border-white/20 hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Code2,
                title: "Clean Code",
                description: "Writing maintainable, scalable code following best practices and industry standards."
              },
              {
                icon: Smartphone,
                title: "Cross-Platform",
                description: "Building apps that work seamlessly across iOS and Android with native performance."
              },
              {
                icon: Zap,
                title: "Performance",
                description: "Optimizing apps for speed, efficiency, and smooth user interactions."
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
