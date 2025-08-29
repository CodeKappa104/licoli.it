"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-[var(--main-bg)] text-white p-8 transform transition-transform duration-300 ease-in-out border-l-gray-200 border-l-1 shadow-md z-10 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={onClose} className="absolute top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <nav className="flex flex-col gap-6 text-2xl font-bold mt-16">
        <Link href="/" className="hover:underline" onClick={onClose}>
          <span onClick={(e) => e.stopPropagation()}>Home</span>
        </Link>
        <Link href="/menu" className="hover:underline" onClick={onClose}>
          <span onClick={(e) => e.stopPropagation()}>Menù</span>
        </Link>
        <Link href="#contatti" className="hover:underline" onClick={onClose}>
          <span onClick={(e) => e.stopPropagation()}>Contatti</span>
        </Link>
      </nav>
    </div>
  );
}

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="it">
      <body className="font-sans flex flex-col min-h-screen">
        {isSidebarOpen}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        {/* HEADER */}
        <header
          className="w-full"
          style={{
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <div className="max-w-5xl mx-auto flex justify-between items-center p-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/android-chrome-192x192.png"
                alt="Logo locale"
                width={80}
                height={80}
              />
              <span className="font-bold text-4xl">LI.CO.LI</span>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex gap-6 text-2xl font-bold">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/menu" className="hover:underline">
                Menù
              </a>
              <a href="#contatti" className="hover:underline">
                Contatti
              </a>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setSidebarOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1 w-full">{children}</main>

        {/* FOOTER */}
        <footer
          id="contatti"
          className="w-full"
          style={{
            borderTop: "1px solid var(--border-color)",
            backgroundColor: "var(--footer-bg)",
            color: "var(--text-muted)",
          }}
        >
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-md text-center sm:text-left">
              <p>
                © {new Date().getFullYear()} LI.CO.LI Tutti i diritti riservati.
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=piazza+Vittorio+Emanuele+118-120,+Vallo+della+Lucania,+Italy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Piazza Vittorio Emanuele 118-120, Vallo della Lucania, Italy
                </a>
              </p>
              <p>
                <a href="tel:+393791183531" className="hover:underline">
                  +39 379 118 3531
                </a>
              </p>
              <p>
                <a
                  href="mailto:licoli.gm@gmail.com"
                  className="hover:underline"
                >
                  licoli.gm@gmail.com
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/li.co.li_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons8-instagram.svg"
                  alt="Instagram"
                  width={50}
                  height={50}
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons8-facebook.svg"
                  alt="Facebook"
                  width={50}
                  height={50}
                />
              </a>
              {/* <a
                href="https://tiktok.com/@licoli.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/tiktok.svg" alt="TikTok" width={20} height={20} />
              </a> */}
            </div>
          </div>
        </footer>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M2TK0Y0MRX"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M2TK0Y0MRX');
          `}
        </Script>
      </body>
    </html>
  );
}
