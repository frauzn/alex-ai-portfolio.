import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, Zap } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '80%',
    label: 'Reduction in manual work',
    color: 'text-violet-400',
  },
  {
    icon: Clock,
    value: '24h',
    label: 'Average delivery for automations',
    color: 'text-emerald-400',
  },
  {
    icon: Users,
    value: '20+',
    label: 'Clients served globally',
    color: 'text-amber-400',
  },
  {
    icon: Zap,
    value: '10x',
    label: 'Workflow speed improvements',
    color: 'text-sky-400',
  },
];

export default function StatsStrip() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(139,92,246,0.03) 50%, transparent)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="group relative glass border border-white/[0.05] hover:border-white/[0.1] rounded-2xl p-6 text-center transition-all duration-300 cursor-default overflow-hidden"
                whileHover={{ y: -3 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at center, rgba(139,92,246,0.04), transparent 70%)' }}
                />
                <Icon className={`w-5 h-5 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.8} />
                <p className="text-3xl font-bold text-white font-syne mb-1">{stat.value}</p>
                <p className="text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors leading-snug">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
