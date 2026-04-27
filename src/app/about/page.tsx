import React from 'react';
import { Monitor, Layout as LayoutIcon, Wand2, Paintbrush, Code, Lightbulb } from 'lucide-react';

export default function About() {
  const skills = [
    { name: "CSS3 / SCSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Animations (Keyframes & Transitons)", level: 85 },
    { name: "CSS Grid & Flexbox", level: 95 },
    { name: "HTML5 Semantic Markup", level: 98 },
    { name: "Responsive & Mobile-First Design", level: 90 }
  ];

  return (
    <div className="bg-transparent py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">About Me</h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm a Frontend Developer and UI Designer obsessed with what CSS can do. Transforming design files into pixel-perfect, performant code is my superpower.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Experience & Story */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">My Journey</h2>
            <div className="prose prose-gray dark:prose-invert">
              <p>
                My journey began with a simple curiosity to understand how websites were styled. What started as tweaking colors on existing templates quickly evolved into a deep dive into the underlying architecture of CSS.
              </p>
              <p>
                Over the past 5 years, I've worked with numerous agencies and startups, helping them build robust design systems and scalable frontend architectures. My philosophy is simple: write less CSS, but make it do more.
              </p>
              <p>
                I specialize in <strong>CSS architecture</strong>, ensuring that large-scale websites remain maintainable. From complex grid layouts to performant 60fps animations without JavaScript, I push the boundaries of what native CSS can achieve.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Senior UI Developer</h4>
                    <span className="text-sm font-mono text-slate-500">2021 - Present</span>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">TechFlow Solutions</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Spearheaded the migration to a modern utility-first CSS framework and established internal design tokens.</p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Frontend Engineer</h4>
                    <span className="text-sm font-mono text-slate-500">2018 - 2021</span>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Creative Digital Agency</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Developed fully responsive promotional websites and animated landing pages for Fortune 500 clients.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Technical Skills</h2>
              <div className="space-y-4 text-sm font-medium">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-slate-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5">
                      <div 
                        className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">What I do best</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4">
                  <LayoutIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Layout Architecture</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Mastery of Grid and Flexbox for complex, intrinsically responsive interfaces.</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                  <Wand2 className="w-6 h-6 text-purple-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Animations</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Silky smooth interactions utilizing hardware-accelerated CSS properties.</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                  <Monitor className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Responsive Design</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Mobile-first methodology ensuring perfection across all device dimensions.</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                  <Paintbrush className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Design Systems</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Transforming variables and tokens into scalable stylistic foundations.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
