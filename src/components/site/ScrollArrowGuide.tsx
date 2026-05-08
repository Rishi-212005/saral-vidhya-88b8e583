import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * A 3D arrow that emerges from the hero logo, then travels with the user
 * along the right side of the viewport, curling/rotating to point at the
 * heading of the section currently in view.
 */
export function ScrollArrowGuide({
  sectionIds = ["problem", "solution", "features", "gamification", "parents", "pillars", "cta"],
}: {
  sectionIds?: string[];
}) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.6 });

  // Vertical travel along the right rail (10% -> 85% of viewport height).
  const top = useTransform(progress, [0, 1], ["12%", "82%"]);
  // Slight horizontal curl as you scroll (in & out)
  const x = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [-30, 12, -8, 14, -10]);
  // Continuous gentle 3D rotation along scroll
  const rotateY = useTransform(progress, [0, 1], [0, 720]);
  const rotateZ = useTransform(progress, [0, 0.5, 1], [-15, 0, 15]);

  // Compute pointing angle toward the nearest section heading
  const [pointAngle, setPointAngle] = useState(0);
  const [activeLabel, setActiveLabel] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const ax = rect.left + rect.width / 2;
      const ay = rect.top + rect.height / 2;

      let bestDist = Infinity;
      let bestEl: HTMLElement | null = null;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight * 1.4) return;
        const d = Math.abs(r.top - window.innerHeight * 0.3);
        if (d < bestDist) {
          bestDist = d;
          bestEl = el;
        }
      });
      if (bestEl) {
        const el: HTMLElement = bestEl;
        const heading = el.querySelector("h2, h3") as HTMLElement | null;
        const target = heading ?? el;
        const tr = target.getBoundingClientRect();
        const tx = tr.left + tr.width / 2;
        const ty = tr.top + tr.height / 2;
        const angle = (Math.atan2(ty - ay, tx - ax) * 180) / Math.PI;
        setPointAngle(angle);
        setActiveLabel(heading?.textContent?.slice(0, 28) ?? "");
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed right-4 z-40 hidden md:block"
      style={{ top, x, perspective: 800 }}
    >
      <motion.div
        style={{ rotateY, rotateZ, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Outer glow */}
        <motion.div
          className="absolute -inset-6 rounded-full bg-sage-deep/20 blur-2xl"
          animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Pointer wrapper rotates to face the active section heading */}
        <motion.div
          animate={{ rotate: pointAngle }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
          className="relative h-14 w-14"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-[0_8px_18px_rgba(20,60,40,0.35)]">
            <defs>
              <linearGradient id="arrowGrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.55 0.09 160)" />
                <stop offset="55%" stopColor="oklch(0.42 0.07 160)" />
                <stop offset="100%" stopColor="oklch(0.78 0.09 50)" />
              </linearGradient>
              <linearGradient id="arrowShine" x1="0" x2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* 3D-style arrow shape pointing right */}
            <path
              d="M10 38 L58 38 L58 22 L92 50 L58 78 L58 62 L10 62 Z"
              fill="url(#arrowGrad)"
              stroke="oklch(0.30 0.05 160)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Highlight strip for 3D feel */}
            <path
              d="M14 42 L54 42 L54 32 L82 50 L54 68 L54 58 L14 58 Z"
              fill="url(#arrowShine)"
              opacity="0.45"
            />
          </svg>
        </motion.div>
        {/* Tiny floating label */}
        {activeLabel && (
          <motion.div
            key={activeLabel}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full border border-sage-deep/15 bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sage-deep/80 shadow-soft backdrop-blur"
          >
            {activeLabel}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ScrollArrowGuide;
