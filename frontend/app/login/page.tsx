import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 sm:p-10 dark:bg-slate-900">
        {/* Return to the home page through the brand link. */}
        <Link href="/" className="font-black text-slate-950 dark:text-white">
          orbit<span className="text-cyan-500">.</span>
        </Link>
        <h1 className="mt-16 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
          Welcome back.
        </h1>
        <p className="mt-3 text-slate-500 dark:text-slate-300">
          Pick up where your calendar left off.
        </p>
        {/* Placeholder for the future Google OAuth sign-in action. */}
        <button className="mt-10 flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 font-bold text-white">
          Continue with Google
        </button>
        <p className="mt-8 text-center text-xs leading-5 text-slate-400 dark:text-slate-300">
          By continuing, you agree to let Orbit manage events you approve in
          your Google Calendar.
        </p>
      </div>
    </main>
  );
}
