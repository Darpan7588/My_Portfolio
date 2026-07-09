import { Calendar, ShieldAlert } from 'lucide-react';

const experiences = [
  {
    role: 'Cyber Security Intern',
    company: 'CodeLancer Cyber Security and Forensics Pvt. Ltd.',
    period: 'DEC 2025 - JUN 2026',
    logId: 'LOG_01_WORK_INTERN',
    description:
      'Gained hands-on experience in mobile forensics, data acquisition, forensic imaging, evidence analysis, hash verification, and forensic reporting. Conducted VAPT and bug bounty assessments using Burp Suite, OSINT techniques, and AI-assisted security tools to identify vulnerabilities and secure systems.',
  },
  {
    role: 'Remote Intern',
    company: 'YBI Foundation',
    period: 'JUN 2025 (1 MONTH)',
    logId: 'LOG_02_WORK_INTERN',
    description:
      'Gained exposure to Generative AI, prompt engineering, and AI-assisted automation concepts for cybersecurity applications through a remote internship.',
  },
  {
    role: 'Cyber Security Intern',
    company: 'Cyber Secure India',
    period: 'DEC 2024 (3 MONTHS)',
    logId: 'LOG_03_WORK_INTERN',
    description:
      'Obtained hands-on experience in cybersecurity operations, threat intelligence, digital forensics, and ethical hacking through practical labs, threat analysis, and forensic investigations.',
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering (Cyber Security)',
    institution: 'G. H. Raisoni College of Engineering and Management, Nagpur',
    period: '2022 - 2026',
    score: '8.58 CGPA',
    logId: 'LOG_04_ACADEMIC_DOCKET',
    description:
      'Focusing on Core Computer Science principles alongside specialized training in Cyber Security, Forensic Analysis, Cryptography, and Network Defense.',
  },
];

export default function ExperienceEducation() {
  return (
    <section id="experience" className="relative py-24 bg-transparent font-mono overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-16 border-b border-emerald-950/60 pb-6">
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-1">// 02 // TIMELINE_LOGS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">OPERATIONAL_CHRONOLOGY</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-xl font-bold text-emerald-400">// WORK_EXPERIENCE_LOGS</h3>
            </div>

            <div className="relative pl-6 ml-4 space-y-12">
              {/* Timeline Track Line (Green) */}
              <div className="absolute left-[3px] top-1.5 bottom-1.5 w-[1px] bg-emerald-800" />

              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot (Hex Node) */}
                  <div className="absolute -left-[28px] top-1 w-3.5 h-3.5 bg-gray-950 border border-emerald-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
                    <div className="w-1 h-1 bg-emerald-400" />
                  </div>

                  {/* Log Card */}
                  <div className="p-5 rounded-sm bg-slate-950/30 border border-emerald-950/80 hover:border-emerald-500/35 transition-all duration-300">
                    <div className="flex justify-between items-center text-[10px] text-emerald-500 mb-3">
                      <span>[{exp.logId}]</span>
                      <span className="flex items-center gap-1"><Calendar size={10} /> {exp.period}</span>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      &gt; {exp.role}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 mb-3">{exp.company}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-xl font-bold text-amber-500">// ACADEMIC_LOGS</h3>
            </div>

            <div className="relative pl-6 ml-4 space-y-12">
              {/* Timeline Track Line (Amber) */}
              <div className="absolute left-[3px] top-1.5 bottom-1.5 w-[1px] bg-amber-800" />

              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot (Hex Node) */}
                  <div className="absolute -left-[28px] top-1 w-3.5 h-3.5 bg-gray-950 border border-amber-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-300">
                    <div className="w-1 h-1 bg-amber-400" />
                  </div>

                  {/* Log Card */}
                  <div className="p-5 rounded-sm bg-slate-950/30 border border-amber-950/80 hover:border-amber-500/35 transition-all duration-300">
                    <div className="flex justify-between items-center text-[10px] text-amber-500 mb-3">
                      <span>[{edu.logId}]</span>
                      <span className="flex items-center gap-1"><Calendar size={10} /> {edu.period}</span>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      &gt; {edu.degree}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 mb-2">{edu.institution}</p>
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-950/30 border border-amber-800/50 px-2 py-0.5 rounded-sm mb-3">
                      <ShieldAlert size={10} /> SCORE: {edu.score}
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
