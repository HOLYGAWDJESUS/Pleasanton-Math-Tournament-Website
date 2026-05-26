import { NavLink } from 'react-router-dom';
import { Github } from 'lucide-react';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Format', path: '/#format' },
  { name: 'FAQ', path: '/#faq' },
  { name: 'Problems', path: '/problems' },
  { name: 'Results', path: '/results' },
  { name: 'Contact', path: 'mailto:hartmathcounts1@gmail.com' },
];

export function Footer() {
  return (
    <footer className="w-full backdrop-blur-md border-t border-white/10 mt-auto bg-black/95">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-10 py-12 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <span className="font-sans text-2xl font-bold text-inverse-primary">
              Pleasanton Math Tournament / PMT
            </span>
            <span className="font-sans text-surface-variant">
              hartmathcounts1@gmail.com
            </span>
          </div>
          <a href="https://github.com/HOLYGAWDJESUS/Pleasanton-Math-Tournament-Website" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-surface-variant hover:text-white transition-colors group" aria-label="GitHub">
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-mono text-sm">View on GitHub</span>
          </a>
        </div>
        <div className="flex flex-col items-center md:items-end gap-8 mt-2 md:mt-0">
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            {footerLinks.map((link) => (
              link.path.startsWith('mailto:') ? (
                <a
                  key={link.name}
                  href={link.path}
                  className="font-sans font-medium text-surface-variant hover:text-white transition-colors hover:underline"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="font-sans font-medium text-surface-variant hover:text-white transition-colors hover:underline"
                >
                  {link.name}
                </NavLink>
              )
            ))}
          </div>
          <div className="flex flex-col items-center md:items-end gap-1.5 text-xs text-surface-variant/60 font-mono text-center md:text-right">
            <span>&copy; {new Date().getFullYear()} Pleasanton Math Tournament. All rights reserved.</span>
            <span>Made with ❤️ by Shulin Lu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
