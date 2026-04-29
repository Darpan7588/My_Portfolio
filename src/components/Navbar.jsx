import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];
const resumeUrl = '/Darpan-Soni.pdf';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/90 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="text-2xl font-bold bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer select-none -ml-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          &lt;Darpan Soni /&gt;
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ label, id }) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => handleNav(id)}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-200 text-sm font-medium tracking-wide uppercase decoration-fuchsia-700"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3 -mr-50">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-gray-700 text-gray-300 text-sm font-semibold hover:border-violet-500 hover:text-violet-400 transition-all duration-200"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
            className="px-5 py-2 rounded-full border border-violet-500 text-violet-400 text-sm font-semibold hover:bg-violet-500 hover:text-white transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-300 hover:text-violet-400 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-t border-gray-800">
          <ul className="flex flex-col py-4">
            {links.map(({ label, id }) => (
              <li key={label}>
                <button
                  type="button"
                  onClick={() => handleNav(id)}
                  className="w-full text-left px-6 py-3 text-gray-300 hover:text-violet-400 hover:bg-gray-900 transition-colors text-sm font-medium uppercase tracking-wide"
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block w-full text-left px-6 py-3 text-gray-300 hover:text-violet-400 hover:bg-gray-900 transition-colors text-sm font-medium uppercase tracking-wide"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
