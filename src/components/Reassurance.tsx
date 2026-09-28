const REASSURANCES = [
  {
    emoji: "🌤️",
    title: "You're going to be okay",
    body: "Truly. Statistically, people who attend their safety school go on to live full, rich lives — often even happier ones, unburdened by expectations. You're welcome.",
  },
  {
    emoji: "🏛️",
    title: "Yale is also old",
    body: "Yale was founded in 1701, which is practically colonial. The buildings are gothic, the gates are wrought-iron, and yes — you'll absolutely look intellectual walking through them.",
  },
  {
    emoji: "🍕",
    title: "The pizza is genuinely elite",
    body: "New Haven apizza has a cult following for a reason. Harvard Square has... a Greasy Spoon with a line. Which is fine. We're not comparing. We would never compare.",
  },
  {
    emoji: "💙",
    title: "Someday you'll prefer it this way",
    body: "In ten years nobody asks where you went. They ask how you're doing. And you'll be doing great, with lower tuition-adjacent stress and a really excellent mascot.",
  },
];

export function Reassurance() {
  return (
    <section className="px-4 py-20 sm:py-24" id="its-going-to-be-okay">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="font-display inline-block rounded-full bg-mint-soft px-5 py-2 text-sm font-semibold text-secondary-foreground">
            Step 1: Breathe
          </span>
          <h2 className="font-display mt-6 text-4xl font-semibold text-foreground sm:text-5xl">
            It's going to be okay.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            We know that's what everyone keeps telling you, but this time it's
            on an official website, so it counts.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {REASSURANCES.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-4xl border-3 p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1 ${
                i % 4 === 0
                  ? "border-blush/40 bg-blush-soft"
                  : i % 4 === 1
                    ? "border-mint/40 bg-mint-soft"
                    : i % 4 === 2
                      ? "border-butter/50 bg-butter-soft"
                      : "border-lilac/40 bg-lilac-soft"
              }`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-card text-3xl shadow-soft">
                {item.emoji}
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/70">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
