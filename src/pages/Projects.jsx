import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";

function Projects({ showViewAll = false }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [sortBy, setSortBy] = useState("Sort By");

  // Fetch projects data
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/src/data/projects.json");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Fallback to empty array if fetch fails
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Get unique categories
  const categories = useMemo(
    () => ["All Categories", ...new Set(projects.map((p) => p.category))],
    [projects]
  );
  const statuses = ["All Status", "Completed", "Ongoing"];

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Categories" ||
        project.category === selectedCategory;
      const matchesStatus =
        selectedStatus === "All Status" || project.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });

    // Sort projects
    if (sortBy === "Start Date (Newest)") {
      filtered.sort((a, b) => new Date(b.start || 0) - new Date(a.start || 0));
    } else if (sortBy === "Start Date (Oldest)") {
      filtered.sort((a, b) => new Date(a.start || 0) - new Date(b.start || 0));
    } else if (sortBy === "End Date (Newest)") {
      filtered.sort((a, b) => new Date(b.end || 0) - new Date(a.end || 0));
    } else if (sortBy === "End Date (Oldest)") {
      filtered.sort((a, b) => new Date(a.end || 0) - new Date(b.end || 0));
    }

    return filtered;
  }, [projects, searchTerm, selectedCategory, selectedStatus, sortBy]);

  if (showViewAll) {
    // Home overview: show 4 projects + latest featured
    const sorted = [...projects].sort(
      (a, b) => new Date(b.start || 0) - new Date(a.start || 0)
    );
    const [latest, ...rest] = sorted;
    const firstFour = rest.slice(0, 3);
    return (
      <section
        id="projects"
        className="p-2 lg:p-12 bg-[#0d1117] min-h-screen  border border-gray-500 rounded-xl"
      >
        <div className="flex flex-col items-center justify-center mb-8 gap-2 ">
          <h2 className="text-3xl font-bold border-b-4 border-teal-500 rounded-md p-1  text-center mb-6">
            Featured Projects
          </h2>
          <h4 className="text-center">
            Here are some of my recent projects. Each project showcasesl <br />
            different skills and technologies from my stack.
          </h4>
        </div>
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
      </section>
    );
  }

  if (loading) {
    return (
      <section
        id="projects"
        className="p-2 lg:p-12 bg-[#0d1117] min-h-screen  border border-gray-500 rounded-xl"
      >
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="p-2 lg:p-12 bg-[#0d1117] min-h-screen  border border-gray-500 rounded-xl"
    >
      <div className="flex items-center justify-center mb-8 gap-2 ">
        <h2 className="text-3xl font-bold text-center mb-6">
          All Projects here
        </h2>
        <span className="text-blue-400 animate-bounce w-06 h-6">
          <IoIosArrowDropdown />
        </span>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white text-gray-800 px-4 py-2 pr-8 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="appearance-none bg-white text-gray-800 px-4 py-2 pr-8 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
          </div>

          {/* Sort Filter */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white text-gray-800 px-4 py-2 pr-8 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              <option value="Sort By">Sort By</option>
              <option value="Start Date (Newest)">Start Date (Newest)</option>
              <option value="Start Date (Oldest)">Start Date (Oldest)</option>
              <option value="End Date (Newest)">End Date (Newest)</option>
              <option value="End Date (Oldest)">End Date (Oldest)</option>
            </select>
            <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center text-gray-400">
          Showing {filteredAndSortedProjects.length} of {projects.length}{" "}
          projects
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAndSortedProjects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>

      {/* No Results */}
      {filteredAndSortedProjects.length === 0 && (
        <div className="text-center py-12 w-full">
          <img
            className="w-40 h-40   mx-auto mb-4"
            src="https://i.ibb.co.com/0jbgWpCz/error.png"
            alt="d"
          />
          <p className="text-red-600 text-lg">
            No projects found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All Categories");
              setSelectedStatus("All Status");
              setSortBy("Sort By");
            }}
            className="mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-black rounded-lg transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;

Projects.propTypes = {
  showViewAll: PropTypes.bool,
};
