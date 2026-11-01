export default function SectionHead({ id, title, lead }) {
  return (
    <header className="section-head">
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
}
