import { Button } from '@/components/ui/button';
import { ArrowRight, Code2 } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Side - Name & Description */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
              I AM
              <br />
              <span className="text-gradient">DRASHTI</span>
            </h1>
            
            <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-md">
              A developer who loves blending creative frontends with scalable backends to deliver meaningful digital products.
            </p>

            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="gradient-accent text-primary-foreground hover:shadow-glow transition-smooth group"
            >
              Download Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Center - Decorative Element */}
          <div className="lg:col-span-1 flex items-center justify-center animate-scale-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl animate-glow" />
              <div className="absolute inset-8 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full animate-float" />
              <div className="absolute inset-16 bg-card/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Code2 className="h-20 w-20 text-primary animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Side - Role */}
          <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              A WEB
              <br />
              <span className="text-gradient">&lt;/&gt;</span>
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
