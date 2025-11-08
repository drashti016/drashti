import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-accent/20 bg-accent/5 mb-6">
          <span className="text-sm font-semibold text-accent">Let's Connect</span>
        </div>

        {/* Main Content */}
        <div className="">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-[1.15]">
            Let's Build Something
            <br className="sm:hidden" />
            <span className="text-gradient ml-0 sm:ml-4">Amazing</span>
          </h2>


          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <a
              href="mailto:pateldrashti048@gmail.com"
              className="flex items-center gap-3 md:gap-4 text-base md:text-lg group hover:text-primary transition-smooth"
            >
              <div className="p-3 rounded-xl gradient-accent">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <span className="font-medium group-hover:translate-x-1 transition-transform break-all">
                pateldrashti048@gmail.com
              </span>
            </a>

            <a
              href="https://linkedin.com/in/drashtilakhani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 text-base md:text-lg group hover:text-primary transition-smooth"
            >
              <div className="p-3 rounded-xl bg-[#0A66C2]">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <span className="font-medium group-hover:translate-x-1 transition-transform">
                linkedin.com/in/drashtilakhani
              </span>
            </a>

            <a
              href="https://github.com/drashti016"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 text-base md:text-lg group hover:text-primary transition-smooth"
            >
              <div className="p-3 rounded-xl bg-foreground">
                <Github className="h-6 w-6 text-background" />
              </div>
              <span className="font-medium group-hover:translate-x-1 transition-transform">
                github.com/drashti016
              </span>
            </a>
          </div>

          {/* CTA */}
          <div className="gradient-card rounded-2xl p-6 md:p-8 shadow-card">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-snug">
              Is there a fascinating{' '}
              <span className="text-gradient">project</span> brewing in your mind?
            </h3>
            <p className="text-sm md:text-base text-foreground/70 mb-4 md:mb-6 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your visions.
            </p>
            <Button
              size="lg"
              className="gradient-accent text-primary-foreground hover:shadow-glow transition-smooth group"
              onClick={() => window.location.href = 'mailto:pateldrashti048@gmail.com'}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
