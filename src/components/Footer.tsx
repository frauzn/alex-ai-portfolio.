import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2.5"
        >
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
            <span className="text-white font-bold text-xs font-syne">A</span>
          </div>
          <span className="text-zinc-600 text-xs">Alex © {year}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-zinc-700"
        >
          Built with Next.js · Tailwind · Framer Motion
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          {['Services', 'Work', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
