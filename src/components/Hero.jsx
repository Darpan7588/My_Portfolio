import {Github, Linkedin, X, Instagram, ArrowDown} from 'lucide-react';

const resumeUrl = '/Darpan-Soni.pdf';

export default function Hero() {
    

    const handleHero = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
};

return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start px-6 py-12 bg-[url('/hacker.png')] bg-cover bg-center">
    <div className="w-full max-w-6xl text-left">
        <h1 className="text-4xl mt-40 md:text-6xl font-bold mb-6 ">
        Hi, I&apos;m <span className="text-purple-600  ">Darpan Soni</span>
        </h1>
        <p className="max-w-3xl text-xl md:text-2xl text-gray-400 mb-8 text-style-verdana">
        A passionate Cyber Security Enthusiast. I love exploring the world of cybersecurity, learning new hacking techniques & Digital Forensics. Also have a keen interest in Frontend Development. Welcome to my portfolio!
        </p>
        <div className='mb-10 flex items-center gap-2'>
            <a href="https://github.com/darpan7588" className="inline-flex items-center gap-2 p-3 m-1 rounded-full border border-gray-700 text-gray-300 text-sm font-semibold hover:border-violet-500 hover:text-violet-400 transition-all duration-200">
        <Github size={16} />
        </a>
        <a href="https://linkedin.com/in/darpan-soni" className="inline-flex items-center gap-2 p-3 m-1 rounded-full border border-gray-700 text-gray-300 text-sm font-semibold hover:border-violet-500 hover:text-violet-400 transition-all duration-200">
        <Linkedin size={16} />
        </a>
        <a href="https://x.com/Darpannn1" className="inline-flex items-center gap-2 p-3 m-1  rounded-full border border-gray-700 text-gray-300 text-sm font-semibold hover:border-violet-500 hover:text-violet-400 transition-all duration-200">
        <X size={16} />
        </a>
        <a href="https://www.instagram.com/darpan.soni/" className="inline-flex items-center gap-2 p-3 m-1 rounded-full border border-gray-700 text-gray-300 text-sm font-semibold hover:border-violet-500 hover:text-violet-400 transition-all duration-200">
        <Instagram size={16} />
        </a>
        </div>
                <div className="flex flex-wrap items-center gap-2">
                <button onClick={(e) => { e.preventDefault(); handleHero('About'); }} className="inline-flex items-center gap-2 p-3 m-1 rounded-full border border-gray-700 hover:bg-violet-600 text-white font-semibold transition-colors">More About Me</button>
                <button onClick={(e) => { e.preventDefault(); handleHero('Projects'); }} className="inline-flex items-center gap-2 p-3 m-1 rounded-full border border-gray-700 hover:bg-violet-600 text-white font-semibold transition-colors">My Projects</button>
                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 p-3 m-1 rounded-full border border-violet-500 text-violet-300 hover:bg-violet-600 hover:text-white font-semibold transition-colors"
                >
                    <ArrowDown size={16} />
                    Resume
                </a>
                </div>
    </div>
    </section>
);
}
