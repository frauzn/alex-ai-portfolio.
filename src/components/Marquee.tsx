import { motion } from 'framer-motion';

const items = [
  'AI Automation',
  '✦',
  'Chatbot Development',
  '✦',
  'Workflow Automation',
  '✦',
  'OpenAI Integration',
  '✦',
  'Next.js Applications',
  '✦',
  'Lead Generation',
  '✦',
  'AI Integrations',
  '✦',
  'Process Automation',
  '✦',
  'Web Development',
  '✦',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-white/[0.04] bg-black">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #000, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, #000, transparent)' }} />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-6 text-xs font-medium tracking-widest uppercase ${
              item === '✦'
                ? 'text-violet-600'
                : 'text-zinc-600 hover:text-zinc-400 transition-colors'
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
