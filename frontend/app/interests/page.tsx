import Link from "next/link";

const interests = [
  { name: "League of Legends", distance: "Any distance" },
  { name: "Studio Ghibli", distance: "200 miles" },
  { name: "Wuthering Waves", distance: "50 miles" },
  { name: "Outer Wilds", distance: "Any distance" },
];

export default function InterestsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-10 lg:px-10">
      <Link href="/" className="font-black text-slate-950 dark:text-white">
        orbit<span className="text-cyan-500">.</span>
      </Link>
      <div className="mt-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
          Interests
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 dark:text-white">
          Tell us what pulls you in.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-500 dark:text-slate-300">
          Your interests help Orbit find the right events. Add broad topics or
          very specific favorites.
        </p>
        {/* Input area for adding new topics; persistence will be added later. */}
        <div className="mt-10 flex gap-3">
          <input
            className="min-w-0 flex-1 rounded-full border border-slate-300 px-5 py-3 outline-none focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
            placeholder="Try a topic, artist, or game"
          />
          <button className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950">
            Add
          </button>
        </div>
        {/* Display each interest in a separate row so its preferences can be adjusted. */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
          <div className="hidden grid-cols-[1fr_auto_auto] gap-6 border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:grid">
            <span>Interest</span>
            <span>Search distance</span>
            <span>Remove</span>
          </div>
          {interests.map((interest) => (
            <div
              key={interest.name}
              className="grid gap-4 border-b border-slate-200 px-6 py-5 last:border-b-0 dark:border-slate-700 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-6"
            >
              <div>
                <p className="font-bold text-slate-950 dark:text-white">
                  {interest.name}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                  Events related to this interest
                </p>
              </div>
              <label className="flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-300 sm:block">
                <span className="sm:hidden">Search distance</span>
                <select
                  defaultValue={interest.distance}
                  aria-label={`Search distance for ${interest.name}`}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-950 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                >
                  <option>25 miles</option>
                  <option>50 miles</option>
                  <option>200 miles</option>
                  <option>Any distance</option>
                </select>
              </label>
              <button
                type="button"
                aria-label={`Remove ${interest.name}`}
                className="justify-self-start text-sm font-bold text-slate-500 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400 sm:justify-self-end"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
