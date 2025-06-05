
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-xl text-white/80 mt-6 max-w-2xl mx-auto">
            Ready to bring your mobile app idea to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-white/70">hello@reactnativedev.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-white/70">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <form className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
              />
            </div>
            <Input
              placeholder="Subject"
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
            />
            <Textarea
              placeholder="Your Message"
              rows={6}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
            />
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 hover:scale-105">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-white/60">
          © 2024 React Native Developer. Built with passion and React.
        </p>
      </footer>
    </section>
  );
};
