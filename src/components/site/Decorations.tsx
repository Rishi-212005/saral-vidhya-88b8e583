import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function getElementCenter(el: HTMLElement | null) {
  if (!el) return { x: 0, y: 0 };
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2 + window.scrollX, y: r.top + r.height / 2 + window.scrollY };
}

export function ArrowRocket({ targetId = "features" }: { targetId?: string }) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const start = () => {
      const logo = document.querySelector("img[alt='Saral Vidhya']");
      const target = document.getElementById(targetId);
      if (!ref.current || !logo || !target) return;
      const startPos = getElementCenter(logo as HTMLElement);
      const endPos = getElementCenter(target);
      // compute relative to viewport
      const rect = ref.current.getBoundingClientRect();
      const offsetX = startPos.x - (rect.left + rect.width / 2);
      const offsetY = startPos.y - (rect.top + rect.height / 2);

      // set initial position near logo
      controls.set({ x: offsetX, y: offsetY, opacity: 1, rotate: 0 });

      // animate to target when scrolled to target
      const onScroll = () => {
        const tRect = target.getBoundingClientRect();
        if (tRect.top < window.innerHeight * 0.65) {
          const endOffsetX = endPos.x - (rect.left + rect.width / 2);
          const endOffsetY = endPos.y - (rect.top + rect.height / 2);
          controls.start({ x: endOffsetX, y: endOffsetY, rotate: 360, transition: { duration: 1.2, ease: "easeInOut" } });
        }
      };

      window.addEventListener("scroll", onScroll);
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    };
    // delay briefly for layout to settle
    const t = setTimeout(start, 300);
    return () => clearTimeout(t);
  }, [controls, targetId]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={controls}
      className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
      style={{ width: 60, height: 60 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full arrow-launch">
        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <path d="M10 80 L40 50 L30 45 L45 30 L50 35 L65 20 L70 25 L55 40 L60 45 L30 75 Z" fill="url(#g2)" stroke="#ffffff55" strokeWidth={0.8} />
      </svg>
    </motion.div>
  );
}

export function PaperCutOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden paper-cut">
      <svg className="absolute right-0 top-0 h-72 w-72 opacity-30 animate-float-slow" viewBox="0 0 200 200" preserveAspectRatio="none">
        <path d="M0,100 C40,120 80,60 200,40 L200,0 L0,0 Z" fill="#fff" opacity="0.03" />
      </svg>
      <svg className="absolute left-0 bottom-0 h-80 w-80 opacity-20 animate-float-slow" viewBox="0 0 200 200" preserveAspectRatio="none">
        <path d="M0,0 C40,40 120,20 200,80 L200,200 L0,200 Z" fill="#000" opacity="0.03" />
      </svg>
    </div>
  );
}

export function Book3D({ sections = ["about", "problem", "solution", "features"] }: { sections?: string[] }) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      // Get all sections and calculate which one is most in view
      const positions = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { top: Infinity, center: Infinity };
        const rect = el.getBoundingClientRect();
        const center = Math.abs(rect.top - window.innerHeight / 2);
        return { top: rect.top, center };
      });

      // Find section closest to viewport center
      const closestIndex = positions.reduce((iMin, x, i, arr) => (x.center < arr[iMin].center ? i : iMin), 0);
      setCurrentPage(closestIndex);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <div aria-hidden className="pointer-events-none fixed right-8 top-24 z-30 hidden xl:block">
      <div className="book-3d-container w-72 h-52 perspective-1000">
        {/* Book binding */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0a0e1a] via-[#0b1220] to-[#0a0e1a] shadow-lift" />

        {/* Pages - one for each section */}
        {sections.map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-2 rounded-md bg-gradient-to-br from-white/8 to-white/3 origin-left"
            animate={{
              rotateY: currentPage > idx ? 180 : 0,
              opacity: currentPage === idx ? 1 : 0.6,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              zIndex: sections.length - idx,
            }}
          >
            {/* Page shine */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Page number */}
            <div className="absolute bottom-4 right-4 text-white/20 text-xs font-mono">
              {idx + 1}
            </div>
          </motion.div>
        ))}

        {/* Spine glow */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent blur-sm" />
      </div>
    </div>
  );
}

export default function Decorations() {
  return null;
}
