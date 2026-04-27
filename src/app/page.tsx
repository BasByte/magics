import React from 'react';
import { projectsData } from '@/data/projects';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3); // Get top 3

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-900/50 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-blue-200/50 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-400 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
            Crafting the web with style
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white max-w-4xl">
            A Portfolio of My Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">CSS Creations</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl px-4">
            Welcome to Magicss. This is where code meets creativity. Explore interactive components, mind-bending layouts, and beautiful designs crafted meticulously with HTML and CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/projects" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-xs hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors">
              Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-8 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors">
              Hire Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400">A curated selection of my finest work.</p>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/20">
                      {project.type}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{project.dateCompleted}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow text-sm flex-1">{project.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/projects?selection=${project.id}`} className="mt-auto inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors">
                    View Demo <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center sm:hidden">
            <Link href="/projects" className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors">
              View all projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Pricing Plans</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Straightforward pricing for custom CSS and frontend development. Choose the model that works best for your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan 1 */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-sm flex flex-col">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Component Design</h3>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900 dark:text-white">
                $150
                <span className="ml-1 text-xl font-medium text-slate-500">/component</span>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Perfect for single complex elements like a custom button, card, or navigation bar.</p>
              <ul className="mt-8 space-y-4 flex-1 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex gap-3 items-center"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0"/> Custom CSS/SCSS</li>
                <li className="flex gap-3 items-center"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0"/> Fully Responsive</li>
                <li className="flex gap-3 items-center"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0"/> 1 Revision</li>
              </ul>
              <Link href="/contact" className="mt-8 block w-full rounded-lg bg-blue-50 dark:bg-slate-800 px-4 py-3 text-center text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-slate-700 transition">Get started</Link>
            </div>

            {/* Plan 2 */}
            <div className="rounded-2xl border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-slate-950 p-8 shadow-md relative flex flex-col scale-105 md:z-10">
              <div className="absolute top-0 right-6 transform -translate-y-1/2">
                <span className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Popular</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Landing Page</h3>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900 dark:text-white">
                $800
                <span className="ml-1 text-xl font-medium text-slate-500">/page</span>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">A beautiful, animated, and fully responsive landing page optimized for conversions.</p>
              <ul className="mt-8 space-y-4 flex-1 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex gap-3 items-center"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0"/> Semantic HTML & CSS</li>
                <li className="flex gap-3 items-center"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0"/> Interactive Animations</li>
                <li className="flex gap-3 items-center"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0"/> SEO Optimized Structure</li>
                <li className="flex gap-3 items-center"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0"/> 3 Revisions</li>
              </ul>
              <Link href="/contact" className="mt-8 block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition shadow-sm">Get started</Link>
            </div>

            {/* Plan 3 */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-sm flex flex-col">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Full Website</h3>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900 dark:text-white">
                $2500<span className="ml-1 text-xl font-medium text-slate-500">+</span>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Comprehensive site development including multiple pages and shared design systems.</p>
              <ul className="mt-8 space-y-4 flex-1 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex gap-3 items-center"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0"/> Up to 5 Pages</li>
                <li className="flex gap-3 items-center"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0"/> Custom Design System</li>
                <li className="flex gap-3 items-center"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0"/> Cross-browser Testing</li>
                <li className="flex gap-3 items-center"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0"/> Performance Optimization</li>
              </ul>
              <Link href="/contact" className="mt-8 block w-full rounded-lg bg-blue-50 dark:bg-slate-800 px-4 py-3 text-center text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-slate-700 transition">Contact for quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-transparent border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Client Reviews</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Don't just take my word for it. Here's what others have to say about my CSS craftsmanship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Review 1 */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="italic text-slate-600 dark:text-slate-400 mb-6 flex-1">"The attention to detail in the animations was outstanding. Our new product page converts 20% higher since the redesign. Highly recommended!"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">JD</div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">Jane Doe</div>
                  <div className="text-xs text-slate-500">Marketing Director, TechStart</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="italic text-slate-600 dark:text-slate-400 mb-6 flex-1">"Magicss completely transformed our clumsy component into a sleek, responsive, and performant masterpiece. The code is clean and easy to maintain."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">AS</div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">Alex Smith</div>
                  <div className="text-xs text-slate-500">Lead Develper, FinApp</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="italic text-slate-600 dark:text-slate-400 mb-6 flex-1">"Absolutely top-tier CSS work. They provided exactly what we needed within the tight deadline. A pleasure to work with, communication was fantastic."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-orange-500 flex items-center justify-center text-white font-bold">MR</div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">Maya Rodriguez</div>
                  <div className="text-xs text-slate-500">Creative Agency Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
