import { Code, Database, Server, Lock, Fingerprint, CreditCard, FileCode, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techStack = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS', 'TailwindCSS'],
    description: 'Building sleek, responsive, and accessible user interfaces.',
    decorativeIcons: [Code, Hash, FileCode],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'SQL'],
    description: 'Managing structured & unstructured data with efficiency.',
    decorativeIcons: [Database, Server, Hash],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Django', 'Django REST Framework', 'FastAPI'],
    description: 'Creating APIs and server-side logic that scales.',
    decorativeIcons: [Server, Code, FileCode],
  },
  {
    title: 'Authentication',
    icon: Fingerprint,
    skills: ['Firebase', 'JWT'],
    description: 'Secure login & trusted access made simple.',
    decorativeIcons: [Fingerprint, Lock, Hash],
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Top Section: Intro + Decorative Icons */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
          {/* Left: Introduction */}
          <div className="animate-fade-in-up">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/5 mb-6">
              <span className="text-sm font-semibold text-primary">About Me</span>
            </div>

            {/* Section Title */}
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              EVERYTHING ABOUT
              <br />
              <span className="text-gradient">DRASHTI</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-base text-foreground/70 mb-8">
              <p>
                Hi, <span className="font-bold text-foreground">Drashti</span> is a passionate{' '}
                <span className="font-bold text-foreground">Full Stack Developer</span> who loves
                crafting modern web applications that are both beautiful on the surface and
                powerful under the hood.
              </p>
              <p>
                With expertise in{' '}
                <span className="font-bold text-foreground">React, Next.js, Node.js, Express,</span> and{' '}
                <span className="font-bold text-foreground">PostgreSQL</span>, I bring together
                intuitive design and efficient functionality. My experience with authentication
                systems, payment gateways, and cloud deployment makes me confident in delivering
                production-ready solutions for real-world scenarios.
              </p>
            </div>

            <Button
              size="lg"
              className="gradient-accent text-primary-foreground hover:shadow-glow transition-smooth"
            >
              More About Me
            </Button>
          </div>

          {/* Right: Decorative Tech Icons */}
          <div className="relative h-[400px] lg:h-[500px] animate-scale-in">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Center Icon */}
              <div className="relative z-10 w-24 h-24 bg-card rounded-2xl shadow-card flex items-center justify-center">
                <Code className="h-12 w-12 text-primary" />
              </div>

              {/* Orbiting Icons */}
              <div className="absolute top-0 right-1/4 w-16 h-16 bg-card rounded-xl shadow-card flex items-center justify-center animate-float">
                <Server className="h-8 w-8 text-secondary" />
              </div>
              <div className="absolute bottom-12 left-12 w-16 h-16 bg-card rounded-xl shadow-card flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <Database className="h-8 w-8 text-accent" />
              </div>
              <div className="absolute top-1/4 right-8 w-14 h-14 bg-card rounded-xl shadow-card flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <FileCode className="h-7 w-7 text-primary" />
              </div>
              <div className="absolute bottom-1/4 right-16 w-12 h-12 bg-card rounded-lg shadow-card flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <Hash className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="absolute top-1/3 left-8 w-14 h-14 bg-card rounded-xl shadow-card flex items-center justify-center animate-float" style={{ animationDelay: '0.8s' }}>
                <Lock className="h-7 w-7 text-secondary" />
              </div>

              {/* Curved Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(var(--primary), 0.3))' }}>
                <path d="M 200 250 Q 300 150 350 200" stroke="hsl(var(--primary) / 0.3)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" />
                <path d="M 200 250 Q 100 200 120 150" stroke="hsl(var(--secondary) / 0.3)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              </svg>
            </div>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-secondary/20 bg-secondary/5 mb-8">
          <span className="text-sm font-semibold text-secondary">Skills & Tech Stack</span>
        </div>

        {/* Tech Stack Title */}
        <h3 className="text-4xl md:text-5xl font-black mb-12 text-center">MY TECH TOOLBOX</h3>

        {/* Tech Stack Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            const [Icon1, Icon2, Icon3] = tech.decorativeIcons;
            return (
              <div
                key={tech.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth group animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Title */}
                <h4 className="text-2xl font-bold text-gradient mb-3 text-center">{tech.title}</h4>
                
                {/* Skills List */}
                <p className="text-xs text-center text-foreground/80 mb-6 leading-relaxed">
                  {tech.skills.join(', ')}
                </p>

                {/* Central Icon with Decorative Elements */}
                <div className="relative h-32 flex items-center justify-center mb-6">
                  {/* Center Icon */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Decorative Icons */}
                  <div className="absolute top-2 left-8 w-8 h-8 flex items-center justify-center opacity-40">
                    <Icon1 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="absolute bottom-4 right-6 w-8 h-8 flex items-center justify-center opacity-40">
                    <Icon2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="absolute top-8 right-8 w-8 h-8 flex items-center justify-center opacity-40">
                    <Icon3 className="h-5 w-5 text-muted-foreground" />
                  </div>

                  {/* Curved Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30">
                    <path d="M 60 50 Q 80 30 100 40" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" fill="none" />
                    <path d="M 60 70 Q 40 60 50 40" stroke="hsl(var(--secondary) / 0.3)" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>

                {/* Description */}
                <p className="text-xs text-center text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h4 className="text-xl font-bold mb-4 text-center">Other Skills & Tools</h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'GitHub Management',
              'Docker Setup',
              'Stripe Integration',
              'SendGrid Email',
              'Third-party APIs',
              'AI Tools',
              'JWT Authentication',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg gradient-accent text-white text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
