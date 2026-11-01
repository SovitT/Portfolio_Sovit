import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { skills } from '../data/data';
export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-h">
      <div className="container">
        <SectionHead id="skills-h" title="Technical skills" />
        <div className="grid skills">
          {skills.map(({ title, icon: Icon, items }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <motion.div className="card skill" whileHover={{ y: -4 }}>
                <h3><Icon size={20} aria-hidden="true" /> {title}</h3>
                <ul className="chips">{items.map((s) => <li key={s}>{s}</li>)}</ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
