// src/pages/Repositories.jsx
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const GITHUB_USERNAME = "Ahsan-1015";

export default function Repositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch repos:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="p-6 text-white">Loading repositories...</div>;

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Repositories</h2>
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
              <span>{repo.language}</span>
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
