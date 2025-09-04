import PropTypes from "prop-types";
// import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({
  id,
  title,
  description,
  technology,
  image,
  liveDemo,
  clientRepo,
  serverRepo,
  isLatest,
}) => {
  // no local state

  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl shadow-lg max-w-xl relative">
      {isLatest && (
        <span className="absolute -top-3 -left-3 text-[10px] uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black px-2 py-1 rounded-full border border-gray-800">
          Latest Project
        </span>
      )}
      <div className="flex flex-col h-full">
        {/* Title */}
        <h3 className="text-lg xl:text-2xl font-bold">
          <span className="text-teal-400">{title}</span>
        </h3>
        <p className="text-gray-300 text-sm mt-1">
          {description.split(" ").slice(0, 15).join(" ")}
          {description.split(" ").length > 15 && (
            <a
              href={`/projects/${id}`}
              className="text-teal-500 cursor-pointer"
            >
              {" "}
              ... Read More
            </a>
          )}
        </p>

        {/* Image with hover overlay (actions inside) */}
        <div className="mt-4 group relative rounded-lg overflow-hidden border border-gray-700">
          <img
            src={image}
            alt={title}
            className="w-full h-40 2xl:h-60 2xl:w-96 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/90 via-[#0d1117]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
            <div className="flex gap-3">
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon relative 2xl:w-10 2xl:h-10 w-8 h-8 rounded-full bg-indigo-500 hover:bg-indigo-500 flex items-center justify-center"
                >
                  <FiExternalLink className="text-white  hover:text-orange-400 hover:scale-105 transition-all duration-300  2xl:w-5 2xl:h-5 w-4 h-4" />
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-gray-900 px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity">
                    Live Demo
                  </span>
                </a>
              )}
              {clientRepo && (
                <a
                  href={clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon relative 2xl:w-10 2xl:h-10 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600 flex items-center justify-center"
                >
                  <FaGithub className="text-white  hover:text-orange-400 hover:scale-105 transition-all duration-300  2xl:w-5 2xl:h-5 w-4 h-4" />
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-gray-900 px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity">
                    Client Repo
                  </span>
                </a>
              )}
              {serverRepo && (
                <a
                  href={serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon relative 2xl:w-10 2xl:h-10 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600 flex items-center justify-center"
                >
                  <FaGithub className="text-white hover:text-orange-400 hover:scale-105 transition-all duration-300  2xl:w-5 2xl:h-5 w-4 h-4" />
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-gray-900 px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity">
                    Server Repo
                  </span>
                </a>
              )}
            </div>
            <Link
              to={`/projects/${id}`}
              className="px-3 py-1 text-xs 2xl:text-sm border border-orange-500 rounded-md bg-orange-500 hover:bg-orange-400 text-black"
            >
              View Details
            </Link>
          </div>
        </div>
        {/* Tech Stack */}
        <div className="mt-2 text-orange-600 flex flex-wrap gap-2 text-xs   ">
          {technology?.map((tech, index) => (
            <span className="bg-orange-100 rounded-md p-1" key={index}>
              {tech}
              {index < technology.length - 1 && ","}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  technology: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  liveDemo: PropTypes.string,
  clientRepo: PropTypes.string,
  serverRepo: PropTypes.string,
  isLatest: PropTypes.bool,
};

export default ProjectCard;
