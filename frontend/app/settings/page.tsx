import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-10 lg:px-10">
      <Link href="/" className="font-black text-slate-950 dark:text-white">
        orbit<span className="text-cyan-500">.</span>
      </Link>
      <div className="mt-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
          Settings
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 dark:text-white">
          Make it feel like yours.
        </h1>
        {/* Group account, discovery, and notification preferences into separate rows. */}
        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
          <div className="flex items-center justify-between gap-5 py-6">
            <div>
              <h2 className="font-bold text-slate-950 dark:text-white">
                Google Calendar
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                Add approved events to your calendar.
              </p>
            </div>
            <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold dark:border-slate-600 dark:text-white">
              Connect
            </button>
          </div>
          <div className="flex items-center justify-between gap-5 py-6">
            <div>
              <h2 className="font-bold text-slate-950 dark:text-white">
                Discovery radius
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                How far Orbit should look for in-person events.
              </p>
            </div>
            <select className="rounded-full border border-slate-300 px-4 py-2 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white">
              <option>200 miles</option>
              <option>50 miles</option>
              <option>Any distance</option>
            </select>
          </div>
          <div className="flex items-center justify-between gap-5 py-6">
            <div>
              <h2 className="font-bold text-slate-950 dark:text-white">
                Weekly digest
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                A quiet summary of new recommendations.
              </p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5 accent-cyan-500"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
