import ProjectSlide from "../components/ProjectSlide";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
       
        <div className="space-y-20">
          {projects.map((project) => (
            <ProjectSlide
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              images={project.images}
            />
          ))}
        </div>
      </div>
    </main>
  );
}