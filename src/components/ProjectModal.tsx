import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink, Code, ShoppingCart, Calendar, Utensils } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string;
  icon: any;
  color: string;
  url: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string | null;
  projects: Project[];
}

export function ProjectModal({ isOpen, onClose, projectId, projects }: ProjectModalProps) {
  const project = projects.find(p => p.id === projectId);
  
  if (!project) return null;

  const Icon = project.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-background border-border">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.name}</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-${project.color}/10 border border-${project.color}/20`}>
                <Icon className={`w-6 h-6 text-${project.color}`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {project.tech}
              </Badge>
              <Button variant="ghost" size="sm" asChild>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Abrir projeto
                </a>
              </Button>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Preview Frame */}
          <div className="flex-1 p-6">
            <div className="w-full h-full bg-muted/20 rounded-lg border border-border overflow-hidden">
              <iframe
                src={project.url}
                title={project.name}
                className="w-full h-full"
                frameBorder="0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border bg-muted/20">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                <strong>Tecnologias:</strong> {project.tech}
              </div>
              <Button variant="neon" asChild>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver projeto completo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}