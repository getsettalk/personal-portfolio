
import { FaMobile, FaCode, FaRocket, FaCog, FaCloud, FaUsers } from "react-icons/fa";

export const Services = () => {
  const services = [
    {
      icon: FaMobile,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native for iOS and Android with native performance.",
      features: ["iOS & Android", "Native Performance", "Custom UI/UX"]
    },
    {
      icon: FaCode,
      title: "Web Development",
      description: "Modern web applications using React, Laravel, and cutting-edge technologies for optimal user experience.",
      features: ["React/Laravel", "Responsive Design", "SEO Optimized"]
    },
    {
      icon: FaRocket,
      title: "App Store Optimization",
      description: "Complete app deployment and optimization for both App Store and Google Play Store.",
      features: ["Store Submission", "ASO Strategy", "Performance Monitoring"]
    },
    {
      icon: FaCog,
      title: "API Development",
      description: "Robust backend APIs and microservices architecture for scalable and maintainable applications.",
      features: ["RESTful APIs", "GraphQL", "Database Design"]
    },
    {
      icon: FaCloud,
      title: "Cloud Integration",
      description: "Cloud-based solutions using AWS, Firebase, and other cloud platforms for scalable applications.",
      features: ["AWS/Firebase", "CI/CD Pipeline", "Auto Scaling"]
    },
    {
      icon: FaUsers,
      title: "Team Leadership",
      description: "Technical leadership and mentoring for development teams, code reviews, and best practices.",
      features: ["Team Management", "Code Reviews", "Technical Guidance"]
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-gradient-to-b from-slate-800 to-navy-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-xl text-white/80 mt-6 max-w-3xl mx-auto">
            Comprehensive mobile and web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-purple-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                    <span className="text-white/60 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
