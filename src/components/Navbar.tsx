import { Menu, Sun, Moon } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Format', path: '/#format' },
  { name: 'Schedule', path: '/#schedule' },
  { name: 'Past Problems', path: '/problems' },
  { name: 'Results', path: '/results' },
  { name: 'FAQ', path: '/#faq' },
  { name: 'Join Our Team', path: '/about#volunteer' },
];

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 backdrop-blur-md border border-[var(--color-nav-border)] shadow-lg rounded-full transition-all duration-300 ease-in-out bg-[var(--color-nav-bg)] px-6 py-3">
      <div className="flex justify-between items-center w-full">
        {/* Brand */}
        <NavLink to="/" className="font-sans font-bold text-xl text-primary-fixed-dim tracking-tight">
          PMT
        </NavLink>

        {/* Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-sans px-2 py-1 rounded-lg transition-colors whitespace-nowrap ${
                  isActive && !link.path.includes('#')
                    ? 'text-primary-fixed-dim font-bold border-b-2 border-primary-fixed-dim hover:bg-primary-fixed-dim/5'
                    : 'text-surface-variant hover:text-primary-fixed-dim hover:bg-primary-fixed-dim/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Trailing Action */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-[var(--color-toggle-bg)] border border-[var(--color-toggle-border)] text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] hover:bg-[var(--color-overlay-hover)] active:scale-95 transition-all duration-300 flex items-center justify-center overflow-hidden relative"
            aria-label="Toggle light/dark mode"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Sun className={`absolute w-5 h-5 transition-transform duration-500 text-yellow-300 ${isDarkMode ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />
              <Moon className={`absolute w-5 h-5 transition-transform duration-500 text-blue-200 ${isDarkMode ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}`} />
            </div>
          </button>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdsQx42Ub-TbnNINqzC06cVhh_Q2krulX-gdMjwTvYXTW2wXA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-inverse-primary text-on-primary-container font-mono text-sm font-medium rounded-full hover:bg-primary-fixed transition-colors shadow-sm"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-[var(--color-toggle-bg)] border border-[var(--color-toggle-border)] text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] hover:bg-[var(--color-overlay-hover)] active:scale-95 transition-all duration-300 flex items-center justify-center relative"
            aria-label="Toggle light/dark mode"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Sun className={`absolute w-5 h-5 transition-transform duration-500 text-yellow-300 ${isDarkMode ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />
              <Moon className={`absolute w-5 h-5 transition-transform duration-500 text-blue-200 ${isDarkMode ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}`} />
            </div>
          </button>
          <button aria-label="Open menu" className="text-surface-variant">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
