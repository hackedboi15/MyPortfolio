export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold text-center mb-12">
        <span className="text-gradient-cyan">Education</span>
      </h2>
      
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-emerald-400 to-fuchsia-400 transform -translate-x-1/2"></div>
        
        {/* B.Tech */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-400 transform -translate-x-1/2 -translate-y-2 z-10"></div>
          <div className="ml-8 md:ml-0 md:w-1/2 md:pr-8">
            <div className="p-6 surface rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20">
              <h3 className="text-lg font-bold text-cyan-400">B.Tech Mechanical Engineering</h3>
              <p className="text-slate-300 text-sm mt-1">IIITDM Kancheepuram</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-slate-400 text-sm">2021 – 2025</span>
                <span className="font-bold text-emerald-400">CGPA 7.19</span>
              </div>
            </div>
          </div>
        </div>

        {/* Class 12th */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 w-4 h-4 rounded-full bg-emerald-400 transform -translate-x-1/2 -translate-y-2 z-10"></div>
          <div className="mr-8 md:mr-0 md:w-1/2 md:ml-auto md:pl-8">
            <div className="p-6 surface rounded-xl border border-slate-700 hover:border-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20">
              <h3 className="text-lg font-bold text-emerald-400">Class 12th (CBSE)</h3>
              <p className="text-slate-300 text-sm mt-1">DAV Koylanagar, Dhanbad</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-slate-400 text-sm">2018 – 2020</span>
                <span className="font-bold text-emerald-400">95%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Class 10th */}
        <div className="relative">
          <div className="absolute left-1/2 w-4 h-4 rounded-full bg-fuchsia-400 transform -translate-x-1/2 -translate-y-2 z-10"></div>
          <div className="ml-8 md:ml-0 md:w-1/2 md:pr-8">
            <div className="p-6 surface rounded-xl border border-slate-700 hover:border-fuchsia-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-400/20">
              <h3 className="text-lg font-bold text-fuchsia-400">Class 10th (CBSE)</h3>
              <p className="text-slate-300 text-sm mt-1">SRK DAV Public School Suriya</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-slate-400 text-sm">2018</span>
                <span className="font-bold text-emerald-400">94%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
