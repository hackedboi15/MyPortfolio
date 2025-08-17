
export default function SocialProfiles() {
  const profiles = [
    {
      name: "LinkedIn",
      icon: "💼",
      username: "linkedin-iamankit",
      url: "https://www.linkedin.com/in/linkedin-iamankit",
      color: "from-blue-600 to-blue-800",
      followers: "Connect"
    },
    {
      name: "GitHub",
      icon: "🐱",
      username: "ankitgupta",
      url: "https://github.com/ankitgupta", 
      color: "from-gray-600 to-gray-800",
      followers: "Repositories"
    },
    {
      name: "LeetCode",
      icon: "🧩",
      username: "ankitgupta",
      url: "https://leetcode.com/ankitgupta",
      color: "from-yellow-600 to-orange-600",
      followers: "Problems"
    },
    {
      name: "Codeforces",
      icon: "⚡",
      username: "ankitgupta",
      url: "https://codeforces.com/profile/ankitgupta",
      color: "from-red-600 to-pink-600",
      followers: "Rating"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-extrabold text-center mb-8">
        <span className="text-gradient-cyan">Connect</span>{" "}
        <span className="text-slate-300">with me</span>
      </h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 px-6 py-4 rounded-xl border border-slate-700 hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r ${profile.color} hover:shadow-lg`}
            style={{ minWidth: "200px" }}
          >
            <div className="text-2xl">{profile.icon}</div>
            <div className="flex-1 text-white">
              <h3 className="font-bold text-sm">{profile.name}</h3>
              <p className="text-xs opacity-90">@{profile.username}</p>
              <p className="text-xs opacity-75">{profile.followers}</p>
            </div>
            <div className="text-white/60 group-hover:text-white transition-colors">
              →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
