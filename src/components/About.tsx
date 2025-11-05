import { Code, Database, Server, Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techStack = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'TailwindCSS'],
    description: 'Building sleek, responsive, and accessible user interfaces.',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Django', 'Django REST Framework', 'FastAPI'],
    description: 'Creating APIs and server-side logic that scales.',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'SQL'],
    description: 'Managing structured & unstructured data with efficiency.',
  },
  {
    title: 'Authentication',
    icon: Fingerprint,
    skills: ['Firebase', 'JWT'],
    description: 'Secure login & trusted access made simple.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/5 mb-8">
          <span className="text-sm font-semibold text-primary">About Me</span>
        </div>

        {/* Section Title */}
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          EVERYTHING ABOUT
          <span className="text-gradient ml-0 md:ml-3">DRASHTI</span>
        </h2>

        {/* Description */}
        <div className="mb-16 space-y-4 text-lg text-foreground/70">
          <p>
            Hi, <span className="font-bold text-foreground">Drashti</span> is a passionate{' '}
            <span className="font-bold text-foreground">Full Stack Developer</span> who loves
            crafting modern web applications that are both beautiful on the surface and
            powerful under the hood.
          </p>
          <p>
            With expertise in{' '}
            <span className="font-bold text-foreground">React, FastAPI, DRF, </span> and{' '}
            <span className="font-bold text-foreground">PostgreSQL</span>, I bring together
            intuitive design and efficient functionality.
          </p>
        </div>

        {/* Tech Stack Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-secondary/20 bg-secondary/5 mb-8">
          <span className="text-sm font-semibold text-secondary">Skills & Tech Stack</span>
        </div>

        {/* Tech Stack Title */}
        <h3 className="text-4xl md:text-5xl font-black mb-2 text-center">Behind the Code</h3>
        <p className="text-xl mb-12 text-center">
          The technologies create innovation for my projects.
        </p>

        {/* Tech Stack Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.title}
                className="gradient-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl gradient-accent">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gradient">{tech.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-muted text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="gradient-card rounded-2xl p-8 shadow-card">
          <h4 className="text-xl font-bold mb-4">Other Skills & Tools</h4>
          <div className="flex flex-wrap gap-2">
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
