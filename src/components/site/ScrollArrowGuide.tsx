import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * A dashed/dotted arrow that emerges from the Saral Vidhya logo border,
 * curls down the side of the page as the user scrolls, and points its
 * arrow-head at the heading of the section currently in view.
 */
export function ScrollArrowGuide({
  sectionIds = [
    "problem",
    "solution",
    "features",
    "gamification",
    "parents",
    "pillars",
    "cta",
  ],
}: {
  sectionIds?: string[];
}) {
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);
  const [logo, setLogo] = useState({ x: 120, y: 200, r: 90 });
  const [tip, setTip] = useState({ x: 120, y: 400 });
  const [pointAngle, setPointAngle] = useState(0);
  const [activeLabel, setActiveLabel] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setVw(w);
      setVh(h);

      // 1) Logo anchor = bottom-left edge of the hero logo image
      const logoEl = document.querySelector(
        "img[alt='Saral Vidhya']",
      ) as HTMLElement | null;
      let lx = 120,
        ly = 220,
        lr = 90;
      if (logoEl) {
        const r = logoEl.getBoundingClientRect();
        lx = r.left + r.width * 0.15; // left border area
        ly = r.top + r.height * 0.55;
        lr = Math.max(r.width, r.height) / 2;
      }
      setLogo({ x: lx, y: ly, r: lr });

      // 2) Scroll progress
      const scrolled = window.scrollY;
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const p = Math.min(1, Math.max(0, scrolled / max));
      setProgress(p);

      // 3) Tip travels down the LEFT rail with the user
      const tipX = Math.max(60, lx - 10);
      const tipY = ly + 80 + p * (h * 0.65);
      setTip({ x: tipX, y: Math.min(h - 60, tipY) });

      // 4) Find active section heading and compute angle
      let bestDist = Infinity;
      let bestEl: HTMLElement | null = null;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > h * 1.4) return;
        const d = Math.abs(r.top - h * 0.3);
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
        const ang = (Math.atan2(ty - tipY, tx - tipX) * 180) / Math.PI;
        setPointAngle(ang);
        setActiveLabel(heading?.textContent?.slice(0, 28) ?? "");
      } else {
        setActiveLabel("");
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

  if (!vw || !vh) return null;

  // Curly path from logo border -> tip, with two control points so it curls
  // in and out of the left rail as the user scrolls.
  const sx = logo.x;
  const sy = logo.y;
  const ex = tip.x;
  const ey = tip.y;
  const midY1 = sy + (ey - sy) * 0.3;
  const midY2 = sy + (ey - sy) * 0.7;
  const curlAmp = 70 + Math.sin(progress * Math.PI * 2) * 30;
  const c1x = Math.max(20, sx - curlAmp);
  const c2x = sx + curlAmp * 0.6;
  const path = `M ${sx} ${sy} C ${c1x} ${midY1}, ${c2x} ${midY2}, ${ex} ${ey}`;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 hidden md:block"
    >
      <svg
        width={vw}
        height={vh}
        viewBox={`0 0 ${vw} ${vh}`}
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="dashStroke" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.09 160)" />
            <stop offset="100%" stopColor="oklch(0.42 0.09 160)" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint shadow path for depth */}
        <path
          d={path}
          fill="none"
          stroke="oklch(0.55 0.09 160 / 0.18)"
          strokeWidth={6}
          strokeLinecap="round"
        />

        {/* Animated dashed/dotted line — like a hand-drawn pencil arrow */}
        <motion.path
          d={path}
          fill="none"
          stroke="url(#dashStroke)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeDasharray="2 8"
          filter="url(#softGlow)"
          animate={{ strokeDashoffset: [0, -40] }}
          transition={{ duration: 1.6, ease: "linear", repeat: Infinity }}
        />

        {/* Small dot marking the emergence point on the logo border */}
        <circle
          cx={sx}
          cy={sy}
          r={4}
          fill="oklch(0.55 0.09 160)"
          opacity={0.85}
        />
      </svg>

      {/* Arrow head at the tip — rotates to point at the active heading */}
      <motion.div
        className="absolute"
        animate={{ left: ex, top: ey }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <motion.div
          animate={{ rotate: pointAngle }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
          className="relative h-10 w-10"
          style={{ transformOrigin: "center" }}
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <path
              d="M15 50 L70 50"
              stroke="oklch(0.42 0.09 160)"
              strokeWidth={4}
              strokeLinecap="round"
              strokeDasharray="2 7"
            />
            <path
              d="M55 28 L88 50 L55 72 Z"
              fill="oklch(0.55 0.09 160)"
              stroke="oklch(0.30 0.05 160)"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {activeLabel && (
          <motion.div
            key={activeLabel}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-full border border-sage-deep/15 bg-white/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sage-deep/80 shadow-soft backdrop-blur"
          >
            {activeLabel}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default ScrollArrowGuide;
