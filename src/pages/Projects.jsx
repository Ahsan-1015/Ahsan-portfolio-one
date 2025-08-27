import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

function Projects() {
  return (
    <section
      id="projects"
      className="p-2 lg:p-12 bg-[#0d1117] min-h-screen  border border-gray-500 rounded-xl"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
