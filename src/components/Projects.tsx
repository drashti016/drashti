import { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { Button } from "./ui/button";

const projectsData = [
  {
    id: 1,
    title: "Data Export & PDF Generator with CRUD Operations",
    overview:
      "Developed a full-stack solution to export Excel data, perform CRUD operations, and generate PDFs from filtered datasets. Implemented secure data transfer and authentication mechanisms for safe backend communication.",
    techStack: ["Django", "PostgreSQL", "JWT", "Pandas"],
    whatIBuilt: [
      "Implemented Excel (.xlsx) data export and automated PDF generation from filtered data",
      "Built complete CRUD operations on exported datasets",
      "Integrated secure data transmission with backend validation",
      "Added JWT-based authentication for secure access",
      "Ensured production-ready deployment with proper configuration checks"
    ],
    whatILearned: [
      "Local environment setups can differ from server deployments — always test in production-like environments",
      "Importance of securing data before sending to backend",
      "How to implement and debug JWT authentication",
      "Gained deeper understanding of file handling and report generation workflows"
    ]
  },
  {
    id: 2,
    title: "High-Traffic FastAPI System Enhancement",
    overview:
      "Contributed to a large-scale FastAPI project with over a million users. Focused on maintaining and improving existing APIs while ensuring compatibility and stability across backend and frontend layers.",
    techStack: ["FastAPI", "MySQL", "Git"],
    whatIBuilt: [
      "Reviewed and optimized existing FastAPI endpoints",
      "Debugged complex API integration issues between frontend and backend",
      "Enhanced communication and collaboration between backend and frontend teams",
      "Implemented minor fixes and improvements on production-grade APIs"
    ],
    whatILearned: [
      "Backend functionality doesn’t guarantee frontend success — full-stack validation is key",
      "Improved debugging and tracing skills in large-scale systems",
      "Learned to collaborate effectively with cross-functional teams",
      "Better understanding of handling API versioning and dependencies in production"
    ]
  },
  {
    id: 3,
    title: "AI Chatbot & Schedule Generator using FastAPI and RAG",
    overview:
      "Built an intelligent chatbot system integrated with scheduling functionality using FastAPI. Implemented async programming for performance optimization and applied Retrieval-Augmented Generation (RAG) for context-aware responses.",
    techStack: ["FastAPI", "PineCone", "OpenAI API", "PostgreSQL"],
    whatIBuilt: [
      "Developed chatbot logic with RAG for enhanced contextual understanding",
      "Implemented asynchronous programming for efficient performance",
      "Integrated scheduling feature with chatbot responses",
      "Optimized prompt design and token usage for cost-effective API calls",
      "Managed database sessions and asynchronous operations cleanly"
    ],
    whatILearned: [
      "How async programming improves performance and scalability in FastAPI",
      "Effective prompt engineering for optimizing LLM responses",
      "Proper session handling in async database operations",
      "Better understanding of RAG pipeline integration and token management"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 gradient-hero">
      <div className="container mx-auto px-6">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/5 mb-8">
          <span className="text-sm font-semibold text-primary">
            Featured Projects
          </span>
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            FROM VISION TO 
            <span className="text-gradient ml-3">LIVE WEBSITE</span>
          </h2>

          {/* Scroll Navigation Buttons */}
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full w-12 h-12 shadow-card hover:shadow-hover"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full w-12 h-12 shadow-card hover:shadow-hover"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Scrollable Projects Container */}
        <div className="relative group">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          >
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[340px] md:w-[380px] gradient-card rounded-2xl shadow-card hover:shadow-hover transition-smooth group cursor-pointer animate-fade-in-up snap-start"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold flex-1">
                      {project.title}
                    </h3>
                    <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 translate-x-0 transition-transform" />
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
