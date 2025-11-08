import { Code, Database, Server, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

const techStack = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "React", "HTML", "CSS", "TailwindCSS"],
    description:
      "Building user-friendly, responsive, and accessible user interfaces.",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Django", "Django REST Framework", "FastAPI"],
    description: "Creating APIs and backend systems that scale easily.",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "SQL"],
    description: "Managing structured & unstructured data.",
  },
  {
    title: "Authentication",
    icon: Fingerprint,
    skills: ["Firebase", "JWT"],
    description: "Secure login & trusted access made simple.",
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
          Everything About
          <span className="text-gradient ml-0 md:ml-3">Me</span>
        </h2>

        {/* Description */}
        <div className="mb-16 space-y-4 text-lg text-foreground/70">
          <p>
            Hi there! I’m a Full Stack Developer who enjoys{" "}
            <span className="font-bold text-foreground">
              transforming your ideas into reality
            </span>
            ! Whether you want someone to{" "}
            <span className="font-bold text-foreground">
              implement your idea from the ground up
            </span>
            , build upon what you already have in a project, or{" "}
            <span className="font-bold text-foreground">
              maintain and enhance your existing project.
            </span>
          </p>
          <p>
            While working with you I don’t treat it just like writing code: I
            take as much time necessary to{" "}
            <span className="font-bold text-foreground">
              clearly communicate
            </span>
            , understand your goals, and deliver results that match your
            expectations. I like the
            <span className="font-bold text-foreground">
              idea of taking ownership
            </span>{" "}
            of the project or{" "}
            <span className="font-bold text-foreground">
              working collaboratively with your team
            </span>{" "}
            to ensure projects are running smoothly from the beginning to the
            end.
          </p>
        </div>

        {/* Tech Stack Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-secondary/20 bg-secondary/5 mb-8">
          <span className="text-sm font-semibold text-secondary">
            Skills & Tech Stack
          </span>
        </div>

        {/* Tech Stack Title */}
        <h3 className="text-4xl md:text-5xl font-black mb-2">
          Behind the Code
        </h3>
        <p className="text-xl mb-12">
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
                  <h4 className="text-2xl font-bold text-gradient">
                    {tech.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {tech.description}
                </p>
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
              "GitHub Management",
              "Docker Setup",
              "Stripe Integration",
              "SendGrid Email",
              "Third-party APIs",
              "AI Tools",
              "JWT Authentication",
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
        <h3 className="text-4xl md:text-5xl font-black mb-12">
          My <span className="text-gradient">Journey in Tech</span>
        </h3>

        {/* Experience Card */}
        <div className="gradient-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h4 className="text-2xl font-bold text-gradient mb-2">
                Full Stack Engineer
              </h4>
              <p className="text-lg font-semibold text-foreground">
                Citrusbug Technolabs
              </p>
            </div>
            <div className="text-muted-foreground mt-2 md:mt-0 md:text-right">
              <p className="font-medium">Sep 2023 – Oct 2025</p>
              <p>Ahmedabad</p>
            </div>
          </div>

          <div className="space-y-3 text-foreground/80">
            <div className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <p>
                Developed hands-on experience working with various technologies,
                including Django, Django REST Framework (DRF), FastAPI, React,
                and multiple databases, and leveraged AI tools to speed up
                development and build smarter solutions.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <p>
                Enhanced communication skills by interacting directly with
                clients, learning to understand their needs and communicate
                clearly in different situations.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <p>
                Managed the completion of several projects at once to build up
                time management and multitasking abilities while maintaining a
                high standard of output and meeting deadlines.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <p>
                Worked on a wide range of projects, from small applications to
                systems that serve millions of users, by contributing to
                everything from building web applications from scratch to
                optimizations of existing architectures and solving complex
                production issues with strong problem-solving skills.{" "}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <p>
                Developed intelligent chatbots, handled projects with short
                deadlines, and consistently produced work within the given
                timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
