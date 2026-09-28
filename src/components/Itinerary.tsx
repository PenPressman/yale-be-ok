const ITINERARY = [
  {
    time: "9:00 AM",
    emoji: "☕",
    title: "Wake up, gently",
    body: "Stretch. Journal, if that's your thing. Today is about discovering everything Yale has that Harvard doesn't — mostly by walking slightly slower so the feelings can catch up.",
    color: "bg-butter-soft border-butter/50",
  },
  {
    time: "10:30 AM",
    emoji: "🚶",
    title: "Old Campus stroll",
    body: "Wander the gothic courtyards and murmur \"the light on the limestone is remarkable\" to no one in particular. Bonus points if a tour group overhears you.",
    color: "bg-mint-soft border-mint/50",
  },
  {
    time: "12:30 PM",
    emoji: "🍕",
    title: "Lunch: apizza, obviously",
    body: "Frank Pepe's. Sally's. Modern. The word \"char\" will enter your vocabulary permanently. This is the moment the backup plan starts feeling like the main plan.",
    color: "bg-blush-soft border-blush/40",
  },
  {
    time: "2:30 PM",
    emoji: "🖼️",
    title: "Pretend to appreciate modern art",
    body: "Yale University Art Gallery is free and world-class. Stand thoughtfully in front of a Rothko. Nod once. You now have an arts personality, and it costs nothing.",
    color: "bg-lilac-soft border-lilac/40",
  },
  {
    time: "4:00 PM",
    emoji: "📚",
    title: "Sterling Library awe session",
    body: "It has 15 million volumes and a cathedral reading room. Sit down. Open a book. Leave in twenty minutes — you did it for the ambience, and the ambience delivered.",
    color: "bg-peach/40 border-peach",
  },
  {
    time: "7:00 PM",
    emoji: "🌅",
    title: "Sunset on East Rock",
    body: "Hike (or drive — we're not judging, we're flexible) to the summit for a view of the whole city you almost didn't choose. Feel something complicated. It's fine.",
    color: "bg-butter-soft border-butter/50",
  },
  {
    time: "9:00 PM",
    emoji: "🐶",
    title: "Meet Handsome Dan",
    body: "Well — see him online, at least. Yale's live mascot lineage dates to 1889, making him senior to your entire extended family. Good night. You did great today.",
    color: "bg-mint-soft border-mint/50",
  },
];

export function Itinerary() {
  return (
    <section className="bg-lilac-soft px-4 py-20 sm:py-24" id="a-day-in-new-haven">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="font-display inline-block rounded-full bg-card px-5 py-2 text-sm font-semibold text-accent-foreground shadow-soft">
            Step 2: Get Oriented
          </span>
          <h2 className="font-display mt-6 text-4xl font-semibold text-foreground sm:text-5xl">
            A Day in New Haven
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            A gentle itinerary for your first visit — carefully paced, so there's
            always a snack or a view between moments of quiet reflection.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {ITINERARY.map((stop, i) => (
            <div
              key={stop.time}
              className={`flex gap-5 rounded-4xl border-3 p-6 shadow-soft sm:p-7 ${stop.color}`}
            >
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-card text-2xl shadow-soft">
                  {stop.emoji}
                </div>
                {i < ITINERARY.length - 1 && (
                  <div className="mt-3 w-0 flex-1 border-l-3 border-dashed border-cocoa/20" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {stop.time}
                </div>
                <h3 className="font-display mt-1 text-xl font-semibold text-foreground">
                  {stop.title}
                </h3>
                <p className="mt-2 leading-relaxed text-foreground/70">{stop.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
