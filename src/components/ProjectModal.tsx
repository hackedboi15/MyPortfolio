import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "../types";
import { useEffect, useRef } from "react";
import * as confetti from "canvas-confetti";

export default function ProjectModal({
  project,
  onClose
}: {
  project?: Project;
  onClose: () => void;
}) {
  const fired = useRef(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (project?.featured && !fired.current) {
      fired.current = true;
      const confettiInstance = confetti.default || confetti;
      confettiInstance({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.3 }
      });
      const end = Date.now() + 600;
      const interval = setInterval(() => {
        confettiInstance({
          particleCount: 20,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.4 }
        });
        confettiInstance({
          particleCount: 20,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.4 }
        });
        if (Date.now() > end) clearInterval(interval);
      }, 120);
    }
    if (!project) fired.current = false;
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            className="fixed inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full"
                 style={{ background: "radial-gradient(circle, rgba(34,211,238,0.18), transparent 60%)", filter: "blur(20px)" }} />
            <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full"
                 style={{ background: "radial-gradient(circle, rgba(139,92,246,0.16), transparent 60%)", filter: "blur(22px)" }} />
          </motion.div>

          <motion.div
            className="fixed inset-0 flex items-center justify-center px-4 py-8"
            initial={{ scale: 0.9, opacity: 0, rotateX: -8 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.95, opacity: 0, rotateX: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <motion.div className="relative max-w-2xl w-full" layoutId={`card-${project.id}`}>
              <div className="absolute -inset-[2px] rounded-2xl"
                   style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.5), rgba(16,185,129,0.5), rgba(139,92,246,0.5))", filter: "blur(12px)" }} />
              <div className="relative rounded-2xl border border-slate-700 bg-slate-950/90 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="px-5 sm:px-6 py-4 border-b border-slate-800 flex items-start gap-3">
                  <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-cyan-400 via-emerald-400 to-fuchsia-500"></div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-extrabold">{project.title}</h2>
                    <p className="text-slate-400 text-sm">{project.subtitle}</p>
                  </div>
                  <button
                    className="text-slate-300 hover:text-white transition"
                    onClick={onClose}
                    aria-label="Close"
                    title="Close (Esc)"
                  >
                    ✕
                  </button>
                </div>

                <div className="px-5 sm:px-6 py-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="badge-colorful">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-slate-200">{project.description}</p>

                  {project.highlights?.length > 0 && (
                    <ul className="mt-4 list-disc list-inside text-slate-200/90 space-y-1">
                      {project.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                    </ul>
                  )}

                  <div className="mt-6 flex gap-3 flex-wrap">
                    {project.repoUrl && (
                      <a className="px-3 py-2 rounded-md btn-glow"
                         href={project.repoUrl} target="_blank" rel="noreferrer">
                        Repository
                      </a>
                    )}
                    {project.liveUrl && (
                      <a className="px-3 py-2 rounded-md border border-slate-700 hover:bg-slate-900/60 transition"
                         href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
