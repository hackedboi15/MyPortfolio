import { useEffect, useState } from "react";

const TAGLINES = [
  "Java/Spring Boot developer",
  "Builds fast backends", 
  "Crafts slick UIs",
  "AI tooling enthusiast",
  "DSA • Flutter • REST",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const full = TAGLINES[idx % TAGLINES.length];
    if (phase === "typing") {
      if (text.length < full.length) {
        const t = setTimeout(() => setText(full.slice(0, text.length + 1)), 40);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pausing"), 1200);
        return () => clearTimeout(t);
      }
    }
    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText(full.slice(0, text.length - 1)), 20);
        return () => clearTimeout(t);
      } else {
        setPhase("typing");
        setIdx((i) => i + 1);
      }
    }
    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 800);
      return () => clearTimeout(t);
    }
  }, [text, phase, idx]);

  return (
    <section className="relative overflow-hidden">
      {/* Animated background flare */}
      <div className="bg-flare"></div>
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32 relative">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-medium">Portfolio</p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-black leading-tight">
          <span className="text-white">Shape the</span>
          <br />
          <span className="text-gradient-cyan">future of code</span>
          <br />
          <span className="text-white">with Ankit</span>
        </h1>
        <p className="mt-4 text-emerald-300 font-semibold text-lg">
          {text}<span className="animate-pulse">|</span>
        </p>
        <p className="mt-6 text-slate-300 text-lg max-w-3xl leading-relaxed">
          Java/Spring Boot • DSA • React • Flutter • AI tooling. Previously Full Stack Mobile Developer at Ezage (Firebase, REST).
        </p>
        <div className="mt-8 flex gap-4">
          <a className="px-6 py-3 rounded-md btn-glow text-lg font-semibold" href="#projects">
            View Projects
          </a>
          <a className="px-6 py-3 rounded-md border border-slate-700 text-white hover:bg-slate-900/60 transition text-lg font-medium" href="#experience">
            Experience
          </a>
        </div>
        
        <div className="mt-8 text-slate-400">
          <p>
            Email:{" "}
            <a
              href="mailto:itsankitgupta1510@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition underline"
            >
              itsankitgupta1510@gmail.com
            </a>
            {" "}· Phone: +91 6205746793 {" "}
            {/* <a
              href="https://www.linkedin.com/in/itsankitgupta1510/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition underline"
            >
              linkedin-iamankit
            </a> */}
          </p>
        </div>
        <div className="mt-12 hr-gradient"></div>
      </div>
    </section>
  );
}
