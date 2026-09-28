"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function LoginPage() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-12 text-black">
      <form
        ref={formRef}
        className="flex w-full max-w-sm flex-col gap-4"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-black"
        />

        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="rounded border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-black"
        />

        <button
          type="submit"
          className="rounded border border-black bg-black px-3 py-2 text-white"
        >
          Log in
        </button>
        <button
          type="button"
          className="rounded border border-black bg-white px-3 py-2 text-black"
          onClick={() => {
            const form = formRef.current;
            if (!form) return;

            const formData = new FormData(form);
            sessionStorage.setItem(
              "registration-prefill",
              JSON.stringify({
                email: formData.get("email") ?? "",
              }),
            );
            router.push("/register");
          }}
        >
          Register
        </button>
      </form>
    </main>
  );
}
