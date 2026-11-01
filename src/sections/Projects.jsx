import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/data';

export default function Projects() {
  const [sel, setSel] = useState(null);
  return (
    <section id="projects" className="section" aria-labelledby="proj-h">
      <div className="container">
        <SectionHead id="proj-h" title="Projects" />
        <div className="grid projects">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <motion.article className="card project" whileHover={{ y: -6 }}>
                <div className="preview">
                  {p.image ? <img src={p.image} alt={`${p.title} preview`} loading="lazy" width="640" height="360" />
                    : <div className="ph"><ImageIcon size={28} aria-hidden="true" /><span>Screenshot placeholder</span></div>}
                </div>
                <h3>{p.title}</h3>
                <p className="muted">{p.short}</p>
                <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <div className="cta small">
                  {p.github ? <a className="btn ghost" href={p.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
                    : <span className="btn disabled" aria-disabled="true"><Github size={15} /> GitHub link needed</span>}
                  {p.live && <a className="btn ghost" href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live demo</a>}
                  <button className="btn primary" onClick={() => setSel(p)}>View details</button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>{sel && <ProjectModal project={sel} onClose={() => setSel(null)} />}</AnimatePresence>
    </section>
  );
}
