import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';

const projectsData = [
  {
    id: 1,
    title: 'Data Exporter & CRUD Dashboard',
    image: project1Image,
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
    image: project2Image,
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <ArrowRight className="h-6 w-6 text-primary translate-x-0 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.overview}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-medium bg-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="gradient-card rounded-2xl overflow-hidden shadow-card p-8 flex items-center justify-center border-2 border-dashed border-muted-foreground/20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="text-center">
              <p className="text-2xl font-bold text-muted-foreground mb-2">More Projects</p>
              <p className="text-sm text-muted-foreground">Coming Soon</p>
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
