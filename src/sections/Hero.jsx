import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import { profile } from '../data/data';

// Hero background: a line chart that draws itself, a quiet nod to data work.
const path = 'M0 260 C 90 240, 140 280, 220 210 S 360 150, 440 180 S 580 90, 660 110 S 800 40, 900 60';

export default function Hero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [note, setNote] = useState('');
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);

  async function resume(e) {
    e.preventDefault();
    try {
      const r = await fetch(profile.resume, { method: 'HEAD' });
      const ok = r.ok && !(r.headers.get('content-type') || '').includes('text/html');
      if (!ok) throw new Error();
      const a = document.createElement('a'); a.href = profile.resume; a.download = 'Sovit_Thakre_Resume.pdf'; a.click();
      setNote('');
    } catch {
      setNote('Resume not found. Add your PDF at public/Sovit_Thakre_Resume.pdf.');
    }
  }

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <svg className="hero-chart" viewBox="0 0 900 320" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="g" x1="0" x2="1"><stop offset="0" stopColor="var(--accent)" stopOpacity="0" /><stop offset="1" stopColor="var(--accent)" /></linearGradient>
        </defs>
        <motion.path d={path} fill="none" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.4, delay: 0.9, ease: 'easeOut' }} />
        {[[220, 210], [440, 180], [660, 110], [900, 60]].map(([x, y], k) => (
          <motion.circle key={k} cx={x} cy={y} r="5" fill="var(--accent)" initial={reduce ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 + k * 0.5 }} />
        ))}
      </svg>
      <div className="container hero-grid">
        <div>
          <p className="hello">Hi, I'm</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="roles" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span key={i} initial={reduce ? false : { y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -14, opacity: 0 }} transition={{ duration: 0.3 }}>
                {profile.roles[i]}
              </motion.span>
            </AnimatePresence>
          </p>
          <p className="tagline">{profile.tagline}</p>
          <p className="muted measure">{profile.intro}</p>
          <div className="cta">
            <a className="btn primary" href="#projects">View My Projects</a>
            <a className="btn ghost" href={profile.resume} onClick={resume}><Download size={16} /> Download Resume</a>
            <a className="btn ghost" href="#contact">Contact Me</a>
          </div>
          {note && <p role="alert" className="note">{note}</p>}
          <div className="social">
            <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
        <div className="photo" role="img" aria-label={profile.photo ? 'Portrait of Sovit Thakre' : 'Profile photo placeholder'}>
          {profile.photo ? <img src={profile.photo} alt="" width="320" height="400" /> : <span>ST<small>Add your photo in data.js</small></span>}
        </div>
      </div>
    </section>
  );
}
