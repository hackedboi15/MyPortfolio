const SKILLS = [
  { name: "Java", emoji: "☕️" },
  { name: "Python", emoji: "🐍" },
  { name: "Dart", emoji: "🎯" },
  { name: "C", emoji: "💻" },
  { name: "C++", emoji: "🔵" },
  { name: "Spring Boot", emoji: "🟢" },
  { name: "Flutter", emoji: "📱" },
  { name: "React", emoji: "⚛️" },
  { name: "REST API", emoji: "🔗" },
  { name: "OpenAI API", emoji: "🧠" },
  { name: "HTML", emoji: "🌐" },
  { name: "CSS", emoji: "🎨" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "MySQL", emoji: "🗄️" },
  { name: "H2", emoji: "💾" },
  { name: "Git", emoji: "🔧" },
  { name: "Postman", emoji: "📬" },
  { name: "JUnit", emoji: "🧪" },
  { name: "uTest Silver", emoji: "🥈" },
  { name: "DSA", emoji: "🧮" },
  { name: "Manual Testing", emoji: "📝" },
  { name: "Automation", emoji: "🤖" },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>

      
      <div
        className="flex flex-wrap gap-4 py-8 justify-center"
        style={{
          background:
            "linear-gradient(100deg, rgba(34,211,238,0.08), rgba(16,185,129,0.08), rgba(236,72,153,0.08))",
          borderRadius: "2rem",
        }}
      >
        {SKILLS.map((skill, i) => (
          <span
            key={skill.name}
            className="flex items-center gap-2 font-semibold text-base sm:text-lg px-5 py-3 rounded-xl bg-slate-900/80 shadow-md border border-slate-700 hover:scale-105 transition-transform duration-200"
            style={{
             
              background: `linear-gradient(120deg,rgba(34,211,238,0.17),rgba(236,72,153,0.16) ${30 + i*7}%,rgba(16,185,129,0.15))`,
              color: "#f1f5f9",
              minWidth: "110px",
              justifyContent: "center",
            }}
          >
            <span className="text-xl">{skill.emoji}</span> {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
