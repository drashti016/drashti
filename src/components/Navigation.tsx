import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // close menu on navigation
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'bg-card/80 backdrop-blur-lg shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-black tracking-tight hover:text-primary transition-smooth flex items-center"
          >
            DL
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-primary transition-smooth relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="gradient-accent text-primary-foreground hover:shadow-glow transition-smooth group"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent/20 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-4 bg-card/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg animate-fade-in">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-base font-medium hover:text-primary transition-smooth"
              >
                {item}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full gradient-accent text-primary-foreground hover:shadow-glow transition-smooth"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
