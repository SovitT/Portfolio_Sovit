import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { experience } from '../data/data';
export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="exp-h">
      <div className="container narrow">
        <SectionHead id="exp-h" title="Experience" />
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.company}>
              <Reveal>
                <details className="card" open>
                  <summary>
                    <span className="t-role">{e.role}</span>
                    <span className="t-meta">{e.company}, {e.period}</span>
                  </summary>
                  <ul className="plain">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </details>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
