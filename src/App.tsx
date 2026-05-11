import React from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  About,
  MissionVision,
  Problem,
  Solution,
  Features,
  Gamification,
  Parents,
  Pillars,
  CTA,
  Footer,
} from "@/components/site/Sections";

function App() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden text-foreground selection:bg-sage-deep/20">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <MissionVision />
        <Problem />
        <Solution />
        <Features />
        <Gamification />
        <Parents />
        <Pillars />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
