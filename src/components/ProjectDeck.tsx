import { motion } from "framer-motion";
import type { Project } from "../types";
import clsx from "clsx";

const EMOJI: Record<string, string> = {
  "Java": "☕️",
  "Spring Boot": "🟢",
  "REST API": "🔗",
  "SQL": "🗄️",
  "Python": "🐍",
  "Flask": "🧪",
  "JavaScript": "✨",
  "OpenAI API": "🧠",
  "NumPy": "📐",
  "pandas": "🐼",
  "React": "⚛️",
  "Tailwind": "🌈",
  "Chrome Extension": "🧩",
  "Docker": "🐳",
  "Redis": "⚡",
  "AWS": "☁️",
  "GitHub Actions": "🚀",
  "MicroServices": "🔄",
};

export function ProjectDeck({
  projects,
  onOpen
}: {
  projects: Project[];
  onOpen: (p: Project) => void;
}) {
  const center = Math.floor(projects.length / 2);

  return (
    
    <div className="relative flex justify-center py-20 px-8 perspective-1000 overflow-visible">
      {projects.map((p, i) => {
        const offset = i - center;
        let rotate = offset * 3.5;
        const tx = offset * 28;
        const ty = Math.abs(offset) * 2;
        const z = 100 - Math.abs(offset);
        const themeClass = `card-theme-${p.theme || "cyan"}`;

       
        const extraYOffset = p.id === 101 ? 8 : 0;
        if (p.id === 107) {
          rotate += 4;
        }

        return (
          <motion.button
            key={p.id}
            className="relative w-80 h-64 mx-0 outline-none focus-visible:ring-2 ring-cyan-400 group overflow-visible" 
            style={{ zIndex: z }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -22,
              scale: 1.065,
              rotateX: 3,
              rotateY: 6,
              boxShadow:
                "0 12px 35px 0 rgba(34,211,238,0.22),0 2px 15px 4px rgba(0,0,0,0.10)",
              filter: "brightness(1.09) saturate(1.13)",
            }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            onClick={() => onOpen(p)}
            aria-label={`Open ${p.title}`}
            layoutId={`card-${p.id}`}
          >
            <div
              className={clsx(
                "absolute inset-0 transition-border duration-200 group rounded-xl overflow-visible", 
                themeClass
              )}
              style={{
                transform: `translateX(${tx}px) translateY(${ty + extraYOffset}px) rotate(${rotate}deg)`,
              }}
            >
              <div className="p-4 text-left">
                <h3 className="text-lg font-bold group-hover:text-cyan-200 transition-colors duration-150">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm">{p.subtitle}</p>
                <p className="mt-3 text-slate-200 text-sm line-clamp-3">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.slice(0, 4).map((t, idx) => (
                    <motion.span
                      key={t}
                      className="badge-colorful cursor-pointer"
                      whileHover={{
                        scale: 1.15,
                        rotate: idx % 2 === 0 ? 6 : -6,
                        y: -5,
                        boxShadow: "0 3px 10px 0 rgba(34,211,238,0.15)",
                      }}
                      transition={{ type: "spring", stiffness: 270, damping: 16 }}
                      title={t}
                    >
                      {EMOJI[t] ? `${EMOJI[t]} ${t}` : t}
                    </motion.span>
                  ))}
                </div>
              </div>
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.18 }}
                style={{
                  background:
                    "radial-gradient(circle,rgba(34,211,238,0.13),transparent 77%)",
                }}
              />
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
