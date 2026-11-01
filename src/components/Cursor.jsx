import { useEffect, useRef } from 'react';
// Desktop-only soft ring that follows the pointer. Disabled for touch and reduced motion.
export default function Cursor() {
  const ring = useRef(null);
  useEffect(() => {
    const ok = window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!ok || !ring.current) return;
    const el = ring.current;
    let x = 0, y = 0, tx = 0, ty = 0, raf;
    const move = (e) => { tx = e.clientX; ty = e.clientY; el.style.opacity = 1; };
    const hover = (e) => el.classList.toggle('big', !!e.target.closest('a, button, [role="button"], input, textarea'));
    const loop = () => { x += (tx - x) * 0.18; y += (ty - y) * 0.18; el.style.transform = `translate(${x}px, ${y}px)`; raf = requestAnimationFrame(loop); };
    window.addEventListener('pointermove', move); window.addEventListener('pointerover', hover);
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('pointermove', move); window.removeEventListener('pointerover', hover); };
  }, []);
  return <div ref={ring} className="cursor" aria-hidden="true" />;
}
