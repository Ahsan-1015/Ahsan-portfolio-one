import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <section id="projects" className="p-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProjectCard title="Project 1" image="/assets/images/project1.jpg" />
        <ProjectCard title="Project 2" image="/assets/images/project2.jpg" />
        <ProjectCard title="Project 3" image="/assets/images/project3.jpg" />
      </div>
    </section>
  );
}

export default Projects;
