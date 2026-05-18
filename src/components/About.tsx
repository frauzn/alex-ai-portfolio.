import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Layers } from 'lucide-react';

const stats = [
  { value: '30+', label: 'Projects Shipped', icon: Layers },
  { value: '10x', label: 'Faster Workflows', icon: Cpu },
  { value: '80%', label: 'Task Automation', icon: Code2 },
];

const values = [
  {
    title: 'Precision over volume',
    desc: 'I take on a select number of projects at a time to deliver quality that actually moves the needle.',
  },
  {
    title: 'AI-first thinking',
    desc: 'Every solution starts with a question: can AI solve this better, faster, or more reliably?',
  },
  {
    title: 'Clean code, real results',
    desc: 'Production-grade systems that are readable, maintainable, and built to last.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-black pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.8), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="text-xs font-medium text-violet-300 tracking-wide uppercase">About</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white font-syne mb-6 leading-tight">
              Building the future
              <br />
              <span className="gradient-text">one automation at a time</span>
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed mb-6">
              I help businesses <span className="text-zinc-200 font-medium">automate repetitive tasks</span> and build modern AI-powered digital solutions. From intelligent chatbots to complex multi-step workflows — I turn ideas into systems that work while you sleep.
            </p>

            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              With a focus on the intersection of AI and modern web development, I work with founders, startups, and growing businesses to implement technology that creates real leverage. Not just code — but systems that compound.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 * i }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 w-5 h-5 rounded-full border border-violet-500/30 flex items-center justify-center flex-shrink-0 group-hover:border-violet-400/50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 group-hover:bg-violet-400 transition-colors" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zinc-200">{v.title}</span>
                    <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
            >
              Work with me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Right side — stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="relative"
          >
            {/* Main card */}
            <div
              className="relative rounded-3xl p-8 border border-white/[0.07] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20,10,40,0.9), rgba(8,4,20,0.95))',
                boxShadow: '0 0 60px rgba(139,92,246,0.08), 0 30px 60px rgba(0,0,0,0.4)',
              }}
            >
              {/* Avatar placeholder */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-2xl overflow-hidden"
                    style={{ boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
                  >
                    <img
                      src="/images/avatar.jpg"
                      alt="Alex"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = 'none';
                        const parent = el.parentElement;
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #7c3aed, #5b21b6)';
                          parent.style.display = 'flex';
                          parent.style.alignItems = 'center';
                          parent.style.justifyContent = 'center';
                          parent.innerHTML += '<span style="color:white;font-size:1.5rem;font-weight:bold;font-family:Syne,sans-serif">A</span>';
                        }
                      }}
                    />
                  </div>
                  {/* Online dot */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-black animate-pulse" />
                </div>
                <div>
                  <p className="text-base font-semibold text-white font-syne">Alex</p>
                  <p className="text-xs text-zinc-500">AI Automation Developer</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-emerald-400">Available for work</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 + i * 0.1 }}
                      className="group text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-violet-500/20 hover:bg-violet-500/[0.04] transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 text-violet-400 mx-auto mb-2 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                      <p className="text-xl font-bold text-white font-syne mb-0.5">{stat.value}</p>
                      <p className="text-xs text-zinc-600 leading-tight">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bio snippet */}
              <div className="space-y-3">
                <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3">Currently focused on</p>
                {['AI Automation Systems', 'LLM-powered Applications', 'Full-stack Web Apps'].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/15 transition-colors">
                      <div className="w-1 h-1 rounded-full bg-violet-400" />
                    </div>
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              {/* Purple orb inside card */}
              <div
                className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.7), transparent 70%)' }}
              />
            </div>

            {/* Floating glow outside */}
            <div
              className="absolute -inset-1 rounded-3xl opacity-20 blur-xl -z-10"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.4), transparent 70%)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
