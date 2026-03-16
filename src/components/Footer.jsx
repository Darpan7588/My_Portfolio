import { Github, Linkedin, X, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent select-none">
          &lt;Darpan Soni /&gt;
        </p>

        <p className="text-gray-600 text-sm flex items-center gap-1.5">
          Built using React &amp; Tailwind CSS
        </p>

        <div className="flex gap-4">
          {[
            { icon: Github, href: 'https://github.com/Darpan7588', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/darpan-soni', label: 'LinkedIn' },
            { icon: X, href: 'https://x.com/Darpannn1', label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-600 hover:text-violet-400 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-6 pt-6 border-t border-gray-900 text-center">
        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} Darpan Soni. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
