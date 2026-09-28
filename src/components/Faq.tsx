import { useState } from "react";

const FAQS = [
  {
    q: "What if I actually wanted Harvard?",
    a: "That's a big feeling, and it's valid. Here's a smaller feeling to keep next to it: you are about to spend four years at a 300-year-old Ivy League university with a residential college system, secret societies, and its own handshake-level traditions. The ache fades. The Ivy on the diploma does not.",
  },
  {
    q: "Is Yale just Harvard with a gothic filter?",
    a: "We prefer \"Harvard, but warmer.\" Same age bracket, same famous alumni density, same podium at graduation. Also same football rivalry — except we win it sometimes, which Harvard's facilities cannot say for themselves lately.",
  },
  {
    q: "Will people know I'm a backup?",
    a: "Nobody asks. Genuinely. Adults ask what you studied, not whether it was your first choice. And the one person who does bring it up at a party is telling you far more about themselves than about you.",
  },
  {
    q: "Can I still say I went to an Ivy League school?",
    a: "Yes — out loud, at Thanksgiving, as many times as the stuffing lasts. Yale is a charter member of the actual Ivy League. The sentence \"I went to Yale\" requires no asterisk, no footnote, and no disclaimer.",
  },
  {
    q: "What if I get in off the waitlist later?",
    a: "Oh, honey. By then you'll have a favorite pizza place, a favorite courtyard, and a mascot-related opinion. Some doors close so that better doors with pizza behind them can open.",
  },
  {
    q: "Is New Haven safe?",
    a: "It's a city! It has neighborhoods that are lively, neighborhoods that are quiet, and a downtown full of students at all hours. Millions of people visit every year, and the pizza alone justifies basic situational awareness.",
  },
  {
    q: "How do I tell my parents?",
    a: "Lead with \"I got into Yale.\" There is no follow-up sentence required. Watch their faces do the thing where they reframe disappointment as pride in real time. It's a beautiful moment, honestly.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border-3 bg-card shadow-soft transition-colors ${
        isOpen ? "border-blush/60" : "border-transparent"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
      >
        <span className="font-display text-lg font-semibold text-foreground">{q}</span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-butter-soft text-xl font-bold text-foreground transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-relaxed text-foreground/70 sm:px-8">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-4 py-20 sm:py-24" id="frequently-asked-fears">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="font-display inline-block rounded-full bg-blush-soft px-5 py-2 text-sm font-semibold text-primary">
            Step 3: Voice the Fears
          </span>
          <h2 className="font-display mt-6 text-4xl font-semibold text-foreground sm:text-5xl">
            Frequently Asked Fears
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Asked (anonymously) by people exactly like you, and answered with
            an unreasonable amount of warmth.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
