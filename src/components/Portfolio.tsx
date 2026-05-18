import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Lock, ExternalLink, CheckCircle2 } from 'lucide-react';

const techStack = [
  { name: 'OpenAI API', color: '#10b981' },
  { name: 'Telegram API', color: '#3b82f6' },
  { name: 'Make', color: '#f59e0b' },
  { name: 'Google Sheets', color: '#34d399' },
  { name: 'Next.js', color: '#a78bfa' },
];

const features = [
  'AI-powered responses',
  'Lead collection',
  'Google Sheets integration',
  'Automated workflows',
  'Smart customer support',
];

const placeholders = [
  {
    title: 'AI Lead Qualification System',
    description: 'Intelligent pipeline that scores, qualifies, and routes inbound leads automatically using AI — reducing sales cycle time by 60%.',
    status: 'Coming Soon',
    tags: ['OpenAI', 'CRM', 'n8n', 'Webhooks'],
    gradient: 'from-indigo-900/40 to-violet-900/20',
  },
  {
    title: 'AI Content Automation',
    description: 'End-to-end content engine that generates, formats, and publishes SEO-optimized content across multiple platforms automatically.',
    status: 'Coming Soon',
    tags: ['GPT-4', 'Make', 'WordPress', 'Analytics'],
    gradient: 'from-purple-900/40 to-fuchsia-900/20',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6 overflow-hidden">
      {/* Section BG glow */}
      <div className="absolute inset-0 bg-black pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[700px] h-[500px] opacity-10"
          style={{ background: 'radial-gradient(ellipse at bottom right, rgba(139,92,246,0.7), transparent 65%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-xs font-medium text-violet-300 tracking-wide uppercase">Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-syne mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto">
            Real-world AI systems built to solve business problems at scale.
          </p>
        </motion.div>

        {/* Featured Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-8"
        >
          <div
            className="relative rounded-3xl overflow-hidden border border-white/[0.08] hover:border-violet-500/25 transition-all duration-500 group"
            style={{
              background: 'linear-gradient(135deg, rgba(20,10,40,0.95) 0%, rgba(10,5,25,0.98) 100%)',
              boxShadow: '0 0 80px rgba(139,92,246,0.08), 0 40px 80px rgba(0,0,0,0.5)',
            }}
          >
            {/* Glow border effect */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 60px rgba(139,92,246,0.06)' }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Project Image */}
              <div className="relative overflow-hidden min-h-[300px] lg:min-h-[480px]">
                {/* Image with glow */}
                <div className="absolute inset-0">
                  <img
                    src="/images/project-bot.jpg"
                    alt="AI Telegram Support Bot"
                    className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to right, transparent 40%, rgba(10,5,25,0.95) 100%), linear-gradient(to top, rgba(10,5,25,0.7) 0%, transparent 50%)',
                    }}
                  />
                  {/* Purple glow overlay */}
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                    style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.6), transparent 70%)' }}
                  />
                </div>

                {/* Floating status badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-violet-500/25 backdrop-blur-xl">
                    <Sparkles className="w-3 h-3 text-violet-400" />
                    <span className="text-xs font-medium text-violet-300">Case Study</span>
                  </div>
                </div>

                {/* Glow rings */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border border-violet-500/10 animate-pulse-glow hidden lg:block" />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border border-violet-500/15 hidden lg:block" />
              </div>

              {/* Right: Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">AI Chatbot System</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white font-syne mb-4 leading-tight">
                  AI Telegram<br />
                  <span className="gradient-text">Support Bot</span>
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  An AI-powered Telegram assistant that automates customer communication, collects leads, and improves response speed using AI automation workflows. Reduced manual support load by 80%.
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" strokeWidth={2} />
                      <span className="text-sm text-zinc-300">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mb-8">
                  <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.07] bg-white/[0.03] text-zinc-300 hover:border-white/[0.15] transition-colors duration-200"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: tech.color, boxShadow: `0 0 6px ${tech.color}` }}
                        />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
                  <button className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/40 hover:scale-[1.02]">
                    View Details
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {placeholders.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className={`group relative rounded-2xl p-7 border border-white/[0.06] hover:border-violet-500/20 transition-all duration-500 overflow-hidden cursor-default`}
              style={{
                background: `linear-gradient(135deg, rgba(15,8,35,0.95), rgba(8,4,20,0.98))`,
              }}
              whileHover={{ boxShadow: '0 0 40px rgba(139,92,246,0.1), 0 20px 40px rgba(0,0,0,0.3)' }}
            >
              {/* Gradient top accent */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.gradient.replace('from-', 'from-').replace('/40', '').replace('/20', '')} opacity-50`} />

              {/* Lock icon */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                <Lock className="w-3 h-3 text-zinc-500" />
                <span className="text-xs text-zinc-500">{project.status}</span>
              </div>

              <h3 className="text-lg font-semibold text-white font-syne mb-3 pr-24 group-hover:text-violet-100 transition-colors">{project.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5 group-hover:text-zinc-400 transition-colors">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] text-zinc-500 border border-white/[0.05] group-hover:border-white/[0.1] group-hover:text-zinc-400 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-zinc-600 group-hover:text-violet-400 transition-colors duration-300">
                <ArrowRight className="w-4 h-4" />
                <span className="text-xs font-medium">In development</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
