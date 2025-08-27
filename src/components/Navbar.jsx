import { useEffect, useState } from "react";
import { FaGithub, FaPlus, FaRegBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-2 py-1 rounded hover:bg-gray-800 ${
      isActive ? "border-b-2 border-orange-500" : ""
    }`;

  const [repoCount, setRepoCount] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Ahsan-1015", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error or rate limit exceeded");
        return res.json();
      })
      .then((data) => setRepoCount(data.public_repos))
      .catch((err) => {
        console.error(err);
        setRepoCount(null);
      });
  }, []);

  return (
    <nav className="bg-[#0d1117] text-white border-b border-gray-800 px-4 py-4 flex justify-between items-center w-full fixed top-0 z-50 text-sm shadow-sm">
      {/* Left Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <IoMdMenu className="text-xl p-1 border rounded-lg h-8 w-8" />
          <FaGithub className="text-2xl w-8 h-8" />
          <h1 className="text-xl font-semibold">Ahsan-1015</h1>
        </div>
        <div className="hidden md:flex gap-3 ml-3">
          <NavLink
            to="/"
            className={linkClass + " p-1 flex items-center gap-2"}
          >
            <IoBookOutline className="w-5 h-5 text-gray-300" />
            Overview
          </NavLink>

          <NavLink to="/Repositories" className={linkClass}>
            Repositories
            {repoCount !== null && (
              <span className="ml-1 bg-orange-500 text-white rounded-full px-2 py-0.5 text-xs font-bold">
                {repoCount}
              </span>
            )}
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Stars
          </NavLink>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Type / to search"
            className="bg-[#010409] border border-gray-700 text-sm px-3 py-1 rounded-md pl-8 focus:outline-none"
          />
          <button className="absolute left-2 top-1.5 text-gray-400 pointer-events-auto z-10">
            <FiSearch className="text-base" />
          </button>
        </div>
        <FaRegBell className="text-lg" />
        <FaPlus className="text-lg" />
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600">
          <img
            src="https://media.gettyimages.com/id/2208522519/photo/riyadh-saudi-arabia-cristiano-ronaldo-of-al-nassr-looks-on-prior-to-the-saudi-pro-league.jpg?s=612x612&w=0&k=20&c=MEitxPjqREuMXVIpLrVjYumuEozAANGh04ijeH_tjjI="
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
