
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="bio" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture Side */}
          <div className="flex flex-col items-center space-y-6 animate-fade-in">
            <Avatar className="w-64 h-64">
              <AvatarImage src="/lovable-uploads/027c26db-20f8-40d6-ad41-dcc044d0e935.png" alt="Professional headshot of Vikram" />
              <AvatarFallback>VY</AvatarFallback>
            </Avatar>
            <div className="flex justify-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <Link
                to="/projects"
                className="px-6 py-3 border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Bio Details Side */}
          <div className="text-left space-y-6 animate-fade-in">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-6xl font-bold">Vikram</h1>
              <h2 className="text-3xl md:text-5xl font-bold text-primary">Cloud, AI & Beyond</h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Passionate about exploring AI, Cloud, DevOps, and cutting-edge technologies to build scalable solutions, optimize workflows, and drive innovation.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Enthusiastic about traveling, experiencing diverse cultures, and adapting to evolving technological and workplace environments. Embraces change, upgrades, and enjoys nature and outdoor experiences.
            </p>
            <ul className="space-y-3 text-lg">
              <li>🚀 Cloud & DevOps Enthusiast</li>
              <li>🤖 AI Explorer</li>
              <li>🌿 Nature & Adventure Lover</li>
              <li>🌍 Cultural Explorer</li>
            </ul>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#experience"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to experience section"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
