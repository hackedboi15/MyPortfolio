import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "../types";

export function ProjectDrawer({
  project,
  onClose
}: {
  project?: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            className="fixed right-0 top-0 h-full w-full sm:w-[520px] bg-slate-950 border-l border-slate-800 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            aria-label="Project details"
          >
            <div className="p-6">
              <button className="text-slate-300" onClick={onClose} aria-label="Close project details">
                Close
              </button>
              <h2 className="mt-4 text-2xl font-bold">{project.title}</h2>
              <p className="text-slate-400">{project.subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-slate-200">{project.description}</p>
              <ul className="mt-4 list-disc list-inside text-slate-300">
                {project.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
              </ul>
              <div className="mt-6 flex gap-3">
                {project.repoUrl && (
                  <a className="px-3 py-2 rounded bg-cyan-600 text-white" href={project.repoUrl} target="_blank" rel="noreferrer">
                    Repository
                  </a>
                )}
                {project.liveUrl && (
                  <a className="px-3 py-2 rounded bg-emerald-600 text-white" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
