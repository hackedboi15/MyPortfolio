export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold">
        <span className="text-gradient-cyan">Experience</span>
      </h2>
      
      <div className="mt-8">
        <div className="surface p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-cyan-400">Full Stack Mobile Developer</h3>
              <p className="text-slate-300 font-medium">Ezage – The One App</p>
            </div>
            <p className="text-slate-400 text-sm mt-2 sm:mt-0 font-medium">Aug 2023 – Dec 2023</p>
          </div>
          
          <ul className="list-disc list-inside text-slate-200 space-y-2">
            <li>Developed cross-platform mobile application using <span className="text-emerald-400 font-semibold">Flutter</span> with <span className="text-cyan-400 font-semibold">Firebase</span> integration for real-time user data management and authentication</li>
            <li>Collaborated with development team to build and maintain complete application architecture</li>
            <li>Implemented efficient state management using <span className="text-emerald-400 font-semibold">Provider pattern</span> to optimize application performance</li>
            <li>Designed and integrated multiple UI screens with <span className="text-cyan-400 font-semibold">RESTful API</span> endpoints for seamless user experience</li>
          </ul>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="badge-colorful">Flutter</span>
            <span className="badge-colorful">Firebase</span>
            <span className="badge-colorful">REST APIs</span>
            <span className="badge-colorful">Provider</span>
            <span className="badge-colorful">Mobile Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}
