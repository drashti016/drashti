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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm shadow-card mb-8">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Full Stack Developer</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            I AM
            <br />
            <span className="text-gradient">DRASHTI</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-8 font-medium">
            A developer who loves blending creative frontends with scalable backends to deliver meaningful digital products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="gradient-accent text-primary-foreground hover:shadow-glow transition-smooth group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              size="lg"
              variant="outline"
              className="bg-card/50 backdrop-blur-sm hover:bg-card transition-smooth"
            >
              Learn More
            </Button>
          </div>

          {/* Tech Badge */}
          <div className="mt-12 inline-block">
            <p className="text-3xl md:text-5xl font-black">
              A WEB <span className="text-gradient">&lt;/&gt;</span>
              <br />
              DEVELOPER
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
