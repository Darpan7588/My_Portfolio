import { ShieldCheck, Award, Trophy, Users } from 'lucide-react';

const certifications = [
  { name: 'Deloitte Cyber Job Simulation', issuer: 'Forage' },
  { name: 'Hands on Penetration Testing', issuer: 'Infosys SpringBoard' },
  { name: 'Jr. Penetration Tester & Pre Security', issuer: 'TryHackMe' },
  { name: 'Certificate in Public Speaking', issuer: 'NPTEL' },
  { name: 'Published Research on Digital Forensics', issuer: 'IJSREM Journal - Final Year Project' },
];

const achievements = [
  {
    title: 'Top 2% Globally on TryHackMe',
    description: 'Completed 150+ rooms and earned 16 badges across penetration testing, SOC, web security, and digital forensics.',
  },
  {
    title: '50+ PortSwigger Labs Completed',
    description: 'Completed labs covering SQL Injection, XSS, Authentication, Access Control, SSRF, and other OWASP Top 10 vulnerabilities.',
  },
];

const activities = [
  {
    role: 'Ex-Treasurer & Event Co-Head',
    organization: 'Sentinel Club',
    details: 'Organized a 6-hour City Level Hackathon (RSOC 2025) as Event Co-Head. Conducted Cyber Security Awareness campaigns.',
  },
  {
    role: 'NGO Intern & Team Leader',
    organization: 'HEEDS Foundation',
    details: 'Worked as an intern and NGO team leader for a 1-month community support campaign.',
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="relative py-24 bg-transparent font-mono overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-16 border-b border-emerald-950/60 pb-6">
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-1">// 04 // CLEARANCE_LOGS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">SECURITY_CLEARANCE_DOCKET</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: Certifications (Green Theme) */}
          <div className="p-6 rounded-sm bg-slate-950/30 border border-emerald-950/80 hover:border-emerald-500/30 transition-all duration-300 relative border-l-4 border-l-emerald-500">
            <div className="flex items-center justify-between border-b border-gray-900 pb-3 mb-6 text-[10px] text-emerald-500">
              <span className="flex items-center gap-1"><Award size={12} /> SEC_CLASS: AA</span>
              <span>DOCKET // 04-A</span>
            </div>
            
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400" />
              CERTIFICATIONS
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-3 rounded bg-slate-950/50 border border-gray-900 hover:border-emerald-950 transition-colors">
                  <p className="text-xs font-bold text-gray-200 leading-snug">&gt; {cert.name}</p>
                  <p className="text-[10px] text-gray-500 mt-1 font-semibold">ISSUER: {cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Achievements (Teal Theme) */}
          <div className="p-6 rounded-sm bg-slate-950/30 border border-emerald-950/80 hover:border-emerald-500/30 transition-all duration-300 relative border-l-4 border-l-teal-500">
            <div className="flex items-center justify-between border-b border-gray-900 pb-3 mb-6 text-[10px] text-teal-500">
              <span className="flex items-center gap-1"><Trophy size={12} /> SEC_CLASS: S</span>
              <span>DOCKET // 04-B</span>
            </div>
            
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-400" />
              ACHIEVEMENTS
            </h3>

            <div className="space-y-4">
              {achievements.map((ach, index) => (
                <div key={index} className="p-3 rounded bg-slate-950/50 border border-gray-900 hover:border-teal-950 transition-colors">
                  <h4 className="text-xs font-bold text-gray-200 leading-snug flex items-center gap-1">
                    <ShieldCheck size={12} className="text-teal-400" />
                    {ach.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Leadership (Warning Amber Theme) */}
          <div className="p-6 rounded-sm bg-slate-950/30 border border-emerald-950/80 hover:border-emerald-500/30 transition-all duration-300 relative border-l-4 border-l-amber-500">
            <div className="flex items-center justify-between border-b border-gray-900 pb-3 mb-6 text-[10px] text-amber-500">
              <span className="flex items-center gap-1"><Users size={12} /> SEC_CLASS: A</span>
              <span>DOCKET // 04-C</span>
            </div>
            
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-400" />
              LEADERSHIP &amp; ACTS
            </h3>

            <div className="space-y-4">
              {activities.map((act, index) => (
                <div key={index} className="p-3 rounded bg-slate-950/50 border border-gray-900 hover:border-amber-950 transition-colors">
                  <h4 className="text-xs font-bold text-gray-200 leading-snug">&gt; {act.role}</h4>
                  <p className="text-[9px] text-amber-400 mt-1 font-bold">{act.organization.toUpperCase()}</p>
                  <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">{act.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
