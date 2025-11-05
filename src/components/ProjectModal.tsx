import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    image: string;
    overview: string;
    techStack: string[];
    whatIBuilt: string[];
    whatILearned: string[];
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <ScrollArea className="h-full max-h-[90vh]">
          <div className="p-8">
            {/* Header */}
            <DialogHeader className="mb-6">
              <DialogTitle className="text-3xl font-black">{project.title}</DialogTitle>
            </DialogHeader>

            {/* Project Image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-gradient">Overview</h3>
              <p className="text-foreground/70 leading-relaxed">{project.overview}</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-gradient">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg gradient-accent text-white text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Built */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-gradient">What I Built</h3>
              <ul className="space-y-2">
                {project.whatIBuilt.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What I Learned */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gradient">What I Learned</h3>
              <ul className="space-y-2">
                {project.whatILearned.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary mt-1">▸</span>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
