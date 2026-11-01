import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { achievements } from '../data/data';
export default function Achievements() {
  return (
    <section id="achievements" className="section" aria-labelledby="ach-h">
      <div className="container">
        <SectionHead id="ach-h" title="Achievements" />
        <div className="grid two">
          {achievements.map((a, i) => (
            <Reveal key={a.group} delay={(i % 2) * 0.08}>
              <div className="card"><h3>{a.group}</h3><ul className="plain">{a.items.map((t) => <li key={t}>{t}</li>)}</ul></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
