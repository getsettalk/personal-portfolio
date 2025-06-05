
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { GitHubStats } from "@/components/GitHubStats";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <GitHubStats />
      <Contact />
    </div>
  );
};

export default Index;
