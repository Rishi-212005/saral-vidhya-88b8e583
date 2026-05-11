import React from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
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
