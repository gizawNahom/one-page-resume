import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Nahom Derese Gizaw | Senior Backend Engineer",
  description:
    "Senior backend engineer building reliable distributed systems, financial platforms, identity integrations, and event-driven workflows.",
  openGraph: {
    title: "Nahom Derese Gizaw | Senior Backend Engineer",
    description:
      "Senior backend engineer building reliable distributed systems, financial platforms, identity integrations, and event-driven workflows.",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
