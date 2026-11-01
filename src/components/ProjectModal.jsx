import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Github } from 'lucide-react';
export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    closeRef.current?.focus();
    const key = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', key);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <motion.div className="modal-back" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal glass" role="dialog" aria-modal="true" aria-labelledby="modal-title"
        initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="icon-btn modal-x" onClick={onClose} aria-label="Close details"><X size={18} /></button>
        <h3 id="modal-title">{project.title}</h3>
        <p>{project.short}</p>
        <ul className="plain">{project.details.map((d) => <li key={d}>{d}</li>)}</ul>
        <ul className="chips">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul>
        {project.github && <a className="btn ghost" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> View on GitHub</a>}
      </motion.div>
    </motion.div>
  );
}
