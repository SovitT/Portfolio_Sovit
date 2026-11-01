import { profile } from '../data/data';
export default function Footer() {
  return <footer className="footer"><p>© {new Date().getFullYear()} {profile.name}. Built with React and Framer Motion.</p></footer>;
}
