import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem, ParallaxSection } from "./motion";
import { ArrowRocket, PaperCutOverlay, Book3D } from "./Decorations";
import {
  BookOpen,
  Sparkles,
  Globe2,
  Users,
  AlertCircle,
  Map,
  Eye,
  Repeat,
  Brain,
  MessageCircle,
  Layers,
  Trophy,
  HeartHandshake,
  Wallet,
  Languages,
  GraduationCap,
  Bell,
  LineChart,
  FileText,
  ShieldCheck,
  Lightbulb,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import logo from "@/assets/saral-vidhya-logo-clean.png";

/* ─── Shared Section Header ─── */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && (
        <motion.div
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-sage-deep/15 bg-sage-deep/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-sage-deep/70"
          whileHover={{ scale: 1.05 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sage-deep/50" />
          {eyebrow}
        </motion.div>
      )}
      <h2 className="text-balance text-4xl leading-tight text-primary md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/70">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/* ─── Animated divider between sections ─── */
function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-1">
      <motion.div
        className="h-8 w-[1px] bg-gradient-to-b from-transparent via-sage-deep/20 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}

/* ════════════════════════════════════════════
   ABOUT
   ════════════════════════════════════════════ */
export function About() {
  const points = [
    { icon: BookOpen, label: "Personalized Learning Paths", color: "bg-sage/30" },
    { icon: Brain, label: "Adaptive AI Assistance", color: "bg-sky/30" },
    { icon: Globe2, label: "Accessible Across Regions", color: "bg-peach/30" },
    { icon: Users, label: "Designed for Modern Learners", color: "bg-sun/30" },
  ];
  return (
    <>
      <SectionDivider />
      <section id="about" className="relative py-12 md:py-16">
        {/* Decorative background */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute right-0 top-20 h-96 w-96 rounded-full bg-sage/10 blur-3xl"
            animate={{ x: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <Reveal variant="fadeLeft">
            <div className="inline-flex items-center gap-2 rounded-full border border-sage-deep/15 bg-sage-deep/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-sage-deep/70">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-deep/50" />
              About
            </div>
            <h2 className="mt-4 text-balance text-4xl leading-tight text-primary md:text-5xl">
              Education That Adapts to{" "}
              <em className="not-italic text-sage-deep">Every Learner</em>
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/70">
              Traditional education often assumes every student learns the same
              way. Saral Vidhya reimagines learning through intelligent
              personalization, adaptive guidance, and engaging educational
              experiences designed for every student's pace and potential.
            </p>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <StaggerItem key={p.label}>
                <motion.div
                  className="group flex h-full cursor-default items-start gap-4 rounded-2xl border border-border/70 bg-white p-5 shadow-soft transition-all"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 2px 4px oklch(0.3 0.05 160 / 0.05), 0 24px 60px -20px oklch(0.3 0.05 160 / 0.18)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${p.color} text-sage-deep transition-colors duration-500 group-hover:bg-sage-deep group-hover:text-primary-foreground`}
                    whileHover={{ rotate: 8 }}
                  >
                    <p.icon className="h-5 w-5" />
                  </motion.div>
                  <div className="pt-1.5 text-sm font-medium text-foreground/85">
                    {p.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════
   MISSION / VISION
   ════════════════════════════════════════════ */
export function MissionVision() {
  const items = [
    {
      icon: Target,
      eyebrow: "Our Mission",
      text: "To make high-quality, personalized education accessible to every student regardless of geography, background, or learning ability.",
      gradient: "from-sage/20 via-sage/5 to-transparent",
    },
    {
      icon: Lightbulb,
      eyebrow: "Our Vision",
      text: "To create a future where learning becomes more adaptive, engaging, and student-centered through intelligent educational technology.",
      gradient: "from-peach/20 via-peach/5 to-transparent",
    },
  ];
  return (
    <section className="relative py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.eyebrow} delay={i * 0.15} variant="scaleIn">
            <motion.div
              className="group relative h-full overflow-hidden rounded-3xl bg-soft p-10 shadow-soft"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated gradient orb */}
              <motion.div
                aria-hidden
                className={`absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br ${it.gradient} blur-2xl`}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
              />
              <motion.div
                className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sage-deep shadow-soft"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <it.icon className="h-6 w-6" />
              </motion.div>
              <div className="relative text-xs font-medium uppercase tracking-[0.22em] text-sage-deep/70">
                {it.eyebrow}
              </div>
              <p className="relative mt-3 text-pretty font-display text-2xl leading-snug text-primary md:text-3xl">
                {it.text}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   PROBLEM
   ════════════════════════════════════════════ */
export function Problem() {
  const cards: { icon: LucideIcon; title: string; desc: string; accent: string }[] = [
    {
      icon: AlertCircle,
      title: "One-Size-Fits-All Approach",
      desc: "All students get the same textbook, pace, and difficulty, whether they are struggling or excelling. This leaves average and below-average students behind, as the material is never adapted to their level.",
      accent: "bg-peach/40",
    },
    {
      icon: Map,
      title: "Urban–Rural Resource Gap",
      desc: "Students from smaller towns and rural regions frequently lack the quality tutors, coaching centers, and digital learning tools that are readily available to their urban counterparts.",
      accent: "bg-sky/40",
    },
    {
      icon: Eye,
      title: "Passive, Boring Learning",
      desc: "Traditional study materials are just static blocks of text i.e. no mind maps, no flashcards, no adaptive learning paths, and no gamification. Nothing that makes students excited to open their textbooks and learn.",
      accent: "bg-sun/40",
    },
    {
      icon: Repeat,
      title: "No Consistent Practice Habit",
      desc: "Students cram intensely before exams and forget everything soon after. There is no system in place to build strong, daily learning habits.",
      accent: "bg-sage/40",
    },
  ];
  return (
    <>
      <SectionDivider />
      <section id="problem" className="relative py-8 md:py-14 overflow-hidden bg-gradient-to-b from-transparent via-peach/5 to-transparent">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-peach/10 blur-3xl"
            animate={{ x: [-20, 20, -20] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="The Problem"
            title="The Problem — The Gaps in Current Education"
            subtitle="Traditional systems are failing our students by imposing rigid formats and ignoring individual learning curves."
          />

          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2 [perspective:1400px]">
            {cards.map((c, i) => (
              <StaggerItem key={c.title}>
                <motion.article
                  className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-10 shadow-soft"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{
                    rotateX: 6,
                    rotateY: i % 2 === 0 ? -8 : 8,
                    y: -10,
                    boxShadow: "0 2px 4px oklch(0.3 0.05 160 / 0.05), 0 30px 70px -20px oklch(0.3 0.05 160 / 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  <div
                    aria-hidden
                    className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${c.accent} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60`}
                  />
                  <div className="absolute right-6 top-6 font-display text-6xl text-primary/5 transition-colors duration-500 group-hover:text-primary/10">
                    0{i + 1}
                  </div>
                  <motion.div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${c.accent} text-sage-deep`}
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <c.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="relative text-2xl text-primary md:text-3xl" style={{ transform: "translateZ(20px)" }}>{c.title}</h3>
                  <p className="relative mt-3 text-pretty text-base leading-relaxed text-foreground/75 md:text-lg">
                    {c.desc}
                  </p>
                  <div className="mt-6 h-[2px] w-0 rounded-full bg-gradient-to-r from-sage-deep/40 to-peach/40 transition-all duration-700 group-hover:w-full" />
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════
   SOLUTION
   ════════════════════════════════════════════ */
export function Solution() {
  const items: { icon: LucideIcon; title: string; desc: string }[] = [
    {
      icon: Sparkles,
      title: "The Digital Guide",
      desc: "An AI-powered companion that complements, rather than replaces professional educators. Personalized support for every learner.",
    },
    {
      icon: Users,
      title: "Personas-Based Learning",
      desc: "Four distinct student personas to tailor content delivery i.e. Weak, Below Average, Average & Above Average.",
    },
    {
      icon: Layers,
      title: "Beyond Text",
      desc: "Multi-modal content delivery i.e. podcasts, videos, and interactive images/text.",
    },
    {
      icon: MessageCircle,
      title: "Ask Feature",
      desc: "Real-time doubt clarification via voice or text. Personalized AI Tutor available 24/7 at a click of button",
    },
  ];
  return (
    <>
      <SectionDivider />
      <section id="solution" className="relative overflow-hidden py-8 md:py-14 bg-gradient-to-b from-transparent via-sage/8 to-transparent">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-sage/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="The Solution"
            title="The Saral Vidhya Solution"
            subtitle="An AI-powered companion that complements professional educators, driving results through tailored experiences."
          />

          <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2 [perspective:1400px]">
            {items.map((it, i) => (
              <StaggerItem key={it.title}>
                <motion.article
                  className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-9 shadow-soft"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{
                    rotateX: 5,
                    rotateY: i % 2 === 0 ? 8 : -8,
                    y: -8,
                    boxShadow: "0 2px 4px oklch(0.3 0.05 160 / 0.05), 0 30px 70px -20px oklch(0.3 0.05 160 / 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-sage/30 to-transparent blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  />
                  <div className="relative flex items-start gap-5" style={{ transform: "translateZ(24px)" }}>
                    <motion.div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sage/25 text-sage-deep"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <it.icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl text-primary md:text-3xl">{it.title}</h3>
                      <p className="mt-2 text-pretty text-base leading-relaxed text-foreground/75 md:text-lg">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 h-[2px] w-0 rounded-full bg-gradient-to-r from-sage-deep/40 to-peach/40 transition-all duration-700 group-hover:w-full" />
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════
   FEATURES (WHY)
   ════════════════════════════════════════════ */
export function Features() {
  const cards: { icon: LucideIcon; title: string; desc: string; accent: string }[] = [
    { icon: Target, title: "Tailor-Made Solutions", desc: "Dynamic profiling during onboarding to understand baseline learning capabilities and create personalized learning paths.", accent: "from-sage/30 to-transparent" },
    { icon: Wallet, title: "Affordability", desc: "High-end AI accessibility for every student, regardless of geography or economic background.", accent: "from-peach/30 to-transparent" },
    { icon: Languages, title: "Localization", desc: "Support for multiple languages and regional accents to ensure local relevance.", accent: "from-sky/30 to-transparent" },
    { icon: GraduationCap, title: "Exam Readiness", desc: "Focused exam preparation modules tailored for internal and external examinations.", accent: "from-sun/30 to-transparent" },
  ];
  return (
    <>
      <SectionDivider />
      <section id="features" className="relative py-8 md:py-14 bg-gradient-to-b from-transparent via-sky/8 to-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Features"
            title="Unique Selling Propositions"
          />

          <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2 [perspective:1400px]">
            {cards.map((c, i) => (
              <StaggerItem key={c.title}>
                <motion.article
                  className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-9 shadow-soft cursor-default"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{
                    rotateX: 6,
                    rotateY: i % 2 === 0 ? -8 : 8,
                    y: -10,
                    boxShadow: "0 2px 4px oklch(0.3 0.05 160 / 0.05), 0 30px 70px -20px oklch(0.3 0.05 160 / 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                >
                  <motion.div
                    aria-hidden
                    className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.accent} blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                  />
                  <div className="relative" style={{ transform: "translateZ(28px)" }}>
                    <motion.div
                      className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-sage-deep"
                      whileHover={{ rotate: 12, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <c.icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-2xl text-primary md:text-3xl">{c.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-foreground/75 md:text-lg">
                      {c.desc}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-xs font-medium text-sage-deep/0 transition-colors duration-500 group-hover:text-sage-deep">
                      Learn more <ArrowRight className="h-3 w-3 -translate-x-2 transition-transform duration-500 group-hover:translate-x-0" />
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════
   COMPETITIVE BY DESIGN  (replaces Gamification, keeps rotating badge)
   ════════════════════════════════════════════ */
export function Gamification() {
  const items = [
    {
      num: "01",
      title: "Dynamic Calibration",
      desc: "The system automatically upgrades or downgrades students' subject-wise personas based on real-time learning and performance.",
    },
    {
      num: "02",
      title: "Competitive Experience",
      desc: "Student leaderboards and badges designed to foster competition and greater engagement with learning content.",
    },
    {
      num: "03",
      title: "Balanced Usage",
      desc: "Designed for 8-10 hours per week to maximize learning.",
    },
  ];

  return (
    <>
      <SectionDivider />
      <section
        id="gamification"
        className="relative overflow-hidden py-8 md:py-14 bg-gradient-to-b from-transparent via-sage/8 to-transparent"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-sage/15 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-peach/15 blur-3xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Unique Selling Propositions"
            title="Competitive by Design"
            subtitle="Adaptive, motivating, and balanced — built to keep every learner thriving."
          />

          <div className="mt-12 grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            {/* Numbered list cards */}
            <StaggerGroup className="space-y-5">
              {items.map((it, i) => (
                <StaggerItem key={it.title}>
                  <motion.div
                    className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-7 shadow-soft cursor-default"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{
                      y: -6,
                      rotateY: 4,
                      rotateX: -3,
                      boxShadow:
                        "0 2px 4px oklch(0.3 0.05 160 / 0.05), 0 30px 70px -20px oklch(0.3 0.05 160 / 0.22)",
                    }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  >
                    <div className="text-xs font-medium tracking-[0.22em] text-sage-deep/60">
                      {it.num}
                    </div>
                    <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-sage-deep/30 via-peach/30 to-transparent" />
                    <h3 className="mt-4 text-2xl text-primary md:text-3xl">{it.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-foreground/75 md:text-lg">
                      {it.desc}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            {/* Rotating badge — kept animation, renamed */}
            <Reveal variant="scaleIn" className="flex items-center justify-center">
              <div className="relative h-64 w-64 [perspective:1000px]">
                <motion.div
                  className="absolute inset-0 rounded-full border-[6px] border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(135deg, var(--sage-deep), var(--peach), var(--sage-deep)) 1",
                    borderRadius: "9999px",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-6 rounded-full bg-gradient-to-br from-white to-cream shadow-lift"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-full"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Trophy className="h-10 w-10 text-sage-deep" />
                    <div className="mt-2 font-display text-2xl text-primary">
                      Rank Up
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-full bg-cta text-primary-foreground"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <Sparkles className="h-12 w-12" />
                  </div>
                </motion.div>
                <motion.div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-full bg-sage/30 blur-3xl"
                  animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Rotating Diamond Badge (re-usable, inspired by 4th visual) ─── */
function RotatingDiamondBadge({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="relative h-32 w-32 shrink-0 [perspective:800px]">
      {/* Rotating diamond frame */}
      <motion.div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="h-24 w-24 border-[2px] rotate-45"
          style={{
            borderImage:
              "linear-gradient(135deg, var(--sage-deep), var(--peach), var(--sage-deep)) 1",
          }}
        />
      </motion.div>
      {/* Soft glow */}
      <motion.div
        aria-hidden
        className="absolute inset-3 -z-10 rounded-full bg-sage/25 blur-2xl"
        animate={{ opacity: [0.4, 0.75, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      {/* Center oval card */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-20 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[50%] bg-gradient-to-br from-white to-cream shadow-lift"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.06 }}
      >
        <Icon className="h-4 w-4 text-sage-deep" />
        <div className="mt-1 font-display text-[11px] text-primary">{label}</div>
      </motion.div>
    </div>
  );
}

/* ════════════════════════════════════════════
   PARENTAL ENGAGEMENT
   ════════════════════════════════════════════ */
export function Parents() {
  const points: { icon: LucideIcon; title: string; desc: string }[] = [
    { icon: Bell, title: "Real-Time Updates", desc: "Parents receive timely notifications and learning progress insights." },
    { icon: LineChart, title: "Performance Analysis", desc: "Detailed academic observations help identify strengths and areas of improvement." },
    { icon: FileText, title: "Progress Reporting", desc: "Clear and simplified reports provide a complete overview of student growth." },
  ];
  return (
    <>
      <SectionDivider />
      <section id="parents" className="relative py-8 md:py-14 overflow-hidden bg-gradient-to-b from-transparent via-sun/8 to-transparent">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-peach/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-5 md:items-center">
          <Reveal className="md:col-span-2" variant="fadeLeft">
            <div className="inline-flex items-center gap-2 rounded-full border border-sage-deep/15 bg-sage-deep/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-sage-deep/70">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-deep/50" />
              For Parents
            </div>
            <h2 className="mt-4 text-balance text-4xl leading-tight text-primary md:text-5xl">
              Parental Engagement,{" "}
              <em className="not-italic text-sage-deep">Simplified</em>
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/70">
              Helping parents stay connected with their child's educational
              journey through meaningful insights and progress tracking.
            </p>
          </Reveal>

          <StaggerGroup className="space-y-3 md:col-span-3 [perspective:1200px]">
            {points.map((p, i) => (
              <StaggerItem key={p.title}>
                <motion.div
                  className="group flex items-start gap-5 rounded-3xl border border-border/70 bg-card p-7 shadow-soft cursor-default"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{
                    y: -6,
                    rotateY: 4,
                    rotateX: -3,
                    boxShadow: "0 2px 4px oklch(0.3 0.05 160 / 0.05), 0 30px 70px -20px oklch(0.3 0.05 160 / 0.22)",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <motion.div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-peach/30 text-sage-deep"
                    whileHover={{ rotate: -8, scale: 1.15 }}
                    style={{ transform: "translateZ(24px)" }}
                  >
                    <p.icon className="h-6 w-6" />
                  </motion.div>
                  <div style={{ transform: "translateZ(16px)" }}>
                    <h3 className="text-xl text-primary md:text-2xl">{p.title}</h3>
                    <p className="mt-1.5 text-base leading-relaxed text-foreground/75">
                      {p.desc}
                    </p>
                  </div>
                  <div className="ml-auto flex items-center pt-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <CheckCircle2 className="h-5 w-5 text-sage-deep/50" />
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════
   STRATEGIC PILLARS
   ════════════════════════════════════════════ */
export function Pillars() {
  const cards: { emoji: string; icon: LucideIcon; title: string; desc: string; tint: string; ring: string }[] = [
    {
      emoji: "🧠",
      icon: Brain,
      title: "Student Psychology",
      desc: 'Content and UI/UX developed in consultation with student psychologists to suit the needs of "Gen Z / Alpha" learners.',
      tint: "from-sage/30 via-sage/10 to-transparent",
      ring: "hover:border-sage/60",
    },
    {
      emoji: "💰",
      icon: Wallet,
      title: "Replacement for Tuitions",
      desc: "A cost-effective alternative that reduces expenses for parents and saves students time and effort",
      tint: "from-peach/40 via-peach/10 to-transparent",
      ring: "hover:border-peach/60",
    },
    {
      emoji: "🔒",
      icon: ShieldCheck,
      title: "Compliance & Privacy",
      desc: 'Strictly sticking to syllabus requirements with "private-to-customer" data models and legal compliance.',
      tint: "from-sky/40 via-sky/10 to-transparent",
      ring: "hover:border-sky/60",
    },
  ];
  return (
    <>
      <SectionDivider />
      <section id="pillars" className="relative py-10 md:py-16 overflow-hidden bg-gradient-to-b from-transparent via-sage/8 to-transparent">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-10 top-10 h-72 w-72 rounded-full bg-sage/10 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-peach/15 blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
            transition={{ duration: 14, repeat: Infinity }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Why It Matters"
            title="Strategic Pillars"
          />

          <div className="mt-10 flex justify-center">
            <RotatingDiamondBadge icon={Target} label="Achieve" />
          </div>

          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3 [perspective:1400px]">
            {cards.map((c, i) => (
              <StaggerItem key={c.title}>
                <motion.article
                  className={`group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-8 shadow-soft transition-colors duration-500 ${c.ring}`}
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{
                    rotateX: 6,
                    rotateY: -8,
                    y: -10,
                    boxShadow: "0 2px 4px oklch(0.3 0.05 160 / 0.05), 0 30px 70px -20px oklch(0.3 0.05 160 / 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  {/* Tinted gradient orb */}
                  <motion.div
                    aria-hidden
                    className={`absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br ${c.tint} blur-2xl`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 9, repeat: Infinity, delay: i * 1.2 }}
                  />
                  {/* Rotating outline ring */}
                  <motion.div
                    aria-hidden
                    className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-sage-deep/10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative" style={{ transform: "translateZ(28px)" }}>
                    <div className="mb-5 flex items-center gap-3">
                      <motion.div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-soft"
                        whileHover={{ rotate: 14, scale: 1.12 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span aria-hidden>{c.emoji}</span>
                      </motion.div>
                      <c.icon className="h-5 w-5 text-sage-deep/60" />
                    </div>
                    <h3 className="text-2xl text-primary">{c.title}</h3>
                    <p className="mt-3 text-pretty leading-relaxed text-foreground/75">
                      {c.desc}
                    </p>
                  </div>
                  <div className="mt-6 h-[2px] w-0 rounded-full bg-gradient-to-r from-sage-deep/40 to-peach/40 transition-all duration-700 group-hover:w-full" />
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════
   FINAL CTA
   ════════════════════════════════════════════ */
export function CTA() {
  return (
    <>
      <SectionDivider />
      <section id="cta" className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal variant="scaleIn">
            <div className="relative overflow-hidden rounded-[2rem] bg-cta animate-gradient px-8 py-20 text-center shadow-lift md:px-16 md:py-28">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <motion.div
                  className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"
                  animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                  transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-8 right-12 h-56 w-56 rounded-full bg-peach/30 blur-3xl"
                  animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                  transition={{ duration: 15, repeat: Infinity }}
                />
                {/* Orbiting dots */}
                <motion.div
                  className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "0 -120px" }}
                />
              </div>
              <div className="relative">
                <motion.h2
                  className="mx-auto max-w-3xl text-balance text-4xl leading-tight text-primary-foreground md:text-6xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Ready to Transform Learning?
                </motion.h2>
                <motion.p
                  className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                >
                  Join Saral Vidhya in building a more adaptive and engaging
                  educational future.
                </motion.p>
                <motion.div
                  className="mt-10"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.a
                    href="mailto:admin@saralvidhya.com"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-medium text-primary shadow-lift"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sage/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative">Get Started</span>
                    <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════ */
export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/70 bg-cream/60 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <motion.div
            className="flex items-center gap-2.5"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={logo}
              alt="Saral Vidhya"
              className="h-10 w-10 object-contain"
            />
            <span className="font-display text-lg text-primary">Saral Vidhya</span>
          </motion.div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
            Empowering students through personalized and accessible learning
            experiences.
          </p>
          <a
            href="mailto:admin@saralvidhya.com"
            className="group mt-5 inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline"
          >
            admin@saralvidhya.com
            <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
          </a>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-sage-deep/70">
            Quick Links
          </div>
          <ul className="mt-4 space-y-2.5 text-sm text-foreground/75">
            {["Home", "About", "Features", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="group inline-flex items-center gap-1 transition-colors hover:text-primary"
                >
                  <span className="h-0 w-0 rounded-full bg-sage-deep transition-all duration-300 group-hover:h-1 group-hover:w-1" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-sage-deep/70">
            Features
          </div>
          <ul className="mt-4 space-y-2.5 text-sm text-foreground/75">
            {[
              "Personalized Learning",
              "Gamification",
              "Adaptive Guidance",
              "Parent Insights",
            ].map((l) => (
              <li key={l}>
                <a
                  href="#features"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-primary"
                >
                  <span className="h-0 w-0 rounded-full bg-sage-deep transition-all duration-300 group-hover:h-1 group-hover:w-1" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border/60 px-6 pt-6 text-xs text-foreground/55">
        © {new Date().getFullYear()} Saral Vidhya. Learning Simplified.
      </div>
    </footer>
  );
}
