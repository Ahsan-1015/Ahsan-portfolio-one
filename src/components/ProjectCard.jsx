import { ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  technology,
  image,
  liveDemo,
  clientRepo,
  serverRepo,
}) => {
  const [hovered, setHovered] = useState(null);

  // eslint-disable-next-line react/prop-types
  const Tooltip = ({ text }) => (
    <div className="absolute bottom-full mb-2 px-3 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-md opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
      {text}
      <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl shadow-lg max-w-xl ">
      <div className="flex flex-col h-full">
        {/* Title */}
        <h3 className="text-lg xl:text-2xl font-bold">
          <span className="text-white">{title.split(" ")[0]}</span>{" "}
          <span className="text-orange-400">{title.split(" ")[1]}</span>
        </h3>
        <p className="text-gray-300 text-sm mt-1">
          {description.split(" ").slice(0, 15).join(" ")}
          {description.split(" ").length > 15 && (
            <span className="text-orange-500 cursor-pointer">
              {" "}
              ... Read More
            </span>
          )}
        </p>

        {/* Tech Stack */}
        <div className="mt-2 text-orange-600   text-xs space-x-2  ">
          {technology?.map((tech, index) => (
            <span
              className="bg-orange-100 rounded-md p-1 hidden 2xl:inline-block"
              key={index}
            >
              {tech}
              {index < technology.length - 1 && ","}
            </span>
          ))}
        </div>

        {/* Image */}
        <div className="mt-4">
          <img
            src={image}
            alt={title}
            className="rounded-lg border w-full h-40 2xl:h-60 2xl:w-96 object-cover border-gray-700"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2 xl:gap-4 justify-between">
            {/* Live Demo */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setHovered("live")}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === "live" && <Tooltip text="Live Demo" />}
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              >
                <ArrowUpRight
                  size={25}
                  className={`transition ${
                    hovered === "live" ? "text-orange-400" : "text-white"
                  }`}
                />
              </a>
            </div>

            <div className="flex gap-2 xl:gap-4 ">
              {/* Client Repo */}
              <div
                className="relative flex items-center"
                onMouseEnter={() => setHovered("client")}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === "client" && <Tooltip text="Client Repo" />}
                <a
                  href={clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                >
                  <FaGithub
                    size={25}
                    className={`transition ${
                      hovered === "client" ? "text-orange-400" : "text-white"
                    }`}
                  />
                </a>
              </div>

              {/* Server Repo */}
              <div
                className="relative flex items-center"
                onMouseEnter={() => setHovered("server")}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === "server" && <Tooltip text="Server Repo" />}
                <a
                  href={serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                >
                  <FaGithub
                    size={25}
                    className={`transition ${
                      hovered === "server" ? "text-orange-400" : "text-white"
                    }`}
                  />
                </a>
              </div>
            </div>

            {/* View Details */}
            <div
              className="relative flex items-center  ml-[90px] md:ml-16 xl:ml-[20px] 2xl:ml-[90px]"
              onMouseEnter={() => setHovered("details")}
              onMouseLeave={() => setHovered(null)}
            >
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 rounded-full text-xs 2xl:text-base border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-gray-900 transition"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  technology: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  liveDemo: PropTypes.string,
  clientRepo: PropTypes.string,
  serverRepo: PropTypes.string,
};

export default ProjectCard;
