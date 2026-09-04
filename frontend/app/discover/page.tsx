import Link from "next/link";

// Temporary recommendations; these will later be returned by the discovery service.
const events = [
  "League of Legends Worlds tickets",
  "Joe Hisaishi in New York",
  "Wuthering Waves live concert",
  "Outer Wilds merch drop",
];

export default function DiscoverPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-10 lg:px-10">
      <Link href="/" className="font-black text-slate-950 dark:text-white">
        orbit<span className="text-cyan-500">.</span>
      </Link>
      <div className="mt-20 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
          Discover
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 dark:text-white">
          A better internet radar.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-500 dark:text-slate-300">
          Fresh finds shaped around your interests, location, and the things you
          tend to show up for.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {/* Render one recommendation card for each suggested event. */}
        {events.map((event, index) => (
          <article
            key={event}
            className="rounded-3xl bg-slate-950 p-6 text-white"
          >
            <p className="text-sm font-bold text-cyan-300">
              0{index + 1} / suggested
            </p>
            <h2 className="mt-16 text-2xl font-black">{event}</h2>
            <p className="mt-3 text-sm text-slate-300">
              Because of your interest in{" "}
              {index % 2 ? "Studio Ghibli" : "League of Legends"}.
            </p>
            <button className="mt-7 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950">
              Add to review
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
