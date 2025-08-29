import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "./components/layout-client";

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
  return <LayoutClient>{children}</LayoutClient>;
}