import type * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

import heroBulldog from "@/assets/hero-bulldog.png";
import { Countdown } from "@/components/Countdown";
import { Reassurance } from "@/components/Reassurance";
import { Itinerary } from "@/components/Itinerary";
import { Faq } from "@/components/Faq";
import { EncouragementCards } from "@/components/EncouragementCards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yale: The Backup Plan — It's Going to Be Okay" },
      {
        name: "description",
        content:
          "A sunny, gently condescending guide to what to do if Harvard doesn't work out. Countdown to The Game, a day in New Haven, frequently asked fears, and shareable encouragement cards.",
      },
      { property: "og:title", content: "Yale: The Backup Plan" },
      {
        property: "og:description",
        content:
          "What to do if Harvard doesn't work out — a sunny, gently condescending guide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <header className="relative overflow-hidden px-4 pb-20 pt-8 sm:pt-12">
      {/* floating pastel blobs */}
      <div className="animate-float pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-blush-soft blur-2xl" />
      <div className="animate-float-delayed pointer-events-none absolute -right-16 top-64 h-64 w-64 rounded-full bg-mint-soft blur-2xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-butter-soft opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <nav className="flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-foreground">
            Yale <span className="text-primary">🩹</span>
          </span>
          <div className="hidden gap-6 text-sm font-semibold text-muted-foreground sm:flex">
            <a href="#its-going-to-be-okay" className="transition-colors hover:text-foreground">Reassurance</a>
            <a href="#a-day-in-new-haven" className="transition-colors hover:text-foreground">New Haven</a>
            <a href="#frequently-asked-fears" className="transition-colors hover:text-foreground">Fears</a>
            <a href="#encouragement-cards" className="transition-colors hover:text-foreground">Cards</a>
          </div>
        </nav>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="font-display inline-block rotate-[-1.5deg] rounded-full bg-butter px-5 py-2 text-sm font-semibold text-cocoa shadow-soft">
              A gentle guide for the approximately rejected 💛
            </span>
            <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              It's okay.
              <br />
              <span className="text-primary">Yale</span> is right
              <br />
              over there.
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground lg:mx-0">
              So Harvard didn't work out. Deep breaths. You're now holding a
              ticket to the world's most prestigious consolation prize — and
              this little site will walk you through it, one sunny step at a
              time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#its-going-to-be-okay"
                className="font-display rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-float transition-transform hover:scale-105 active:scale-95"
              >
                Begin healing ✨
              </a>
              <a
                href="#encouragement-cards"
                className="font-display rounded-full border-3 border-cocoa/15 bg-card px-8 py-4 text-base font-semibold text-foreground shadow-soft transition-transform hover:scale-105 active:scale-95"
              >
                Send a hug
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <img
              src={heroBulldog}
              alt="A serene bulldog resting on a pastel beanbag"
              width={1024}
              height={1024}
              className="w-full rounded-4xl border-3 border-cocoa/10 shadow-float"
            />
            <div className="animate-float font-display absolute -left-4 top-6 rotate-[-4deg] rounded-2xl bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-float sm:-left-8">
              no stress 🌸
            </div>
            <div className="animate-float-delayed font-display absolute -right-2 bottom-8 rotate-[3deg] rounded-2xl bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-float sm:-right-6">
              first choice #2 ✌️
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <Countdown />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-butter-soft px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-2xl font-semibold text-foreground">
          You've got this. 💙
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Eli who? Exactly. See you in New Haven.
        </p>
        <div className="mx-auto mt-8 max-w-lg dotted-divider" />
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          SATIRE. A Harvard Lampoon parody. Not affiliated with Harvard or Yale.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div className="mx-auto max-w-4xl px-4 dotted-divider" />
      <Reassurance />
      <Itinerary />
      <div className="mx-auto max-w-4xl px-4 dotted-divider" />
      <Faq />
      <EncouragementCards />
      <Footer />
    </div>
  );
}
