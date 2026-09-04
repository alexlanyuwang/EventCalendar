import Link from "next/link";

export default function CalendarPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-10 lg:px-10">
      <Link href="/" className="font-black text-slate-950 dark:text-white">
        orbit<span className="text-cyan-500">.</span>
      </Link>
      <div className="mt-20 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            My calendar
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            November 2026
          </h1>
        </div>
        <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white">
          Connect Google Calendar
        </button>
      </div>
      {/* Static calendar grid for the initial UI; event data will later come from Google Calendar. */}
      <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50 text-center text-xs font-bold text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <span className="p-4">SUN</span>
          <span className="p-4">MON</span>
          <span className="p-4">TUE</span>
          <span className="p-4">WED</span>
          <span className="p-4">THU</span>
          <span className="p-4">FRI</span>
          <span className="p-4">SAT</span>
        </div>
        <div className="grid min-h-80 grid-cols-7 text-sm">
          {/* Generate 35 cells to represent five calendar weeks. */}
          {Array.from({ length: 35 }, (_, index) => (
            <div
              key={index}
              className="min-h-24 border-b border-r border-slate-100 p-3 text-slate-500 dark:border-slate-800 dark:text-slate-300"
            >
              {index > 6 && index - 6}
              <>
                {index === 16 && (
                  <p className="mt-2 rounded-lg bg-amber-100 px-2 py-1 text-xs font-bold text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
                    Hisaishi
                  </p>
                )}
              </>
              {index === 29 && (
                <p className="mt-2 rounded-lg bg-cyan-100 px-2 py-1 text-xs font-bold text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200">
                  Merch drop
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
