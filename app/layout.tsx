import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles.css";
import { ModalProvider } from "@/lib/contexts/modalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nahom Gizaw",
  description:
    "Nahom is a software Engineer who writes maintainable code for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
