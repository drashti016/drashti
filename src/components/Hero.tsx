import { Button } from "@/components/ui/button";
import { ArrowDown, Code2 } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center gradient-hero relative overflow-hidden pt-[72px]"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Side - Name & Description */}
          <div className="animate-fade-in-up px-4 md:px-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6">
              I AM
              <br />
              <span className="text-gradient">DRASHTI</span>
            </h1>

            <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-lg leading-relaxed">
              I am a developer who turns your dream thoughts into reality by
              providing clear insights into your vision and offering the best
              ideas. Using the latest technology and AI, Will create the best web apps
              for you.
            </p>

            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="gradient-accent text-primary-foreground hover:shadow-glow transition-smooth group"
            >
              Check Out My Projects
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Side - Role */}
          <div
            className="animate-fade-in-up px-4 md:px-0"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2]">
              A WEB
              <span className="text-gradient ml-2 md:ml-0">&lt;/&gt;</span>
              <br />
              DEVELOPER
            </p>

            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm shadow-card">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
