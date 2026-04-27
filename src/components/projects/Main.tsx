import React from "react";
import { ExternalLink, Filter } from "lucide-react";
import { Project } from "@/data/projects";

interface MainProps {
  activeProject: Project | null;
  filteredProjects: Project[];
  handleSelectProject: (project: Project) => void;
}

export function Main({
  activeProject,
  filteredProjects,
  handleSelectProject,
}: MainProps) {
  return (
    <section className="flex-1 flex flex-col p-4 md:p-8 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-slate-100 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 ">
      {/* Active Project Viewer */}
      {activeProject ? (
        <>
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {activeProject.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm hidden sm:block">
                {activeProject.shortDescription}
              </p>
            </div>
            <div className="flex space-x-2">
              <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                {activeProject.type}
              </span>
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex items-center hover:bg-emerald-200 dark:hover:bg-emerald-500/30 transition"
              >
                External <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Frame viewer */}
          <div className="flex-1 w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700  overflow-hidden relative group flex flex-col shrink-0 mb-6 min-h-[45vh] ">
            {/* <div className="h-10 bg-slate-100 dark:bg-slate-700/50 border-b border-slate-300 dark:border-slate-600 flex items-center px-4 space-x-2 shrink-0">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 dark:bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 dark:bg-emerald-500/50"></div>
              </div>
              <div className="flex-1 text-[10px] text-slate-500 dark:text-slate-400 text-center font-mono truncate">{new URL(activeProject.url).hostname || 'preview-window.local'}</div>
            </div> */}

            {/* iframe container inside the sleek window */}
            <div className="flex-1 relative w-full  bg-slate-50 dark:bg-slate-900 overflow-hidden ">
              <iframe
                src={activeProject.url} // Dummy URL for iframe
                title={activeProject.title}
                sandbox="allow-scripts allow-same-origin"
                className="w-full h-full border-0 absolute inset-0 overflow-hidden"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Projects viewer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shrink-0">
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                  Tech Stack
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  {activeProject.technologies.join(", ")}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-purple-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                  Category
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {activeProject.type}
                </p>
              </div>
            </div>
            {/* Gallery list replaces the stat card to allow switching projects */}
            <div className="col-span-1 md:col-span-3 lg:col-span-1 flex items-center space-x-2 overflow-x-auto no-scrollbar p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm">
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  title={project.title}
                  className={`relative shrink-0 w-16 h-12 rounded overflow-hidden border transition-all ${activeProject?.id === project.id ? "border-blue-500 ring-1 ring-blue-500" : "border-slate-300 dark:border-slate-700 opacity-60 hover:opacity-100"}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Projects card viewer */}

        </>
      ) : (
        <div className="flex-1 flex flex-col min-h-full border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-900 items-center justify-center text-slate-500 border-dashed">
          <Filter className="w-12 h-12 mb-4 text-slate-300 dark:text-slate-700" />
          <p className="text-sm font-medium">
            Select a project or adjust filters.
          </p>
        </div>
      )}
    </section>
  );
}

/*           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shrink-0">
             <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Tech Stack</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{activeProject.technologies.join(', ')}</p>
                </div>
             </div>
             <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-purple-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Category</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{activeProject.type}</p>
                </div>
             </div>
             /* Gallery list replaces the stat card to allow switching projects */
/*             <div className="col-span-1 md:col-span-3 lg:col-span-1 flex items-center space-x-2 overflow-x-auto no-scrollbar p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm">
                {filteredProjects.map(project => (
                  <button 
                    key={project.id}
                    onClick={() => handleSelectProject(project)}
                    title={project.title}
                    className={`relative flex-shrink-0 w-16 h-12 rounded overflow-hidden border transition-all ${activeProject?.id === project.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-slate-300 dark:border-slate-700 opacity-60 hover:opacity-100'}`}
                  >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </button>
                ))}
             </div>
          </div> 
          */
