import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import useActiveSection from '../hooks/useActiveSection';
import { profile } from '../data/data';

const links = [
  ['about', 'About'], ['experience', 'Experience'], ['skills', 'Skills'],
  ['projects', 'Projects'], ['education', 'Education'], ['achievements', 'Achievements'], ['contact', 'Contact'],
];
const ids = ['home', ...links.map((l) => l[0])];

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  return (
    <nav className="nav glass" aria-label="Main">
      <a href="#home" className="brand">{profile.name}</a>
      <ul className={open ? 'open' : ''}>
        {links.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined}>{label}</a>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button className="icon-btn" onClick={onToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </nav>
  );
}
