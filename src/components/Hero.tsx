
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-400/40 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400/35 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-300/30 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/2 w-4 h-4 bg-pink-300/25 rounded-full animate-float-medium"></div>
        
        {/* Code Symbols */}
        <div className="absolute top-1/5 left-1/5 text-purple-400/20 text-2xl animate-float-slow">&lt;/&gt;</div>
        <div className="absolute bottom-1/5 right-1/5 text-pink-400/20 text-xl animate-float-medium">{}</div>
        <div className="absolute top-2/3 left-1/6 text-blue-400/20 text-lg animate-float-fast">( )</div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Sujeet Sharma
            <br />
            <span className="text-2xl sm:text-4xl md:text-6xl">React Native Developer</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Crafting beautiful, performant mobile applications that deliver exceptional user experiences across iOS and Android platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transition-all duration-300 hover:scale-105">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "https://github.com/getsettalk", label: "GitHub" },
              { icon: Linkedin, href: "https://in.linkedin.com/in/sujeet-kumar-sharma-b36609201", label: "LinkedIn" },
              { icon: Mail, href: "mailto:rajrock7254@gmail.com.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/60" size={24} />
        </div>
      </div>
    </section>
  );
};
