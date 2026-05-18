import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

// Custom SVG icons
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

interface ContactLink {
  renderIcon: () => React.ReactElement;
  label: string;
  handle: string;
  href: string;
  description: string;
  color: string;
  glow: string;
  hoverBorder: string;
}

const contactLinks: ContactLink[] = [
  {
    renderIcon: () => <Mail className="w-5 h-5" strokeWidth={1.8} />,
    label: 'Email',
    handle: 'alexwebai96@gmail.com',
    href: 'mailto:alexwebai96@gmail.com',
    description: 'Best for project inquiries',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.2)',
    hoverBorder: 'hover:border-violet-500/30',
  },
  {
    renderIcon: () => <MessageCircle className="w-5 h-5" strokeWidth={1.8} />,
    label: 'WhatsApp',
    handle: '+39 353 489 2047',
    href: 'https://wa.me/393534892047',
    description: 'Quick chat on WhatsApp',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.2)',
    hoverBorder: 'hover:border-emerald-500/30',
  },
  {
    renderIcon: () => <GithubIcon />,
    label: 'GitHub',
    handle: 'github.com/frauzn',
    href: 'https://github.com/frauzn',
    description: 'Code & open source',
    color: '#e2e8f0',
    glow: 'rgba(226,232,240,0.1)',
    hoverBorder: 'hover:border-zinc-500/30',
  },
  {
    renderIcon: () => <Send className="w-5 h-5" strokeWidth={1.8} />,
    label: 'Telegram',
    handle: '@FD1790',
    href: 'https://t.me/FD1790',
    description: 'Quick messages & updates',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.2)',
    hoverBorder: 'hover:border-sky-500/30',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-black pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.12]"
          style={{ background: 'radial-gradient(ellipse at center bottom, rgba(139,92,246,0.7), transparent 65%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-violet-300 tracking-wide uppercase">Available Now</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white font-syne mb-4 leading-tight">
            Let's build something
            <br />
            <span className="gradient-text">remarkable</span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Reach out through any of the channels below and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden border border-white/[0.07] mb-6"
          style={{
            background: 'linear-gradient(135deg, rgba(20,10,45,0.95), rgba(10,5,25,0.98))',
            boxShadow: '0 0 80px rgba(139,92,246,0.08), 0 40px 80px rgba(0,0,0,0.4)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5) 50%, transparent)' }}
          />

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex items-center gap-4 p-5 rounded-2xl glass border border-white/[0.06] ${link.hoverBorder} transition-all duration-300 relative overflow-hidden cursor-pointer`}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ boxShadow: `inset 0 0 30px ${link.glow}` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: link.glow.replace('0.2)', '0.08)').replace('0.1)', '0.05)'),
                      border: `1px solid ${link.glow.replace('0.2)', '0.3)').replace('0.1)', '0.2)')}`,
                      color: link.color,
                      boxShadow: `0 0 20px ${link.glow}`,
                    }}
                  >
                    {link.renderIcon()}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-0.5">
                      <span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">{link.label}</span>
                    </div>
                    <p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors truncate">{link.handle}</p>
                    <p className="text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors">{link.description}</p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-white/[0.05]" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 text-xs text-zinc-600" style={{ background: 'rgba(10,5,25,0.98)' }}>or</span>
              </div>
            </div>

            {/* Quick message CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="text-center"
            >
              <p className="text-zinc-500 text-sm mb-4">
                <span className="text-zinc-300">Ready to start?</span> Let's schedule a free 30-minute discovery call.
              </p>
              <a
                href="mailto:alexwebai96@gmail.com?subject=Project%20Inquiry"
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                  boxShadow: '0 0 30px rgba(124,58,237,0.4), 0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <MessageCircle className="w-4 h-4" />
                <span className="relative z-10">Start a Conversation</span>
                <Sparkles className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 animate-shimmer opacity-50" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-xs text-zinc-700"
        >
          Typically responds within 24 hours · Based remotely · Working with clients worldwide
        </motion.p>
      </div>
    </section>
  );
}
