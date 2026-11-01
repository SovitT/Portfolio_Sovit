import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <button className={`to-top icon-btn ${show ? 'show' : ''}`} aria-label="Back to top" tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0 })}><ArrowUp size={18} /></button>
  );
}
