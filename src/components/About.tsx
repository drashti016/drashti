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
            Hey, I’m a full-stack developer who loves creating seamless web experiences with <span className="font-bold text-foreground">React on the front end and FastAPI </span>on the backend. My focus goes beyond just building—I<span className="font-bold text-foreground"> leverage AI technologies </span>like Retrieval-Augmented Generation (RAG) to make applications smarter and more efficient. Whether it’s integrating APIs, managing databases, or optimizing performance, I’m driven by building systems that work fast and look great.
            <span className="font-bold text-foreground"></span>
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

        {/* Experience Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/5 mt-16 mb-8">
          <span className="text-sm font-semibold text-primary">Experience</span>
        </div>

        {/* Experience Title */}
        <h3 className="text-4xl md:text-5xl font-black mb-12 text-center">Professional Journey</h3>

        {/* Experience Card */}
        <div className="gradient-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h4 className="text-2xl font-bold text-gradient mb-2">Full Stack Engineer</h4>
              <p className="text-lg font-semibold text-foreground">Citrusbug Technolabs</p>
            </div>
            <div className="text-muted-foreground mt-2 md:mt-0 md:text-right">
              <p className="font-medium">Sep 2023 – Oct 2025</p>
              <p>Ahmedabad</p>
            </div>
          </div>
          
          <div className="space-y-3 text-foreground/80">
            <div className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <p>Created an AI-powered chat web app using Retrieval-Augmented Generation (RAG) architecture, which included a Pinecone vector database for semantic search capabilities, and applied prompt engineering practices to ensure response quality while minimizing tokens.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <p>Implemented a fully-featured PDF generation/export module in a web app, and containerized the application with Docker for easy deployment across platforms.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <p>Contributed to a large-scale production system with millions of users live, applied advanced debugging and performance optimization skills while communicating effectively cross-team to ensure smooth delivery.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <p>Improved session management and async request handling in a backend based on FastAPI, which increased throughput of the system overall.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
