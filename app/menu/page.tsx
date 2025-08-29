"use client";

import Image from "next/image";
import clsx from "clsx";
import { useState, useEffect } from "react";

type Item = { name: string; price?: number; photo?: string; desc?: string };
type MenuData = Record<string, Item[]>;

function titleize(key: string) {
  return key.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

function Price({ value }: { value?: number }) {
  if (value == null) return null;
  const eur = value.toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
  });
  return <span className="tabular-nums">{eur}</span>;
}

function Section({
  name,
  items,
  searchQuery,
}: {
  name: string;
  items: Item[];
  searchQuery: string;
}) {
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <section id={name} className="max-w-5xl w-full mb-12">
      <h2
        className="text-8xl mb-6 tracking-wide text-center"
        style={{ fontFamily: "var(--sections-font)" }}
      >
        {titleize(name)}
      </h2>

      <ul className="grid grid-cols-1 gap-6">
        {filteredItems.map((it, i) => (
          <li key={`${name}-${i}`} className="flex items-start gap-4">
            {/* {it.photo ? (
              <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden ring-1 ring-black/5">
                <Image
                  src={it.photo}
                  alt={it.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-20 h-20 shrink-0 rounded-xl bg-black/5 dark:bg-white/10" />
            )} */}

            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-wide">
                  {it.name}
                </h3>
                <div className="text-lg font-semibold tracking-wide">
                  <Price value={it.price} />
                </div>
              </div>
              {it.desc && (
                <p className="text-base text-gray-600 dark:text-gray-400 mt-1 tracking-wide">
                  {it.desc}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={clsx(
        "fixed bottom-4 right-4 p-3 rounded-full bg-white/10 text-white shadow-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50",
        { "opacity-0": !isVisible, "opacity-100": isVisible }
      )}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

export default function MenuPage() {
  const menu = require("@/data/menu.json");
  const sectionKeys = Object.keys(menu);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={clsx("min-h-screen", "bg-[#2137ff] text-white")}>
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Hero */}
        <header className="mb-10">
          <h1
            className="text-8xl mb-6 tracking-wide text-center"
            style={{ fontFamily: "var(--sections-font)" }}
          >
            Menù
          </h1>
        </header>

        {/* Search Input */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Cerca un prodotto..."
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Index nav */}
        <nav className="flex flex-wrap gap-3 mb-10">
          {sectionKeys.map((k) => (
            <a
              key={k}
              href={`#${k}`}
              className="text-4xl px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
              style={{ fontFamily: "var(--sections-font)" }}
            >
              {titleize(k)}
            </a>
          ))}
        </nav>

        {/* Sections */}
        {sectionKeys.map((k) => (
          <Section key={k} name={k} items={menu[k]} searchQuery={searchQuery} />
        ))}

        {/* Footer note */}
        <footer className="mt-16 text-xs/6 opacity-90">
          <p className="text-center max-w-3xl mx-auto text-lg opacity-90">
            * Alcuni prodotti potrebbero essere disponibili solo in
            giorni/periodi specifici.
          </p>
          <br></br>
          <p className="text-center max-w-3xl mx-auto text-lg opacity-90">
            Per qualsiasi richiesta particolare o informazione sugli
            ingredienti, non esitare a rivolgerti al personale!
          </p>
        </footer>
      </div>
      <BackToTopButton />
    </div>
  );
}
