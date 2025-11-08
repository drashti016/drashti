import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";

const projectsData = [
  {
    id: 1,
    title: "Data Export & PDF Generator with CRUD Operations",
    overview:
    "Created a full-stack solution for exporting data to Excel, performing CRUD functionality, and creating PDFs from filtered data. Implemented secure authentication and data transfer protocols to provide safe and reliable communication to the backend data.",
    techStack: ["Django", "PostgreSQL", "JWT", "Pandas"],
    whatIBuilt: [
      "Created a fully functional application which uses secure JWT authentication in order to secure user logins and move data securely from the front end to the back end. ",
      "Worked closely with the client throughout the project and later scaled the application based on the client's new ideas and business needs. ",
      "Tested the whole system prior to launching it and solved any environment issues due to operating system differences with timely updates to keep the client informed. ",
      "Built the codebase with scalability and flexibility allowing for easy extensibility and modification as project needs developed.",
    ],
  },
  {
    id: 2,
    title: "High-Traffic FastAPI System Enhancement",
    overview:
    "maintained and improved existing APIs while guaranteeing smooth compatibility and stability between backend and frontend systems as part of a massive FastAPI project that served over a million users.",
    techStack: ["FastAPI", "MySQL", "Git"],
    whatIBuilt: [
      "Applied strong debugging skills to quickly identify and resolve functional issues, to ensure reliable system performance without interruption. ",
      "Conducted comprehensive front-end testing for every system update to guarantee proper functionality and smooth front-end integration. ",
      "Collaborated with front-end developers to clearly pass along backend changes, enabling a quicker, more seamless update process.",
      "Optimized backend logic and performance to handle, without delay, high traffic in order to improve system stability.",
    ],
  },
  {
    id: 3,
    title: "AI Chatbot & Schedule Generator using FastAPI and RAG",
    overview:
    "Created an intelligent chatbot and scheduling features with FastAPI.  I used async programming to make the bot run faster and applied RAG architecture to give it context understanding to give better quality answers.",
    techStack: ["FastAPI", "PineCone", "OpenAI API", "PostgreSQL"],
    whatIBuilt: [
      "Developed an AI-based chatbot using FastAPI, PostgreSQL, and Pinecone, applying a Retrieval-Augmented Generation (RAG) architecture for accurate and informative responses based on context.",
      "Advanced and optimized prompts to reduce tokens and improve the quality of responses, without sacrificing significant costs through API calls.",
      "Implemented secure JWT for user access authentication and utilized SendGrid for delivery and secure email async callbacks.",
      "Processed database sessions and async functionality efficiently for a smooth and scalable performance.",
    ],
  },
  {
    id:4,
    title:"School Paper Examination App",
    overview:"Enhanced an existing digital assessment platform by incorporating Stripe payments with FastAPI webhooks to facilitate secure and automated transactions. Optimized system performance through improved PostgreSQL session management while adding asynchronous processing for better user experience.",
    techStack:["FastAPI","Stripe","PostgreSQL"],
    whatIBuilt:[
      "Gained insight into how to securely integrate Stripe payments with FastAPI webhooks.",
      "Grew familiarity with asynchronous programming, as well as handling database sessions for more efficient backend operations.",
      "Further honed collaboration and debugging skills while adapting to project developments and requirements."
    ]
  }
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-16 md:py-32 gradient-hero relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/5 mb-6">
            <span className="text-sm font-semibold text-primary">
              All Projects
            </span>
          </div>

          {/* Section Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] mb-8 md:mb-12">
            From Vision to
            <br className="sm:hidden" />
            <span className="text-gradient ml-0 sm:ml-3">Live Website</span>
          </h1>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="gradient-card rounded-2xl shadow-card hover:shadow-hover transition-smooth cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold flex-1">
                      {project.title}
                    </h3>
                    <ArrowRight className="h-6 w-6 text-primary flex-shrink-0" />
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
      </main>

      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
