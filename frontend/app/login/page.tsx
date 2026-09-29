"use client";

import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [formMessageType, setFormMessageType] = useState<
    "success" | "error" | ""
  >("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-12 text-black">
      <form
        ref={formRef}
        className="flex w-full max-w-sm flex-col gap-4"
        onSubmit={async (event) => {
          event.preventDefault();
          setFormMessage("");
          const formData = new FormData(event.currentTarget);
          const loginData = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
          };
          setIsSubmitting(true);
          try {
            const response = await fetch("/api/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(loginData),
            });
            const result = await response.json();
            if (response.ok) {
              setFormMessage("Login successful.");
              setFormMessageType("success");
              // TODO handle successful login and implement tokens
            } else {
              switch (response.status) {
                case 401:
                  setFormMessageType("error");
                  setFormMessage("Invalid email or password.");
                  break;
                default:
                  setFormMessageType("error");
                  setFormMessage("Login failed. Please try again.");
              }
              return;
            }
          } catch (error) {
            setFormMessageType("error");
            setFormMessage("An error occurred while logging in.");
          } finally {
            setIsSubmitting(false);
          }
        }}
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
          disabled={isSubmitting}
          className="rounded border border-black bg-black px-3 py-2 text-white"
        >
          {isSubmitting ? "Logging in..." : "Log in"}
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
        {formMessage && (
          <p
            role="alert"
            className={`text-sm ${
              formMessageType === "success" ? "text-green-700" : "text-red-700"
            }`}
          >
            {formMessage}
          </p>
        )}
      </form>
    </main>
  );
}
