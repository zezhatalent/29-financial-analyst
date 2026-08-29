import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useInView } from './hooks/useMotion';

const bars = [42, 58, 65, 50, 72, 80, 66, 88, 95];

function Chart() {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const h = 210;
  const w = 320;
  const bw = (w - 16) / bars.length;
  return (
    <div ref={ref} className="relative w-full max-w-sm">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        {/* grid */}
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <line key={f} x1="0" x2={w} y1={h * (1 - f)} y2={h * (1 - f)} stroke={theme.border} strokeWidth="1" strokeDasharray="3 3" />
        ))}
        {bars.map((b, i) => {
          const bh = h * (b / 100) - 8;
          return (
            <motion.rect
              key={i}
              x={i * bw + 12}
              y={h - bh}
              width={bw - 10}
              height={bh}
              rx="3"
              fill={i === bars.length - 1 ? theme.accent : `${theme.accent2}aa`}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              style={{ transformOrigin: 'bottom' }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.7, ease: 'easeOut' }}
            />
          );
        })}
        {/* sweeping cursor */}
        <motion.line
          x1="0"
          x2={w}
          y1="8"
          y2="8"
          stroke={theme.accent}
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: [0, 1, 0], y: [0, h - 16, 0] } : {}}
          transition={{ duration: 3, delay: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
      <div className="mt-2 flex justify-between font-mono text-xs" style={{ color: theme.muted }}>
        <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>FY</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section id="hero" className="relative flex min-h-screen items-center" style={{ background: theme.bg }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(700px circle at 75% 30%, ${theme.accent}12, transparent)` }}
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: theme.accent }}
          >
            Financial Analysis & Valuation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-3 text-xl font-light"
            style={{ color: theme.muted }}
          >
            {content.role} · {content.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#skills"
              className="rounded px-7 py-3 font-semibold text-white"
              style={{ background: theme.accent }}
            >
              See my models
            </a>
            <a
              href="#contact"
              className="rounded border px-7 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              Talk finance
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <Chart />
        </div>
      </div>
    </section>
  );
}
