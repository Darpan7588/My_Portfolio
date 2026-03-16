const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Delivered', value: '40+' },
  { label: 'Happy Clients', value: '25+' },
  { label: 'Open Source Contributions', value: '15+' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-linear-to-b from-gray-950 via-slate-900 to-gray-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar / visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-70 h-85 rounded-3xl bg-linear-to-br from-violet-600 to-cyan-600 p-1 -mt-20 -ml-50">
                <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center overflow-hidden">
                  {/* Replace the emoji below with an <img> tag pointing to your photo */}
                  <span className="text-9xl select-none">
                    <img src="/passport.png" alt="Darpan Soni" className="w-full h-full object-cover" />
                  </span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="w-50 absolute -bottom-5 -right-5 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-xs text-gray-500">Currently</p>
                <p className="text-sm font-semibold text-violet-400">Cyber Security & Digital Forensics Intern</p>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              A passionate Cyber Security Enthusiast and Frontend Developer based in{' '}
              <span className="text-violet-400">Nagpur, India</span>
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a Cyber Security and Forensics Intern keeping a keen interest in Frontend Developent with knowledge of DEVOPS with a love for turning complex problems into simple,
                beautiful, and intuitive solutions. I love building modern web applications using React, Node.js.
              </p>
              <p>
                When I&apos;m not pushing pixels or debugging code, you&apos;ll find me exploring
                various Cyber Security topics and techniques or reading up on the latest developments in the field.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Cyber Security','Nmap', 'Wireshark','Digital Forensics', 'React', 'Node.js', 'PostgreSQL', 'MySQL' ].map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full bg-gray-900 border border-gray-800 text-gray-300 text-sm font-medium hover:border-violet-500/50 hover:text-violet-400 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
