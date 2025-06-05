
import { useState, useEffect } from "react";
import { Star, GitFork, Eye } from "lucide-react";

export const GitHubStats = () => {
  const [stats, setStats] = useState({
    publicRepos: 0,
    followers: 0,
    following: 0
  });

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch GitHub user stats
    fetch('https://api.github.com/users/getsettalk')
      .then(response => response.json())
      .then(data => {
        setStats({
          publicRepos: data.public_repos || 0,
          followers: data.followers || 0,
          following: data.following || 0
        });
      })
      .catch(error => console.log('GitHub API error:', error));

    // Fetch top repositories
    fetch('https://api.github.com/users/getsettalk/repos?sort=stars&per_page=6')
      .then(response => response.json())
      .then(data => {
        setRepos(data || []);
      })
      .catch(error => console.log('GitHub repos API error:', error));
  }, []);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            GitHub Contributions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in">
            <div className="text-3xl font-bold text-purple-400 mb-2">{stats.publicRepos}</div>
            <div className="text-white/70">Public Repos</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold text-pink-400 mb-2">{stats.followers}</div>
            <div className="text-white/70">Followers</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-blue-400 mb-2">{stats.following}</div>
            <div className="text-white/70">Following</div>
          </div>
        </div>

        {/* Top Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.slice(0, 6).map((repo, index) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{repo.name}</h3>
              <p className="text-white/70 text-sm mb-4 line-clamp-2">{repo.description || "No description available"}</p>
              
              <div className="flex items-center justify-between text-sm text-white/60">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star size={14} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork size={14} />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
                {repo.language && (
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                    {repo.language}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
