"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Search, Code2, Menu, X } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/projects?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAAQ', path:'/about'}
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="flex items-center space-x-8 ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 ">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">M</div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white italic">Magicss</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-md font-medium ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`transition-colors ${
                pathname === link.path ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="hidden md:flex items-center space-x-4 ">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-3 top-2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs rounded-full py-1.5 pl-8 pr-4 w-48 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-slate-200 transition-colors"
          />
        </form>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-yellow-500 transition-colors w-9 h-9 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {isMounted ? (theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4 text-slate-700" />) : <div className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center space-x-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-yellow-500 transition-colors w-9 h-9 flex items-center justify-center"
        >
          {isMounted ? (theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4 text-slate-700" />) : <div className="h-4 w-4" />}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-slate-700 dark:text-slate-300"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 absolute top-full left-0 right-0 px-6 py-4 space-y-4 shadow-lg">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs rounded-full py-2 pl-9 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-slate-200 transition-colors"
            />
          </form>
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium p-2 rounded-md ${
                  pathname === link.path
                    ? 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
