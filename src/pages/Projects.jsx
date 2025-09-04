import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

function Projects({ showViewAll = false }) {
  return (
    <section
      id="projects"
      className="p-2 lg:p-12 bg-[#0d1117] min-h-screen  border border-gray-500 rounded-xl"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      {showViewAll ? (
        // Home overview: show 4 projects + latest featured
        (() => {
          const sorted = [...projects].sort(
            (a, b) => new Date(b.start || 0) - new Date(a.start || 0)
          );
          const [latest, ...rest] = sorted;
          const firstFour = rest.slice(0, 3);
          return (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {firstFour.map((p) => (
                  <ProjectCard key={p.id} {...p} />
                ))}
              </div>
              <FeaturedProject project={latest} />
              <div className="mt-10 flex justify-center">
                <Link
                  to="/projects"
                  className="px-6 py-2 rounded-full border border-gray-600 text-gray-200 bg-[#0b0f14] shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:shadow-[0_0_45px_rgba(168,85,247,0.3)] transition-shadow duration-300 hover:border-cyan-400 hover:text-white"
                >
                  View All Projects
                </Link>
              </div>
            </>
          );
        })()
      ) : (
        // Projects page: show all projects
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
Projects.propTypes = {
  showViewAll: PropTypes.bool,
};
