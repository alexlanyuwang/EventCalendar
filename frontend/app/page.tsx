import Link from "next/link";

// Temporary homepage data; this will eventually come from the user's calendar and recommendations.
const upcomingEvents = [
  {
    date: "OCT 18",
    title: "League of Legends Worlds",
    type: "Esports",
    color: "bg-rose-500",
  },
  {
    date: "NOV 02",
    title: "Joe Hisaishi in Concert",
    type: "Concert",
    color: "bg-amber-500",
  },
  {
    date: "NOV 14",
    title: "Outer Wilds Merch Drop",
    type: "Merchandise",
    color: "bg-cyan-500",
  },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-8 lg:px-10">
      {/* Brand, primary navigation, and the settings link. */}
      <header className="flex items-center justify-between border-b border-slate-200 pb-6 dark:border-slate-700">
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-slate-950 dark:text-white"
        >
          orbit<span className="text-cyan-500">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-500 dark:text-slate-300 md:flex">
          <Link href="/discover" className="text-slate-950 dark:text-white">
            Discover
          </Link>
          <Link
            href="/my-calendar"
            className="hover:text-slate-950 dark:hover:text-white"
          >
            My calendar
          </Link>
          <Link
            href="/interests"
            className="hover:text-slate-950 dark:hover:text-white"
          >
            Interests
          </Link>
        </nav>
        <Link
          href="/settings"
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white"
        >
          Settings
        </Link>
      </header>

      {/* Introductory message and a summary of recommendation accuracy. */}
      <section className="grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Your week, tuned to you
          </p>
          <h1 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 dark:text-white sm:text-7xl">
            Events worth leaving the house for.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500 dark:text-slate-300">
            Orbit learns what you love, finds the moments you would actually
            care about, and keeps them in one calm calendar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/discover"
              className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-400"
            >
              Explore events
            </Link>
            <Link
              href="/interests"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:border-slate-950 dark:border-slate-600 dark:text-slate-200 dark:hover:border-white"
            >
              Tune your interests
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl shadow-slate-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-400">
                Your signal
              </p>
              <p className="mt-2 text-4xl font-black">86%</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
              Learning
            </span>
          </div>
          <p className="mt-10 text-sm leading-6 text-slate-300">
            Your recommendations are getting sharper from your concert saves and
            esports attendance.
          </p>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-700">
            <div className="h-full w-[86%] rounded-full bg-cyan-400" />
          </div>
        </div>
      </section>

      {/* Show a small preview of recommended events on the home screen. */}
      <section className="border-t border-slate-200 py-10 dark:border-slate-700">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">
              Coming up
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white">
              On your radar
            </h2>
          </div>
          <Link
            href="/my-calendar"
            className="text-sm font-bold text-cyan-700 dark:text-cyan-300"
          >
            View calendar <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {/* Map each event object into a reusable event preview card. */}
          {upcomingEvents.map((event) => (
            <article
              key={event.title}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className={`h-12 w-1.5 rounded-full ${event.color}`} />
              <div>
                <p className="text-xs font-black tracking-[0.15em] text-slate-400">
                  {event.date}
                </p>
                <h3 className="mt-1 font-bold text-slate-950 dark:text-white">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                  {event.type}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
