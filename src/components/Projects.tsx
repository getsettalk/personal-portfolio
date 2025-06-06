
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "SoExpensive Mobile App",
      description: "A full-featured mobile application for SoExpensive, enabling users to track expenses, manage budgets, and analyze spending patterns.",
      tech: ["React Native", "Zustand", "Laravel", "MySQL"],
      image: "https://play-lh.googleusercontent.com/m8HfCYbAVd5lHy1suSOJ-Gcc6pVc0PjiW7-Taunx6OZVrCA8p1L0Y_fjxfBH5KZ9xw=w832-h470-rw",
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.soexpensiveapp&hl=en_IN"
    },
    {
      title: "Trip Planner : Plan your trip",
      description: "A comprehensive trip planning app that allows users to create itineraries, track their progress, and share travel experiences with friends.",
      tech: ["React Native", "Firebase", "Sqlite"],
      image: "https://play-lh.googleusercontent.com/fNANR4XwtA-no2CXnmaZyinaK4cF9bimgc-3xtkbf8BcmetcAcXWHSO_yeR8PkOg2A=w832-h470-rw",
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.sujeet.tripplanner&hl=en_IN"
    },
    {
      title: "One Salary - Manage Attendance",
      description: "A mobile application designed to help users manage their attendance, track work hours, and calculate salaries based on attendance data.",
      tech: ["React Native", "Zustand", "Laravel", "FCM"],
      image: "https://play-lh.googleusercontent.com/WfM4-VU1ZHDQh9UN_mTmEhjLCmc7-_TaP8L3mIPb78vo4oN_bFF0u6Ycj92cg9NF-no=w832-h470-rw",
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.onesalary&hl=en_IN"
    },
    {
      title: "RN Gradient Generator",
      description: "A React-based gradient generator tool that enables users to create, customize, and export linear gradients for web development with enhanced UI/UX features.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      // image: "https://github.com/user-attachments/assets/e09eff1d-d4cf-4710-bdb0-7e6661265d5b",
      image: "https://github-production-user-asset-6210df.s3.amazonaws.com/49394996/452167273-e09eff1d-d4cf-4710-bdb0-7e6661265d5b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250606%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250606T052014Z&X-Amz-Expires=300&X-Amz-Signature=58f57aaee5b6c0a31034903a1135e2e0295fc658d3624cc8cc3fbfbab231cd83&X-Amz-SignedHeaders=host",
      github: "#",
      demo: "https://rn-gradient.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 border-white/30 text-white hover:bg-white/10">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <ExternalLink size={16} className="mr-2" />
                    Visit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
