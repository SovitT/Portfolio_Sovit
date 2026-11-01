import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { education } from '../data/data';
export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="edu-h">
      <div className="container narrow">
        <SectionHead id="edu-h" title="Education" />
        <ol className="timeline">
          {education.map((e) => (
            <li key={e.degree}><Reveal><div className="card"><h3>{e.degree}</h3><p>{e.school}</p><p className="muted">{e.period}</p></div></Reveal></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
