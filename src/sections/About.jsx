import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { about } from '../data/data';
export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-h">
      <div className="container narrow">
        <SectionHead id="about-h" title="About me" />
        {about.map((p, i) => <Reveal key={i} delay={i * 0.08} as="p" className="body-p">{p}</Reveal>)}
      </div>
    </section>
  );
}
