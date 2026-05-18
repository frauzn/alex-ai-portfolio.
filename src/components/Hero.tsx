import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Code2, Sparkles } from 'lucide-react';

const floatingCards = [
  {
    icon: <Brain className="w-4 h-4 text-violet-400" />,
    label: 'AI Processing',
    value: '99.8%',
    sub: 'accuracy rate',
    delay: 0,
    className: 'left-[2%] top-[28%] md:left-[4%] md:top-[32%]',
  },
  {
    icon: <Zap className="w-4 h-4 text-amber-400" />,
    label: 'Automation Speed',
    value: '10x',
    sub: 'faster workflows',
    delay: 0.15,
    className: 'right-[2%] top-[24%] md:right-[5%] md:top-[30%]',
  },
  {
    icon: <Code2 className="w-4 h-4 text-emerald-400" />,
    label: 'Projects Shipped',
    value: '30+',
    sub: 'live in production',
    delay: 0.3,
    className: 'left-[3%] bottom-[22%] md:left-[6%] md:bottom-[25%]',
  },
];



export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
      </div>

      {/* Radial purple glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-20 animate-pulse-glow"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.6) 0%, rgba(109,40,217,0.2) 50%, transparent 70%)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Horizontal beam */}
        <div
          className="absolute top-[55%] left-0 right-0 h-px opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.8) 30%, rgba(167,139,250,1) 50%, rgba(139,92,246,0.8) 70%, transparent)',
          }}
        />
        {/* Orb top right */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.8), transparent 70%)' }}
        />
        {/* Orb bottom left */}
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%)' }}
        />
      </div>

      {/* Floating Code Card (right side, bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute hidden xl:block z-20 right-[3%] bottom-[20%]"
      >
        <div className="animate-float-slow" style={{ animationDelay: '2s' }}>
          <div className="glass-purple rounded-2xl p-4 glow-purple-sm hover:glow-purple transition-all duration-500 cursor-default max-w-[260px]">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-xs text-zinc-600">automation.ts</span>
            </div>
            <pre className="text-xs leading-relaxed font-mono">
              <span className="text-violet-400">const</span>
              <span className="text-zinc-300"> automation = </span>
              <span className="text-violet-400">await</span>
              <span className="text-blue-400"> ai</span>
              <span className="text-zinc-300">.run({'{'}</span>
              {'\n'}
              <span className="text-zinc-500">  model: </span>
              <span className="text-emerald-400">"gpt-4"</span>
              <span className="text-zinc-500">,</span>
              {'\n'}
              <span className="text-zinc-500">  trigger: </span>
              <span className="text-emerald-400">"webhook"</span>
              <span className="text-zinc-500">,</span>
              {'\n'}
              <span className="text-zinc-500">  actions: [</span>
              <span className="text-amber-400">"qualify"</span>
              <span className="text-zinc-500">, </span>
              <span className="text-amber-400">"notify"</span>
              <span className="text-zinc-500">]</span>
              {'\n'}
              <span className="text-zinc-300">{'}'}</span>
              <span className="text-zinc-500">);</span>
            </pre>
          </div>
        </div>
      </motion.div>

      {/* Floating Cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1 + card.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute hidden lg:flex z-20 ${card.className}`}
        >
          <div className="animate-float" style={{ animationDelay: `${card.delay * 2}s` }}>
            <div className="glass-purple rounded-2xl px-4 py-3 flex items-center gap-3 glow-purple-sm hover:glow-purple transition-all duration-500 cursor-default group">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] flex items-center justify-center border border-white/[0.08] group-hover:border-violet-500/30 transition-colors">
                {card.icon}
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5">{card.label}</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-white font-syne">{card.value}</span>
                  <span className="text-xs text-zinc-400">{card.sub}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/20 mb-8 group cursor-default"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-xs font-medium text-zinc-300 tracking-wide">Available for new projects</span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm font-medium text-zinc-500 tracking-[0.2em] uppercase mb-4 font-syne"
        >
          Alex
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6 font-syne"
        >
          <span className="text-white">AI Automation</span>
          <br />
          <span className="gradient-text text-glow">& Web Solutions</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I create AI-powered automations and modern web solutions that help
          businesses{' '}
          <span className="text-zinc-200">grow faster</span>,{' '}
          <span className="text-zinc-200">work smarter</span>, and{' '}
          <span className="text-zinc-200">scale effortlessly</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9, #5b21b6)',
              boxShadow: '0 0 30px rgba(124,58,237,0.4), 0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            {/* Shimmer overlay */}
            <div className="absolute inset-0 animate-shimmer" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-zinc-200 glass border border-white/[0.1] hover:border-violet-500/30 hover:text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-violet-500/5"
          >
            Contact Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 opacity-60 group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-600 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
