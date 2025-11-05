const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 border-t border-border bg-card">
      <div className="mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-2xl font-black">
            DL
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {['Projects', 'About Me', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-sm font-medium hover:text-primary transition-smooth"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            Designed by Drashti © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
