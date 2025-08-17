export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-6 text-slate-400 text-sm">
        © {new Date().getFullYear()} Ankit Kumar
      </div>
    </footer>
  );
}
