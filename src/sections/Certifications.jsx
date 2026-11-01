import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { certifications } from '../data/data';
export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-labelledby="cert-h">
      <div className="container narrow">
        <SectionHead id="cert-h" title="Certifications" />
        <div className="grid">
          {certifications.map((c) => (
            <Reveal key={c.name}>
              <div className="card"><h3>{c.name}</h3><p className="muted">{c.issuer}</p>
                {c.link ? <a href={c.link} target="_blank" rel="noreferrer">View credential</a> : <p className="muted">[PLACEHOLDER: credential link]</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
