"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function RegisterPage() {
  const emailInput = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedValues = sessionStorage.getItem("registration-prefill");
    if (!storedValues) return;

    sessionStorage.removeItem("registration-prefill");

    try {
      const values = JSON.parse(storedValues) as {
        email?: string;
      };

      if (emailInput.current && typeof values.email === "string") {
        emailInput.current.value = values.email;
      }
    } catch {
      return;
    }
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-12 text-black">
      <form
        className="flex w-full max-w-sm flex-col gap-4"
        onSubmit={async (event) => {
          event.preventDefault();
          setFormMessage("");

          if (password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
          }
          setPasswordError("");
          const formData = new FormData(event.currentTarget);
          const registrationData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
          };
          setIsSubmitting(true);
          try {
            const response = await fetch("/api/auth/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(registrationData),
            });
            const result = await response.json();
            if (!response.ok) {
              setFormMessage(result.message || "Registration failed.");
              return;
            }
            setFormMessage("Registration successful. You can now log in.");
          } catch (error) {
            setFormMessage("An error occurred during registration.");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <h1 className="mb-2 text-2xl font-semibold">Register</h1>

        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="rounded border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-black"
        />

        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          ref={emailInput}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
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
          autoComplete="new-password"
          required
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setPasswordError("");
          }}
          className="rounded border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-black"
        />

        <label htmlFor="confirm-password" className="font-medium">
          Confirm password
        </label>
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          autoComplete="new-password"
          required
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
            setPasswordError("");
          }}
          aria-invalid={Boolean(passwordError)}
          aria-describedby={passwordError ? "password-error" : undefined}
          className="rounded border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-black"
        />
        {passwordError && (
          <p id="password-error" role="alert" className="text-sm text-red-700">
            {passwordError}
          </p>
        )}
        {formMessage && (
          <p role="alert" className="text-sm text-green-700">
            {formMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded border border-black bg-black px-3 py-2 text-white"
        >
          {isSubmitting ? "Please wait..." : "Register"}
        </button>
        <Link href="/login" className="text-center underline">
          Back to login
        </Link>
      </form>
    </main>
  );
}
