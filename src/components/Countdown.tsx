import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   ✏️  EDIT ME: The Game kickoff. Change the date below and the
   countdown updates itself. Kickoff is a guess-adjacent 1:00 PM.
   ───────────────────────────────────────────────────────────── */
export const GAME_DATE = new Date("2026-11-21T13:00:00-05:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "days" },
  { key: "hours", label: "hours" },
  { key: "minutes", label: "minutes" },
  { key: "seconds", label: "seconds" },
];

export function Countdown() {
  // Start empty and fill after mount so SSR and the client agree.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(GAME_DATE));
    const id = setInterval(() => setTimeLeft(getTimeLeft(GAME_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  const expired = timeLeft !== null && (timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds === 0);

  return (
    <div className="rounded-4xl border-3 border-cocoa/10 bg-card p-6 shadow-soft sm:p-8">
      <p className="font-display text-center text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Countdown to The Game
      </p>
      {expired ? (
        <p className="font-display mt-4 text-center text-2xl font-semibold text-foreground">
          It's Game Day! It's going to be okay. 💙
        </p>
      ) : (
        <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-4">
          {UNITS.map(({ key, label }) => (
            <div
              key={key}
              className="rounded-2xl bg-butter-soft px-2 py-4 text-center"
            >
              <div className="font-display text-3xl font-semibold tabular-nums text-foreground sm:text-5xl">
                {timeLeft === null ? "--" : pad(timeLeft[key])}
              </div>
              <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
                {label}
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="mt-4 text-center text-sm text-muted-foreground">
        That's how long you have to practice saying "New Haven has really
        great pizza" with a straight face.
      </p>
    </div>
  );
}
