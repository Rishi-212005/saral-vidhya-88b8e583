import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import navLogo from "@/assets/saral-vidhya-logo-nav.png";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "The Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Parents", href: "#parents" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className={`flex items-center gap-6 transition-all duration-500 ${
            scrolled
              ? "rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-soft"
              : "bg-transparent"
          } ${scrolled ? "px-4 py-2.5" : "px-0 py-2"}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2.5 shrink-0"
          >
            <motion.img
              src={navLogo}
              alt="Saral Vidhya"
              className="h-9 w-auto object-contain"
              whileHover={{ rotate: -8, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <span className="font-display text-lg tracking-tight text-primary">
              Saral Vidhya
            </span>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {NAV.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                className="relative text-sm text-foreground/70 transition-colors hover:text-primary"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ y: -1 }}
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-sage-deep transition-all duration-300 hover:w-full" />
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="#cta"
            className="hidden shrink-0 overflow-hidden rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-soft md:inline-flex relative group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Get Started</span>
          </motion.a>

          {/* Mobile menu button */}
          <button
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/80 text-sage-deep md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl glass shadow-lift p-4 md:hidden"
            >
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  className="block rounded-xl px-4 py-3 text-sm text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {n.label}
                </motion.a>
              ))}
              <a
                href="#cta"
                className="mt-2 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
