import { createFileRoute } from "@tanstack/react-router";
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
import { ScrollArrowGuide } from "@/components/site/ScrollArrowGuide";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saral Vidhya — Learning Simplified" },
      {
        name: "description",
        content:
          "Saral Vidhya empowers students with adaptive, accessible, and engaging educational experiences powered by intelligent personalization.",
      },
      { property: "og:title", content: "Saral Vidhya — Learning Simplified" },
      {
        property: "og:description",
        content:
          "Democratizing education through personalized, AI-assisted learning for every student.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollArrowGuide />
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
