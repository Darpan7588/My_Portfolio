import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, X } from 'lucide-react';

const resumeUrl = '/Darpan-Soni-Resume.pdf';

const socials = [
  { icon: Github, href: 'https://github.com/Darpan7588', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/darpan-soni', label: 'LinkedIn' },
  { icon: X, href: 'https://x.com/Darpannn1', label: 'Twitter' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // 🔌 Replace this with your actual form submission logic (e.g., EmailJS / API)
    console.log('Form submitted:', form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 bg-linear-to-b from-gray-950 via-slate-900 to-gray-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-2">Reach out</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto">
            Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info panel */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Let&apos;s build something great together</h3>
              <p className="text-gray-500 leading-relaxed">
                I&apos;m currently open to freelance work and full-time opportunities. If you have a
                project that needs a skilled developer, I&apos;d love to hear about it!
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'darpans760@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 7588737402' },
                { icon: MapPin, label: 'Location', value: 'Nagpur, Maharashtra, India' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-gray-950 border border-gray-800">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <Icon size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide">{label}</p>
                    <p className="text-gray-300 text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-xl border border-gray-800 flex items-center justify-center text-gray-400 hover:border-violet-500 hover:text-violet-400 hover:bg-violet-500/5 transition-all"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
              
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handle}
                  placeholder="Your Name"
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-200 text-sm placeholder-gray-700 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handle}
                  placeholder="your.email@example.com"
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-200 text-sm placeholder-gray-700 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handle}
                placeholder="Project inquiry"
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-200 text-sm placeholder-gray-700 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handle}
                placeholder="Tell me about your project..."
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-200 text-sm placeholder-gray-700 focus:outline-none focus:border-violet-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm hover:opacity-90 hover:scale-[1.01] transition-all duration-200 shadow-lg shadow-violet-500/20"
            >
              <Send size={16} />
              {sent ? 'Message sent! 🎉' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
