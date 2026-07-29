import Link from "next/link";
import Die from "@/components/Die";

const SCORE_ROWS = [
  { label: "Entry fee", value: "$50", big: false },
  { label: "Grand prize", value: "$3,000", big: true },
  { label: "Format", value: "5-round Swiss, single elimination final" },
  { label: "Date", value: "Saturday, September 12, 2026" },
  { label: "Check-in", value: "9:00 AM — rolling starts 10:00 AM sharp" },
  { label: "Venue", value: "Fairview Community Hall, Lanes 1–8" },
  { label: "Field size", value: "Capped at 64 players" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-felt felt-weave">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-14 text-center">
        <div className="flex justify-center gap-4 mb-8">
          <Die value={5} size={64} animate delayMs={0} />
          <Die value={3} size={64} animate delayMs={90} />
          <Die value={5} size={64} animate delayMs={180} />
          <Die value={5} size={64} animate delayMs={270} />
          <Die value={5} size={64} animate delayMs={360} />
        </div>
        <p className="font-mono text-gold uppercase tracking-[0.3em] text-sm mb-4">
          The Boxcars Yahtzee Open
        </p>
        <h1 className="font-display text-6xl md:text-8xl text-ivory leading-[0.95] tracking-wide">
          ROLL FOR
          <br />
          $3,000
        </h1>
        <p className="font-body text-ivory/80 max-w-xl mx-auto mt-6 text-lg leading-relaxed">
          One entry fee. Five dice. Thirteen categories to fill. Sixty-four players chase
          one grand prize — and it&apos;s decided the old-fashioned way, on paper scorecards.
        </p>
        <Link
          href="/register"
          className="focus-ring inline-block mt-9 bg-pip text-ivory font-display text-2xl tracking-wide px-10 py-4 rounded shadow-[0_6px_0_rgba(0,0,0,0.35)] active:translate-y-1 active:shadow-none transition"
        >
          REGISTER — $50 ENTRY
        </Link>
      </section>

      {/* Scorecard details panel */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <div className="paper-texture rounded-md shadow-card overflow-hidden">
          <div className="bg-graphite text-ivory px-6 py-4 flex items-center justify-between">
            <span className="font-display text-xl tracking-wide">TOURNAMENT SCORECARD</span>
            <span className="font-mono text-xs text-ivory/60">UPPER SECTION</span>
          </div>
          <div className="px-6">
            {SCORE_ROWS.map((row) => (
              <div
                key={row.label}
                className="scorecard-row flex items-center justify-between py-4 gap-6"
              >
                <span className="font-mono text-sm uppercase tracking-widest text-graphite/70">
                  {row.label}
                </span>
                <span
                  className={
                    row.big
                      ? "font-display text-3xl text-pip tracking-wide"
                      : "font-body text-graphite text-right"
                  }
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
          <div className="px-6 py-5 bg-paper-dark/60 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-graphite/60">
              Yahtzee bonus: each entry funds the prize pool directly
            </span>
            <Die value={6} size={28} />
          </div>
        </div>
      </section>

      <footer className="text-center pb-10">
        <p className="font-mono text-ivory/40 text-xs tracking-widest uppercase">
          No purchase-based odds guaranteed. Skill and dice both count.
        </p>
      </footer>
    </main>
  );
}
