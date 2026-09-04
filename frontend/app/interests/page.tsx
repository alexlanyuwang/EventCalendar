import Link from "next/link";

const interests = [
  "League of Legends",
  "Studio Ghibli",
  "Wuthering Waves",
  "Outer Wilds",
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
        {/* Display the user's current interests as removable tags. */}
        <div className="mt-10 flex flex-wrap gap-3">
          {interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white dark:bg-slate-800"
            >
              {interest} <span className="ml-2 text-slate-300">x</span>
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
