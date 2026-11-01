import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useTheme from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t); }, []);
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div className="loader" exit={{ opacity: 0 }} transition={{ duration: 0.4 }} aria-hidden="true">
            <span className="loader-mark">ST</span>
          </motion.div>
        )}
      </AnimatePresence>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar theme={theme} onToggle={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Cursor />
    </>
  );
}
