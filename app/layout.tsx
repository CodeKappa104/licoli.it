import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LI.CO.LI",
  description: "Landing page e menù ufficiale",
  icons: {
    icon: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="font-sans flex flex-col min-h-screen">
        {/* HEADER */}
        <header
          className="w-full"
          style={{
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between items-center p-8">
            {/* Logo */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-center mb-4 md:mb-0">
              <Image
                src="/android-chrome-192x192.png"
                alt="Logo locale"
                width={80}
                height={80}
              />
              <span className="font-bold text-4xl">LI.CO.LI</span>
            </div>

            {/* Nav */}
            <nav className="flex gap-6 text-2xl font-bold w-full md:w-auto justify-center">
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
                <a href="tel:3791183531" className="hover:underline">
                  379 118 3531
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
