import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import SectionHead from '../components/SectionHead';
import { profile } from '../data/data';

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const [err, setErr] = useState({});
  const [status, setStatus] = useState('');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const x = {};
    if (f.name.trim().length < 2) x.name = 'Enter your name (at least 2 characters).';
    if (!emailOk(f.email)) x.email = 'Enter a valid email address, like name@example.com.';
    if (f.message.trim().length < 10) x.message = 'Write a message of at least 10 characters.';
    setErr(x);
    if (Object.keys(x).length) { setStatus(''); return; }
    if (profile.email.includes('YOUR_EMAIL')) { setStatus('This form is not connected yet. Add your email in src/data/data.js.'); return; }
    // No backend: this opens the visitor's own email app. Nothing is sent from the site.
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${body}`;
    setStatus('Opening your email app. Press send there to deliver the message.');
  }

  const field = (k, label, props = {}) => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      {k === 'message' ? <textarea id={k} rows="5" value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? k + '-e' : undefined} />
        : <input id={k} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? k + '-e' : undefined} {...props} />}
      {err[k] && <p className="err" id={k + '-e'}>{err[k]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section" aria-labelledby="contact-h">
      <div className="container contact-grid">
        <div>
          <SectionHead id="contact-h" title="Let's talk" lead="I'm open to data analyst, business analyst, Python developer and entry-level AI/ML roles. Send a message and I'll get back to you." />
          <ul className="plain links">
            <li><Mail size={16} /> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><Linkedin size={16} /> <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><Github size={16} /> <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
        <form className="card form" onSubmit={submit} noValidate>
          {field('name', 'Name', { autoComplete: 'name' })}
          {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
          {field('message', 'Message')}
          <button className="btn primary" type="submit">Send message</button>
          {status && <p role="status" className="note">{status}</p>}
        </form>
      </div>
    </section>
  );
}
