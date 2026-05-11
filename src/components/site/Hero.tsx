import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, Users, GraduationCap, Sparkles } from "lucide-react";
import { useRef } from "react";
import logo from "@/assets/saral-vidhya-logo-clean.png";

const floatingIcons = [
  { Icon: BookOpen, x: "8%", y: "22%", delay: 0, size: 18 },
  { Icon: GraduationCap, x: "85%", y: "18%", delay: 1.5, size: 20 },
  { Icon: Users, x: "92%", y: "55%", delay: 3, size: 16 },
  { Icon: Sparkles, x: "5%", y: "65%", delay: 2, size: 14 },
  { Icon: BookOpen, x: "78%", y: "78%", delay: 4, size: 15 },
  { Icon: GraduationCap, x: "15%", y: "82%", delay: 1, size: 17 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden bg-hero pt-28 pb-16 md:pt-32 md:pb-20">
      {/* ─── Floating blurred orbs ─── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <motion.div
          className="absolute left-[5%] top-[15%] h-80 w-80 rounded-full bg-sage/30 blur-3xl"
          animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[3%] top-[25%] h-96 w-96 rounded-full bg-peach/25 blur-3xl"
          animate={{ x: [0, -25, 15, 0], y: [0, 18, -12, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[35%] bottom-[8%] h-72 w-72 rounded-full bg-sky/25 blur-3xl"
          animate={{ x: [0, 20, -15, 0], y: [0, -15, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[55%] top-[10%] h-48 w-48 rounded-full bg-sun/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ─── Floating mini icons to fill empty sides ─── */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute text-sage-deep/20"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + delay * 0.3, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 6 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: delay }}
          >
            <Icon style={{ width: size, height: size }} />
          </motion.div>
        </motion.div>
      ))}

      {/* ─── Decorative geometric shapes on sides ─── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        {/* Left side decorations */}
        <motion.div
          className="absolute left-[4%] top-[40%] h-16 w-16 rounded-2xl border border-sage-deep/10 rotate-12"
          animate={{ rotate: [12, 24, 12], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[10%] top-[55%] h-8 w-8 rounded-full bg-peach/30"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[2%] bottom-[20%] h-24 w-[1px] bg-gradient-to-b from-transparent via-sage-deep/20 to-transparent"
          animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Right side decorations */}
        <motion.div
          className="absolute right-[6%] top-[38%] h-12 w-12 rounded-xl border border-peach/20 -rotate-6"
          animate={{ rotate: [-6, -18, -6], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[3%] bottom-[30%] h-20 w-20 rounded-full border border-sage/15"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[12%] bottom-[15%] h-6 w-6 rounded-full bg-sky/30"
          animate={{ y: [0, -10, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Scattered dots */}
        {[
          { left: "20%", top: "30%" },
          { left: "75%", top: "25%" },
          { left: "88%", top: "68%" },
          { left: "12%", top: "75%" },
          { left: "65%", top: "85%" },
          { left: "30%", top: "12%" },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-sage-deep/15"
            style={pos}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* ─── Main content ─── */}
      <motion.div style={{ y: yParallax, opacity: opacityFade }} className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
          {/* Left: Logo emblem */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex items-center justify-center order-2 md:order-1 mt-16 md:mt-0"
          >
            {/* Emerging waves — start from the logo's border ring */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={`wave-${i}`}
                aria-hidden
                className="absolute rounded-full border-[1.5px] border-sage-deep/40 h-[260px] w-[260px] md:h-[330px] md:w-[330px] hidden md:block"
                animate={{
                  scale: [1, 1.55],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 1.25,
                  times: [0, 0.15, 1],
                }}
              />
            ))}
            {[0, 1].map((i) => (
              <motion.div
                key={`wave-peach-${i}`}
                aria-hidden
                className="absolute rounded-full border border-peach/45 h-[260px] w-[260px] md:h-[330px] md:w-[330px] hidden md:block"
                animate={{
                  scale: [1, 1.7],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 3 + 1,
                  times: [0, 0.18, 1],
                }}
              />
            ))}

            {/* Outer glow ring */}
            <motion.div
              aria-hidden
              className="absolute h-[340px] w-[340px] rounded-full md:h-[420px] md:w-[420px]"
              style={{
                background: "radial-gradient(circle, transparent 50%, transparent 100%)",
                boxShadow: "0 0 80px 30px oklch(0.78 0.06 155 / 0.15), 0 0 160px 60px oklch(0.82 0.08 50 / 0.08)",
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating orbit ring 1 */}
            <motion.svg
              aria-hidden
              viewBox="0 0 400 400"
              className="absolute h-[340px] w-[340px] md:h-[430px] md:w-[430px] hidden md:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 10" className="text-sage-deep/50" />
              {/* Orbiting dot */}
              <circle cx="200" cy="10" r="5" className="fill-sage-deep/60" />
            </motion.svg>

            {/* Rotating orbit ring 2 (counter) */}
            <motion.svg
              aria-hidden
              viewBox="0 0 400 400"
              className="absolute h-[300px] w-[300px] md:h-[380px] md:w-[380px] hidden md:block"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="200" cy="200" r="185" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" className="text-peach/50" />
              <circle cx="200" cy="15" r="4" className="fill-peach/60" />
            </motion.svg>

            {/* Inner pulsing ring */}
            <motion.div
              aria-hidden
              className="absolute h-[260px] w-[260px] rounded-full border-[1.5px] border-sage-deep/20 md:h-[330px] md:w-[330px]"
              animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo */}
            <motion.img
              src={logo}
              alt="Saral Vidhya — Learning Simplified"
              className="relative h-52 w-52 object-contain drop-shadow-[0_4px_24px_oklch(0.42_0.07_160_/_0.15)] md:h-72 md:w-72"
              animate={{ y: [0, -8, 0], scale: [1, 1.04, 1] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                times: [0, 0.5, 1],
              }}
              whileHover={{ scale: 1.08, rotate: 2 }}
            />
          </motion.div>

          {/* Right: Text content */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-sage-deep/15 bg-sage-deep/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sage-deep/80"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Solving the Gaps in Learning
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="max-w-2xl text-balance text-4xl leading-[1.05] text-primary md:text-6xl lg:text-7xl"
            >
              Democratizing Education. Personalized. Adaptive.{" "}
              <motion.span
                className="relative italic text-sage-deep"
                initial={{ backgroundSize: "0% 3px" }}
                animate={{ backgroundSize: "100% 3px" }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                style={{
                  backgroundImage: "linear-gradient(to right, oklch(0.78 0.06 155), oklch(0.82 0.08 50))",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left bottom",
                }}
              >
                Powered by AI.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-foreground/75 md:text-lg"
            >
              Our mission is to bridge the divide between urban and rural education,
              empowering every student with affordable, high-quality, and adaptive
              learning experiences powered by AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#cta"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lift"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shine effect on hover */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Get Started</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#problem"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-6 py-3.5 text-sm font-medium text-primary backdrop-blur transition-all hover:bg-white hover:shadow-soft"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore More
              </motion.a>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex h-8 w-5 items-start justify-center rounded-full border border-sage-deep/30 p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="h-1.5 w-1 rounded-full bg-sage-deep/50"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
