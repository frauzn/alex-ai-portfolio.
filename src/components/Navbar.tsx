import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled
            ? 'glass border border-white/[0.06] shadow-2xl shadow-black/50'
            : 'bg-transparent'
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center glow-purple-sm group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-sm font-syne">A</span>
            </div>
            <span className="text-white font-semibold text-sm tracking-wide font-syne">Alex</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04] group"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-px bg-violet-400 group-hover:w-4 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative px-4 py-2 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-violet-900/30 hover:shadow-violet-700/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="mt-2 glass border border-white/[0.06] rounded-2xl px-4 py-4 flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-zinc-300 hover:text-white rounded-xl hover:bg-white/[0.04] transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-violet-600 to-purple-700"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
