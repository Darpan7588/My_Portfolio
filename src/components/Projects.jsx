import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'IntelX Forensics Website',
    description:
      'A comprehensive digital forensics platform that aggregates data from multiple sources, providing powerful search and analysis tools for investigators.',
    tags: ['React', 'TypeScript', 'PHP-Laravel', 'MySQL','Bootstrap'],
    emoji: <img src="/intelX.png" className="w-auto h-47" />,
    live: 'https://intelxforensics.com/',
    github: false,
    featured: true,
  },
  {
    title: 'My Portfolio Website',
    description:
      'A personal portfolio website showcasing my projects, skills, and experience.',
    tags: ['React', 'Tailwind CSS'],
    emoji: <img src="/portfolio.png" className="w-auto h-47" />,
    github: 'https://github.com/Darpan7588/My_Portfolio',
    live: 'https://my-portfolio-one-kappa-57.vercel.app/',
    featured: false,
  },
  {
    title: 'KhabarNow News Application',
    description:
      'A real-time news application that pulls headlines from various sources, allowing users to customize their feed and receive instant updates on breaking news.',
    tags: ['React', 'Tailwind'],
    emoji: <img src="/khabar.png" className="w-auto h-47" />,
    github: 'https://github.com/Darpan7588/KhabarNow-NewsApplication',
    featured: true,
  },
  {
    title: 'Text_Utils',
    description:
      'A versatile text manipulation tool that offers features like case conversion, word counting, and readability analysis, helping writers optimize their content for clarity and impact.',
    tags: ['React', 'Bootstrap'],
    emoji: <img src="/text-utils.png" className="w-auto h-47" />,
    github: 'https://github.com/Darpan7588/Text-Utils',
    live: 'https://text-utils-self-two.vercel.app/',
    featured: false,
  },
];

function ProjectCard({ project }) {
  const { title, description, tags, gradient, emoji, github, live, featured } = project;
  return (
    <div className={`group relative flex flex-col rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 ${featured ? 'md:col-span-2' : ''}`}>
      {featured && (
        <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-xs font-semibold z-10">
          Featured
        </span>
      )}
      {/* Card header */}
      <div className={`h-36 ${featured ? 'md:h-48' : ''} bg-gradient-to-br ${gradient} flex items-center justify-center text-6xl`}>
        {emoji}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 rounded-md bg-gray-800 text-gray-400 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={github}
            className="flex items-center gap-1.5 text-gray-400 hover:text-violet-400 transition-colors text-sm font-medium"
            aria-label="GitHub"
          >
            <Github size={15} /> Source
          </a>
          {live && (
            <a
              href={live}
              className="flex items-center gap-1.5 text-gray-400 hover:text-violet-400 transition-colors text-sm font-medium"
              aria-label="Live demo"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-linear-to-b from-gray-950 via-slate-900 to-gray-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-2">What I&apos;ve built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">My Projects</h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Darpan7588"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-700 text-gray-300 text-sm font-semibold hover:border-violet-500 hover:text-violet-400 transition-all duration-200"
          >
            <Github size={16} /> View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
