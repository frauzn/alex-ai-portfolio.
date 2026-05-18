import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const scaleX = useSpring(progress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? scrollTop / total : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100] pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #7c3aed, #a78bfa, #7c3aed)',
        boxShadow: '0 0 8px rgba(167,139,250,0.6)',
      }}
    />
  );
}
