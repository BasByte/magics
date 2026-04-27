"use client";
import React from 'react';
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[10px] sm:text-xs text-slate-500 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>&copy; {currentYear} Magicss Portfolio. All rights reserved. Built with CSS expertise.</div>
      <div className="flex space-x-4 items-center">
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Twitter</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
        <span className="px-2 border-l border-slate-300 dark:border-slate-700">v2.4.0</span>
      </div>
    </footer>
  );
}
