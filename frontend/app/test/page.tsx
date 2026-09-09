"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TestPage() {
  type Interest = {
    name: string;
    distance: string;
  };
  const [existinginterests, setExistingInterests] = useState<Interest[]>([]);
  const [pendinginterests, addInterest] = useState<Interest[]>([]);
  const [newInterest, setNewInterest] = useState<Interest>({
    name: "",
    distance: "",
  });
  const [error, setError] = useState("");

  //todo: fetch existing interests from the database and set them in existingInterests state. For now, we will use a hardcoded list of interests.
  async function getExistingInterests() {
    setExistingInterests([
      { name: "League of Legends", distance: "Any distance" },
      { name: "Fortnite", distance: "Any distance" },
      { name: "Overwatch", distance: "Any distance" },
    ]);
    return [];
  }

  function capitalizeWords(value: string) {
    return value
      .trim()
      .toLowerCase()
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  function updatePendingInterests() {
    const interest = capitalizeWords(newInterest.name);
    capitalizeWords(newInterest.name);
    if (!interest) {
      setError("Please enter a valid interest.");
      return;
    }
    const interestExists =
      existinginterests.some(
        (item) => item.name.toLowerCase() === interest.toLowerCase(),
      ) ||
      pendinginterests.some(
        (item) => item.name.toLowerCase() === interest.toLowerCase(),
      );

    if (interestExists) {
      setError("Interest already exists.");
      return;
    }
    addInterest([{ name: interest, distance: "" }, ...pendinginterests]);
    setNewInterest({ name: "", distance: "" });
  }

  //todo: save button, cancel button, remove button

  useEffect(() => {
    getExistingInterests();
  }, []);

  return (
    <main>
      <header>test page</header>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          updatePendingInterests();
        }}
      >
        {/* input field for interests */}
        <input
          className="interestsInput"
          placeholder="Enter your interests..."
          value={newInterest.name}
          onChange={(e) => {
            setNewInterest({ ...newInterest, name: e.target.value });
            setError("");
          }}
        ></input>
        <button className="defaultButton" type="submit">
          Add Interest
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}
      {/*table*/}
      <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
        <div className="hidden grid-cols-[1fr_auto_auto] gap-6 border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:grid">
          <span>Interest</span>
          <span>Search distance</span>
          <span>Remove</span>
        </div>
        {[...pendinginterests, ...existinginterests].map((interest) => (
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
            {/*             <label className="flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-300 sm:block">
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
            </button> */}
          </div>
        ))}
      </div>
      <Link href="/interests">
        <button className="defaultButton">test redirect button</button>
      </Link>
    </main>
  );
}
