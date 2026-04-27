"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { projectsData, getUniqueValues, Project } from '@/data/projects';
import { Filter, X, ExternalLink } from 'lucide-react';

import { Sidebar } from '@/components/projects/Sidebar';
import { Main } from '@/components/projects/Main';

function ProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const query = searchParams.get('q') || '';
  const selectedId = searchParams.get('selection');
  
  const setQuery = (newQuery: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newQuery) params.set('q', newQuery);
    else params.delete('q');
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearQuery = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('q');
    router.push(`${pathname}?${params.toString()}`);
  };

  const setSearchParamsForFilters = (updater: URLSearchParams | ((prev: URLSearchParams) => URLSearchParams)) => {
    let params: URLSearchParams;
    if (typeof updater === 'function') {
      params = updater(new URLSearchParams(searchParams.toString()));
    } else {
      params = updater;
    }
    router.push(`${pathname}?${params.toString()}`);
  };
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedTech, setSelectedTech] = useState<string>('');
  const [selectedDateFilter, setSelectedDateFilter] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const types = getUniqueValues('type') as string[];
  const techOptions = getUniqueValues('technologies') as string[];
  const dates = getUniqueValues('dateCompleted') as string[];

  // Sort dates descending
  dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  useEffect(() => {
    if (selectedId) {
      const project = projectsData.find(p => p.id === selectedId);
      if (project) {
        setActiveProject(project);
      }
    } else if (projectsData.length > 0 && !activeProject) {
       // Default to first project if none selected
      setActiveProject(projectsData[0]);
    }
  }, [selectedId]);

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(query.toLowerCase()) || 
                          project.description.toLowerCase().includes(query.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
    const matchesType = selectedType ? project.type === selectedType : true;
    const matchesTech = selectedTech ? project.technologies.includes(selectedTech) : true;
    const matchesDate = selectedDateFilter ? project.dateCompleted === selectedDateFilter : true;
    return matchesSearch && matchesType && matchesTech && matchesDate;
  });

  const clearFilters = () => {
    setSelectedType('');
    setSelectedTech('');
    setSelectedDateFilter('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('q');
    params.delete('selection');
    router.push(`${pathname}`);
  };

  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
    const params = new URLSearchParams(searchParams.toString());
    params.set('selection', project.id);
    router.push(`${pathname}?${params.toString()}`);
    // Scroll to top on mobile
    if (window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-1 flex overflow-hidden">
      
      {/* Mobile filter toggle */}
      <div className="md:hidden flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0">
        <h1 className="text-lg font-bold dark:text-white">Projects</h1>
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded text-xs font-semibold"
        >
          <Filter className="w-3.5 h-3.5" /> Filters
        </button>
      </div>

      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        query={query}
        setQuery={setQuery}
        clearQuery={clearQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        types={types}
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
        techOptions={techOptions}
        selectedDateFilter={selectedDateFilter}
        setSelectedDateFilter={setSelectedDateFilter}
        dates={dates}
        clearFilters={clearFilters}
        filteredProjects={filteredProjects}
        activeProject={activeProject}
        handleSelectProject={handleSelectProject}
      />

      <Main 
        activeProject={activeProject}
        filteredProjects={filteredProjects}
        handleSelectProject={handleSelectProject}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={<div className="flex-1 flex justify-center items-center py-20 min-h-screen text-slate-500">Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
