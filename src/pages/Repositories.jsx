// src/pages/Repositories.jsx
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const GITHUB_USERNAME = "Ahsan-1015";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export default function Repositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`,
      {
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setError(data.message || "Unexpected error");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch repositories.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="p-6 text-white">Loading repositories...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4"> Public Repositories</h2>
      <div className="space-y-4">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="block p-4 border border-gray-700 rounded hover:bg-gray-800"
          >
            <h3 className="text-lg font-semibold">{repo.name}</h3>
            <p className="text-sm text-gray-400">
              {repo.description || "No description"}
            </p>
            <div className="flex justify-between text-xs mt-2 text-gray-400">
              <span className="flex items-center gap-1">
                {/* Colored Dot */}
                <span
                  className={`
                inline-block rounded-full
                ${repo.language === "HTML" ? "bg-orange-500 w-3 h-3" : ""}
                ${repo.language === "JavaScript" ? "bg-yellow-400 w-3 h-3" : ""}
              `}
                ></span>
                {repo.language}
              </span>
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                {repo.stargazers_count}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
