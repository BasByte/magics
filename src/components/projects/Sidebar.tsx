import React from 'react';
import { X } from 'lucide-react';
import { Project } from '@/data/projects';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (val: boolean) => void;
  query: string;
  setQuery: (val: string) => void;
  clearQuery: () => void;
  selectedType: string;
  setSelectedType: (val: string) => void;
  types: string[];
  selectedTech: string;
  setSelectedTech: (val: string) => void;
  techOptions: string[];
  selectedDateFilter: string;
  setSelectedDateFilter: (val: string) => void;
  dates: string[];
  clearFilters: () => void;
  filteredProjects: Project[];
  activeProject: Project | null;
  handleSelectProject: (project: Project) => void;
}

export function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  query,
  setQuery,
  clearQuery,
  selectedType,
  setSelectedType,
  types,
  selectedTech,
  setSelectedTech,
  techOptions,
  selectedDateFilter,
  setSelectedDateFilter,
  dates,
  clearFilters,
  filteredProjects,
  activeProject,
  handleSelectProject
}: SidebarProps) {
  return (
    <aside className={`${isSidebarOpen ? 'fixed inset-0 z-50 bg-white/95 dark:bg-slate-950/95 p-6 backdrop-blur-sm' : 'hidden'} md:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-6 flex-shrink-0 overflow-y-auto custom-scrollbar`}>
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h2 className="text-sm font-semibold dark:text-white uppercase tracking-wider">Filters</h2>
        <button onClick={() => setIsSidebarOpen(false)} className="p-2"><X className="w-5 h-5" /></button>
      </div>

      <div className="mb-8">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Filters</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] block text-slate-500 dark:text-slate-400">Search</label>
              {(query) && (
                <button onClick={clearQuery} className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline">Clear</button>
              )}
            </div>
            <input 
              type="text" 
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs rounded p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-slate-200"
            />
          </div>

          <div>
            <label className="text-[11px] block text-slate-500 dark:text-slate-400 mb-1">Project Type</label>
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs rounded p-1.5 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              {types.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[11px] block text-slate-500 dark:text-slate-400 mb-1">Technologies</label>
            <select 
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs rounded p-1.5 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">All Technologies</option>
              {techOptions.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[11px] block text-slate-500 dark:text-slate-400 mb-1">Date</label>
            <select 
              value={selectedDateFilter}
              onChange={(e) => setSelectedDateFilter(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs rounded p-1.5 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Any Time</option>
              {dates.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-700/50">
            <label className="text-[11px] block text-slate-500 dark:text-slate-400 mb-2 font-semibold uppercase tracking-wider">Projects</label>
            <ul className="space-y-1">
              {filteredProjects.map(p => (
                <li key={p.id}>
                  <button 
                    onClick={() => {
                      handleSelectProject(p);
                      if (window.innerWidth < 1024) {
                        setIsSidebarOpen(false);
                      }
                    }}
                    className={`text-left text-xs w-full truncate cursor-pointer transition-colors ${activeProject?.id === p.id ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
                  >
                    {p.title}
                  </button>
                </li>
              ))}
              {filteredProjects.length === 0 && (
                <li className="text-xs text-slate-500 dark:text-slate-400">No projects found.</li>
              )}
            </ul>
          </div>
          
          {(selectedType || selectedTech || selectedDateFilter || query) && (
            <button 
              onClick={clearFilters}
              className="w-full py-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mt-2"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <div className="mt-auto p-4 bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-600/20 rounded-xl">
        <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">Need custom CSS?</p>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 mb-3">Specialized in modern, responsive components.</p>
        <a href="/contact" className="block text-center w-full bg-blue-600 text-white py-1.5 rounded text-xs font-semibold hover:bg-blue-700 transition">Get a Quote</a>
      </div>
    </aside>
  );
}
