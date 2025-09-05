import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/src/data/projects.json");
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        const projects = await response.json();
        const found = projects.find((p) => String(p.id) === String(id));
        if (!found) {
          setError("Project not found.");
        }
        setProject(found || null);
      } catch (error) {
        console.error("Error fetching project:", error);
        setError("Failed to load project data");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="p-12 text-center">
        <p className="text-gray-300">Loading project details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-12 text-center">
        <p className="text-red-400">{error}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
          >
            Back
          </Link>
        </div>
      </div>
    );
  }

  if (!project) return null;

  const {
    title,
    description,
    image,
    technology = [],
    liveDemo,
    clientRepo,
    serverRepo,
    status,
    start,
    end,
    challengesFaced = [],
    whatsNext = [],
  } = project;

  return (
    <div className=" bg-[#0d1117] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#0b0f14] border border-gray-700 rounded-xl p-4">
        <div>
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full h-64 lg:h-[440px] object-cover border border-gray-700"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold mb-2">
              <span className="text-teal-400">{title}</span>
            </h1>
            <p className="text-gray-300 mb-4">{description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-[#141a22] border border-gray-700 rounded-lg p-3">
                <p className="text-gray-400">Category</p>
                <p className="font-semibold">{project.category || "N/A"}</p>
              </div>
              <div className="bg-[#141a22] border border-gray-700 rounded-lg p-3">
                <p className="text-gray-400">Status</p>
                <p className="font-semibold">{status || "N/A"}</p>
              </div>
              <div className="bg-[#141a22] border border-gray-700 rounded-lg p-3">
                <p className="text-gray-400">Start Date</p>
                <p className="font-semibold">{start || "—"}</p>
              </div>
              <div className="bg-[#141a22] border border-gray-700 rounded-lg p-3">
                <p className="text-gray-400">End Date</p>
                <p className="font-semibold">{end || "—"}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {technology.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition text-white"
              >
                Live Demo
              </a>
            )}
            {clientRepo && (
              <a
                href={clientRepo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 border border-gray-600"
              >
                Client Repo
              </a>
            )}
            {serverRepo && (
              <a
                href={serverRepo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 border border-gray-600"
              >
                Server Repo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 ">
        <div className="bg-[#0b0f14] border border-gray-700 rounded-xl p-4 transition-all duration-300  hover:shadow-lg hover:shadow-gray-500/25 hover:border-teal-500">
          <h2 className="text-2xl font-bold text-orange-500 mb-3">
            What&apos;s Next?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {whatsNext.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#0b0f14] border border-gray-700 rounded-xl p-4 transition-all duration-300  hover:shadow-lg hover:shadow-gray-500/25 hover:border-teal-500">
          <h2 className="text-2xl font-bold text-orange-500 mb-3">
            Challenges Faced
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {challengesFaced.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <Link
          to="/projects"
          className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25 hover:border-teal-500 "
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
