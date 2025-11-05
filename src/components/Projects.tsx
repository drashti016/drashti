import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 1,
    title: 'Data Exporter & CRUD Dashboard',
    overview:
      'A full-stack dashboard application that automates data export, visualization, and PDF reporting. Built from scratch with authentication, secure password handling, CSV import/export, CRUD operations, and comprehensive user management.',
    techStack: ['Django', 'Django REST Framework', 'PostgreSQL', 'SendGrid', 'Docker'],
    whatIBuilt: [
      'Designed the entire CRUD workflow for user data management',
      'Implemented secure JWT authentication with password hashing',
      'Added CSV import/export functionality with background processing',
      'Created dynamic PDF generation for reports',
      'Built email notification system using SendGrid',
      'Dockerized the application for consistent deployment',
    ],
    whatILearned: [
      'Managing production environment issues (Windows vs Linux compatibility)',
      'Setting up Docker for consistent deployment across different systems',
      'Importance of detailed .env and YAML configurations for deployment',
      'True project completion means successful deployment, not just local testing',
      'Handling file uploads and processing in Django',
    ],
  },
  {
    id: 2,
    title: 'FastAPI Thesis Summarizer',
    overview:
      'An intelligent document processing system that automatically summarizes exam papers and theses using FastAPI. Features asynchronous processing for handling multiple documents efficiently.',
    techStack: ['FastAPI', 'Python', 'AI/ML', 'Async Processing'],
    whatIBuilt: [
      'Developed asynchronous API endpoints for document processing',
      'Implemented AI-powered text summarization algorithms',
      'Created efficient session management system',
      'Built RESTful API with comprehensive documentation',
      'Added rate limiting and error handling mechanisms',
    ],
    whatILearned: [
      'Session management is crucial in FastAPI applications',
      'Understanding when to use asynchronous programming for better performance',
      'Always test backend updates with frontend before deployment',
      'Importance of clear API documentation and communication',
      'Handling large file uploads and processing efficiently',
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 gradient-hero">
      <div className="container mx-auto px-6">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/5 mb-8">
          <span className="text-sm font-semibold text-primary">Featured Projects</span>
        </div>

        {/* Section Title */}
        <h2 className="text-5xl md:text-7xl font-black mb-16 leading-tight">
          DESIGN BRANDS THAT
          <br />
          SPEAK TO <span className="text-gradient">AUDIENCES</span>
        </h2>

        {/* Scrollable Projects Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[340px] md:w-[380px] gradient-card rounded-2xl shadow-card hover:shadow-hover transition-smooth group cursor-pointer animate-fade-in-up snap-start"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold flex-1">{project.title}</h3>
                    <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 translate-x-0 group-hover:translate-x-2 transition-transform" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-1">
                    {project.overview}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="flex-shrink-0 w-[340px] md:w-[380px] gradient-card rounded-2xl shadow-card p-8 flex items-center justify-center border-2 border-dashed border-muted-foreground/20 animate-fade-in-up snap-start" style={{ animationDelay: '200ms' }}>
              <div className="text-center">
                <p className="text-2xl font-bold text-muted-foreground mb-2">More Projects</p>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
