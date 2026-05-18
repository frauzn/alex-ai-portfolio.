import { motion } from 'framer-motion';
import { Brain, Bot, GitBranch, Plug, Globe, Target } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Automation',
    description: 'Intelligent systems that handle repetitive tasks end-to-end — from data processing to complex multi-step workflows.',
    tags: ['OpenAI', 'Make', 'n8n'],
    accent: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.2)',
    borderHover: 'hover:border-violet-500/25',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Context-aware conversational AI for customer support, lead qualification, and internal knowledge bases.',
    tags: ['GPT-4', 'Telegram', 'WhatsApp'],
    accent: 'from-indigo-500 to-violet-600',
    glow: 'rgba(99,102,241,0.2)',
    borderHover: 'hover:border-indigo-500/25',
  },
  {
    icon: GitBranch,
    title: 'Workflow Automation',
    description: 'Seamless process automation connecting your tools and eliminating manual overhead across your entire operation.',
    tags: ['Make', 'Zapier', 'n8n'],
    accent: 'from-purple-500 to-pink-600',
    glow: 'rgba(168,85,247,0.2)',
    borderHover: 'hover:border-purple-500/25',
  },
  {
    icon: Plug,
    title: 'AI Integrations',
    description: 'Plug AI capabilities directly into your existing stack — CRMs, databases, APIs, and third-party platforms.',
    tags: ['REST API', 'Webhooks', 'OAuth'],
    accent: 'from-fuchsia-500 to-purple-600',
    glow: 'rgba(217,70,239,0.2)',
    borderHover: 'hover:border-fuchsia-500/25',
  },
  {
    icon: Globe,
    title: 'Modern Web Development',
    description: 'Production-grade web applications with sleek UIs, optimized performance, and scalable architecture.',
    tags: ['Next.js', 'React', 'Tailwind'],
    accent: 'from-violet-600 to-blue-600',
    glow: 'rgba(124,58,237,0.2)',
    borderHover: 'hover:border-blue-500/25',
  },
  {
    icon: Target,
    title: 'Lead Generation Systems',
    description: 'Automated pipelines that capture, qualify, and nurture leads — turning cold traffic into ready-to-buy prospects.',
    tags: ['AI Scoring', 'CRM', 'Automations'],
    accent: 'from-rose-500 to-violet-600',
    glow: 'rgba(244,63,94,0.15)',
    borderHover: 'hover:border-rose-500/25',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      {/* Section BG */}
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(139,92,246,0.6), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-xs font-medium text-violet-300 tracking-wide uppercase">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-syne mb-4">
            What I Build
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto">
            End-to-end AI solutions crafted with precision — from intelligent automations to polished digital products.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative glass border border-white/[0.06] ${service.borderHover} rounded-2xl p-6 cursor-default transition-all duration-500 hover:translate-y-[-2px] overflow-hidden`}
                style={{ transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s' }}
                whileHover={{
                  boxShadow: `0 0 40px ${service.glow}, 0 20px 40px rgba(0,0,0,0.3)`,
                }}
              >
                {/* Inner shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl animate-shimmer" />

                {/* Gradient corner accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${service.glow}, transparent 70%)` }}
                />

                {/* Icon */}
                <div className={`inline-flex w-11 h-11 rounded-xl items-center justify-center mb-5 bg-gradient-to-br ${service.accent} group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 4px 20px ${service.glow}` }}>
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-white mb-2 font-syne group-hover:text-violet-100 transition-colors">{service.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-5 group-hover:text-zinc-400 transition-colors">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] text-zinc-500 border border-white/[0.05] group-hover:border-white/[0.1] group-hover:text-zinc-400 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
