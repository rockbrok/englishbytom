import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
});

export const metadata: Metadata = {
  title: "English by Tom",
  description: "Learn English with Tom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`font-sans ${roboto.className}`}>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col items-center gap-8">
        <Header />
        <main className="responsive-container flex flex-col justify-start gap-y-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}