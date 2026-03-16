import {Shield,Search,Bug,Fingerprint,Globe,Code2,Palette,Server,Braces,Database,Terminal,Cpu,Cloud,GitBranch,Wrench,Box,} from 'lucide-react';

const floatingIconPositions = [
  { top: '16%', left: '10%' },
  { top: '22%', left: '74%' },
  { top: '64%', left: '18%' },
  { top: '70%', left: '72%' },
];

const categories = [
  {
    title: 'Cyber Security & Forensics',
    logos: [Shield, Search, Bug, Fingerprint],
    skills: [
      { name: 'Nmap' },
      { name: 'Wireshark' },
      { name: 'Digital Forensics' },
      { name: 'Metasploit' },
      { name: 'Burp Suite' },
      { name: 'Kali Linux' },
      { name: 'MobilEdit Forensics' },
      { name: 'Oxygen Forensics' },
      { name: 'Winhex' },
      { name: 'Ultdata for Android' },
    ],
  },
  {
    title: 'Web Development',
    logos: [Globe, Code2, Palette, Server],
    skills: [
      {name: 'HTML / CSS' },
      { name: 'React / Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      {name: 'Node.js / Express' },
      { name: 'Python / FastAPI' },
      { name: 'PostgreSQL' },
      {name: 'MySQL' },
    ],
  },
  {
    title: 'Programming Languages',
    logos: [Braces, Database, Terminal, Cpu],
    skills: [
      { name: 'JavaScript / TypeScript' },
      { name: 'Python' },
      { name: 'JAVA' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'DevOps & Tools',
    logos: [Cloud, GitBranch, Wrench, Box],
    skills: [
      { name: 'Docker' },
      { name: 'AWS / GCP' },
      { name: 'GitHub' },
      { name: 'Figma' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-linear-to-b from-gray-950 via-slate-900 to-gray-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16"> 
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-2">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Skills &amp; Expertise</h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {categories.map(({ title, skills, logos }) => (
            <div
              key={title}
              className="relative p-8 rounded-2xl bg-gray-950 border border-gray-800 hover:border-violet-500/30 transition-colors overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0">
                {logos.map((Logo, index) => (
                  <Logo
                    key={`${title}-logo-${index}`}
                    size={34}
                    strokeWidth={1.6}
                    className="absolute text-violet-300/15"
                    style={{
                      top: floatingIconPositions[index].top,
                      left: floatingIconPositions[index].left,
                      animation: `skillFloat ${6 + index * 0.8}s ease-in-out ${index * 0.35}s infinite`,
                    }}
                  />
                ))}
              </div>

              <h3 className="relative z-10 text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-linear-to-r from-violet-500 to-cyan-500" />
                {title}
              </h3>

              <div className="relative z-10 flex flex-wrap gap-2">
                {skills.map(({ name }) => (
                  <span
                    key={name}
                    className="px-3.5 py-1.5 rounded-full bg-gray-900/90 border border-gray-800 text-gray-300 text-sm font-medium hover:border-violet-500/50 hover:text-violet-400 transition-colors"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech icons strip */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm mb-6 uppercase tracking-widest">Technologies I use daily</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['MobilEdit','WinHex','KaliLinux','Nmap','BurpSuite','React', 'MySQL', 'Node.js', 'Python', 'Git'].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full border border-gray-800 bg-gray-950 text-gray-400 text-sm hover:border-violet-500/50 hover:text-violet-400 hover:bg-violet-500/5 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
