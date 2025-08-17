export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-cyan-400 via-emerald-400 to-fuchsia-500 animate-pulse"></div>
          <span className="font-extrabold tracking-tight text-gradient-cyan text-lg">
            Ankit<span className="text-white/70">.dev</span>
          </span>
        </a>
        <div className="hidden sm:flex gap-4 text-slate-300 text-sm">
          <a className="hover:text-white transition" href="#projects">Projects</a>
          <a className="hover:text-white transition" href="#experience">Experience</a>
          <a className="hover:text-white transition" href="#skills">Skills</a>
          <a className="hover:text-white transition" href="#education">Education</a>
          <a className="hover:text-white transition" href="#achievements">Achievements</a>
        </div>
        <a href="#contact" className="px-3 py-1.5 rounded-md btn-glow">
          Contact
        </a>
      </nav>
    </header>
  );
}
