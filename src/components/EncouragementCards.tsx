import { useRef } from "react";
import { toPng } from "html-to-image";

const CARDS = [
  {
    id: "card-selective",
    quote: "Rejected from Harvard?\n\nCongratulations on your very selective taste.",
    tag: "You're one of us now",
    bg: "bg-blush-soft",
    accent: "text-primary",
    chip: "bg-card",
    rotate: "sm:-rotate-2",
  },
  {
    id: "card-redirected",
    quote: "You didn't get rejected.\n\nYou got redirected. To Yale.",
    tag: "A gentle correction",
    bg: "bg-mint-soft",
    accent: "text-secondary-foreground",
    chip: "bg-card",
    rotate: "sm:rotate-1",
  },
  {
    id: "card-pizza",
    quote: "New Haven: where your safety school becomes your personality.\n\nHonestly? Great personality.",
    tag: "Apizza era begins",
    bg: "bg-butter-soft",
    accent: "text-cocoa",
    chip: "bg-card",
    rotate: "sm:-rotate-1",
  },
  {
    id: "card-ivy",
    quote: "Say it with me: \"I went to an Ivy League school.\"\n\nNo asterisk required.",
    tag: "Affirmation №1",
    bg: "bg-lilac-soft",
    accent: "text-accent-foreground",
    chip: "bg-card",
    rotate: "sm:rotate-2",
  },
];

function Card({ card, onDownload }: { card: (typeof CARDS)[number]; onDownload: (id: string) => void }) {
  return (
    <div className="flex flex-col items-center">
      <div
        id={card.id}
        className={`w-full max-w-sm rounded-4xl border-3 border-cocoa/10 ${card.bg} ${card.rotate} p-8 shadow-float transition-transform duration-300 hover:scale-[1.02] hover:rotate-0`}
      >
        <span className={`font-display inline-block rounded-full ${card.chip} px-4 py-1.5 text-xs font-semibold uppercase tracking-widest shadow-soft ${card.accent}`}>
          {card.tag}
        </span>
        <p className="font-display mt-6 whitespace-pre-line text-2xl font-semibold leading-snug text-foreground">
          {card.quote}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-coral bg-primary/80" />
          <div>
            <div className="font-display text-sm font-semibold text-foreground">
              Yale: The Backup Plan
            </div>
            <div className="text-xs text-muted-foreground">
              sending you love, in pastel
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => onDownload(card.id)}
        className="font-display mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105 active:scale-95"
      >
        Download card ⬇
      </button>
    </div>
  );
}

export function EncouragementCards() {
  const downloading = useRef<string | null>(null);

  const download = async (id: string) => {
    if (downloading.current) return;
    downloading.current = id;
    try {
      const node = document.getElementById(id);
      if (!node) return;
      const dataUrl = await toPng(node, {
        pixelRatio: 2,
        backgroundColor: "#FDF8F0",
      });
      const link = document.createElement("a");
      link.download = `${id}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      downloading.current = null;
    }
  };

  return (
    <section className="bg-mint-soft px-4 py-20 sm:py-24" id="encouragement-cards">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="font-display inline-block rounded-full bg-card px-5 py-2 text-sm font-semibold text-secondary-foreground shadow-soft">
            Step 4: Pay It Forward
          </span>
          <h2 className="font-display mt-6 text-4xl font-semibold text-foreground sm:text-5xl">
            Encouragement Cards
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            For a friend (or yourself) in the same boat. Download, text, or
            leave one somewhere a sad Harvard hopeful will find it.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {CARDS.map((card) => (
            <Card key={card.id} card={card} onDownload={download} />
          ))}
        </div>
      </div>
    </section>
  );
}
