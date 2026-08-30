import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useInView } from './hooks/useMotion';
import { useEffect, useRef } from 'react';

const bars = [42, 58, 65, 50, 72, 80, 66, 88, 95];

function PieSlice({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  const { theme } = useTheme();
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0, rotate: -30 }}
      animate={{ opacity: [0, 0.45, 0.25, 0.45], scale: [0, 1, 0.92, 1], rotate: [-30, 0, 10, 0] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke={`${theme.accent}35`}
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay }}
      />
      <motion.path
        d="M50 50 L50 15 A35 35 0 0 1 80 30 Z"
        fill={`${theme.accent}25`}
        stroke={`${theme.accent}40`}
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: delay + 0.5 }}
      />
      <motion.path
        d="M50 50 L80 30 A35 35 0 0 1 70 80 Z"
        fill={`${theme.accent2}20`}
        stroke={`${theme.accent2}35`}
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: delay + 1 }}
      />
    </motion.svg>
  );
}

function Chart() {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const h = 210;
  const w = 320;
  const bw = (w - 16) / bars.length;
  return (
    <div ref={ref} className="relative w-full max-w-sm">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    el.addEventListener('mousemove', handle);
    return () => el.removeEventListener('mousemove', handle);
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} id="hero" className="relative flex min-h-screen items-center overflow-hidden" style={{ background: theme.bg }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(700px circle at 75% 30%, ${theme.accent}12, transparent)` }}
      />

      <PieSlice x={6} y={10} size={55} delay={0} />
      <PieSlice x={88} y={15} size={40} delay={1.5} />
      <PieSlice x={80} y={70} size={50} delay={0.8} />
      <PieSlice x={10} y={75} size={35} delay={2.2} />
      <PieSlice x={50} y={5} size={30} delay={3} />

      <motion.svg
        className="absolute bottom-8 right-8 opacity-10"
        width="110"
        height="110"
        viewBox="0 0 100 100"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={theme.accent}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
        <motion.path
          d="M50 50 L50 15 A35 35 0 0 1 80 30 Z"
          fill={`${theme.accent}15`}
          stroke={theme.accent}
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
        />
      </motion.svg>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <motion.div style={{ rotateX, rotateY, transformPerspective: 1000 }}>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: theme.accent }}
          >
            Financial Analysis & Valuation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 80 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.04, duration: 0.5 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-3 text-xl font-light"
            style={{ color: theme.muted }}
          >
            {content.role} · {content.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <motion.a
              href="#skills"
              className="rounded px-7 py-3 font-semibold text-white"
              style={{ background: theme.accent }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${theme.accent}60` }}
              whileTap={{ scale: 0.95 }}
            >
              See my models
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded border px-7 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${theme.accent}30` }}
              whileTap={{ scale: 0.95 }}
            >
              Talk finance
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Chart />
        </motion.div>
      </div>
    </section>
  );
}
