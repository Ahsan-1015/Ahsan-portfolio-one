import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeaturedProject = ({ project }) => {
  if (!project) return null;
  const { id, title, description, image, liveDemo, technology } = project;
  return (
    <div className="mt-10 rounded-2xl border border-gray-700 bg-gradient-to-b from-[#0f1320] to-[#0b0f14] p-5 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="w-full lg:w-1/2">
          <span className="text-[10px] uppercase tracking-widest bg-cyan-200 text-gray-900 px-2 py-1 rounded-full">
            Latest Project
          </span>
          <h3 className="mt-3 text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-teal-300 to-fuchsia-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="mt-3 text-sm lg:text-base text-gray-300">
            {description}
          </p>
          <div className="mt-2 text-orange-600 flex flex-wrap gap-2 text-xs   ">
            {technology?.map((tech, index) => (
              <span className="bg-orange-100 rounded-md p-1" key={index}>
                {tech}
                {index < technology.length - 1 && ","}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <Link
              to={`/projects/${id}`}
              className="px-4 py-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black text-sm"
            >
              View Case Study
            </Link>
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="rounded-xl bg-[#0b0f14] border border-gray-700 p-3 lg:p-5">
            <div className="rounded-lg overflow-hidden border border-gray-700 hover:scale-105 transition-all duration-500">
              <img
                src={image}
                alt={title}
                className="w-full h-56 lg:h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturedProject.propTypes = {
  project: PropTypes.object,
};

export default FeaturedProject;
