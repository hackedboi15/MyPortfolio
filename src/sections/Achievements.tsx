export default function Achievements() {
  const achievements = [
    {
      title: "E-Summit ",
      description: "Lead the first ever E-Summit of IIITDM Kancheepuram",
      icon: "🏆",
      color: "emerald"
    },
    {
      title: "Tech Fest Coordinator",
      description: "Coordinated IIIT Technical fest Vashisht ('22–'23)",
      icon: "🎯",
      color: "cyan"
    },
    {
      title: "Hackathon Participant",
      description: "Participated in Smart India Hackathon",
      icon: "💻",
      color: "fuchsia"
    },
    {
      title: "Music Club Coordinator",
      description: "Coordinated in Music Club of IIIT",
      icon: "🎵",
      color: "amber"
    }
  ];

  const responsibilities = [
    {
      title: "Leadership",
      description: "Led Sponsorship, QMS, and Hospitality teams for E-Summit'24",
      icon: "👑",
      color: "emerald"
    },
    {
      title: "Workshops",
      description: "Conducted workshops on Entrepreneurship & Management",
      icon: "🚀",
      color: "cyan"
    },
    {
      title: "Financial Educator",
      description: "Organized sessions on Stock Market and Financial Management",
      icon: "📈",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500 to-teal-500 hover:shadow-emerald-400/30",
      cyan: "from-cyan-500 to-blue-500 hover:shadow-cyan-400/30",
      fuchsia: "from-fuchsia-500 to-pink-500 hover:shadow-fuchsia-400/30",
      amber: "from-amber-500 to-orange-500 hover:shadow-amber-400/30",
      purple: "from-purple-500 to-indigo-500 hover:shadow-purple-400/30"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold text-center mb-12">
        <span className="text-gradient-cyan">Achievements</span>{" "}
        <span className="text-slate-300">&</span>{" "}
        <span className="text-gradient-emerald">Leadership</span>
      </h2>

      {/* Achievements */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center">🏆 Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`group relative p-6 rounded-xl border border-slate-700 hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-2xl ${getColorClasses(achievement.color)}`}
              style={{
                background: `linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.6))`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-slate-300 mt-1 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Positions of Responsibility */}
      <div>
        <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">👑 Leadership Roles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {responsibilities.map((resp, idx) => (
            <div
              key={idx}
              className={`group relative p-6 rounded-xl border border-slate-700 hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-2xl ${getColorClasses(resp.color)}`}
              style={{
                background: `linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.6))`
              }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{resp.icon}</div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors mb-2">
                  {resp.title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {resp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
