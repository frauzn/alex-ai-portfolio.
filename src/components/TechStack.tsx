import { motion } from 'framer-motion';

// SVG icons for each tech
const NextJsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
  </svg>
);

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);

const MakeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M5.97 2.68C4.38 2.68 3.1 3.96 3.1 5.55v12.9c0 1.59 1.28 2.87 2.87 2.87h12.06c1.59 0 2.87-1.28 2.87-2.87V5.55c0-1.59-1.28-2.87-2.87-2.87H5.97zm3.68 4.5l1.37 4.27 1.37-4.27h1.73l-2.22 6.64H10.26L8.04 7.18h1.61zm5.47 0h1.54v6.64h-1.54V7.18zm-7.83 0h1.54v6.64H7.29V7.18z"/>
  </svg>
);

const N8nIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5v-9l7 4.5-7 4.5z"/>
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 13.05c-.43.534-.074 1.319.613 1.337l8.105.19 1.012 9.387c.11.997 1.396 1.337 1.977.51l9.4-13.498c.462-.664.003-1.573-.789-1.536l-7.981.338-1.202-8.742z"/>
  </svg>
);

const techs = [
  {
    name: 'Next.js',
    icon: NextJsIcon,
    description: 'React framework for production',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.15)',
    bg: 'rgba(255,255,255,0.04)',
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindIcon,
    description: 'Utility-first CSS framework',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.2)',
    bg: 'rgba(56,189,248,0.05)',
  },
  {
    name: 'OpenAI API',
    icon: OpenAIIcon,
    description: 'GPT-4 & AI models',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.2)',
    bg: 'rgba(16,185,129,0.05)',
  },
  {
    name: 'Make',
    icon: MakeIcon,
    description: 'Visual automation platform',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.2)',
    bg: 'rgba(168,85,247,0.05)',
  },
  {
    name: 'n8n',
    icon: N8nIcon,
    description: 'Workflow automation',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.2)',
    bg: 'rgba(249,115,22,0.05)',
  },
  {
    name: 'Vercel',
    icon: VercelIcon,
    description: 'Deployment & edge network',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.15)',
    bg: 'rgba(255,255,255,0.04)',
  },
  {
    name: 'Supabase',
    icon: SupabaseIcon,
    description: 'Open source Firebase alternative',
    color: '#3ecf8e',
    glow: 'rgba(62,207,142,0.2)',
    bg: 'rgba(62,207,142,0.05)',
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.8), transparent 65%)' }}
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
            <span className="text-xs font-medium text-violet-300 tracking-wide uppercase">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-syne mb-4">
            Built with the Best
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto">
            A curated set of tools and platforms chosen for performance, scalability, and developer experience.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {techs.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="group relative glass border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-5 cursor-default transition-all duration-300 overflow-hidden"
                style={{ '--tech-glow': tech.glow } as React.CSSProperties}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ boxShadow: `inset 0 0 30px ${tech.glow}` }}
                />

                {/* Icon wrapper */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 border border-white/[0.05] group-hover:border-white/[0.12]"
                  style={{
                    background: tech.bg,
                    color: tech.color,
                    boxShadow: `0 0 0 1px ${tech.glow}`,
                  }}
                >
                  <Icon />
                </div>

                {/* Name & desc */}
                <h3 className="text-sm font-semibold text-white mb-1 font-syne group-hover:text-violet-100 transition-colors">{tech.name}</h3>
                <p className="text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors leading-snug">{tech.description}</p>

                {/* Colored bottom border on hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)` }}
                />
              </motion.div>
            );
          })}

          {/* Plus more placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: techs.length * 0.07 }}
            className="glass border border-dashed border-white/[0.07] rounded-2xl p-5 flex flex-col items-center justify-center cursor-default"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/[0.02] border border-dashed border-white/[0.07]">
              <span className="text-zinc-600 text-xl font-light">+</span>
            </div>
            <p className="text-xs text-zinc-600 text-center leading-snug">And many more tools</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
