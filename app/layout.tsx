import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
});

// const open_sans = Open_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
// });

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
    <html lang="en" className={`font-sans ${roboto.className} w-full`}>

      <body className="flex flex-col items-center gap-8">
        <Header />
        <main className="w-[1015px] px-2 flex flex-col justify-start">{children}</main>

      </body>
    </html>
  );
}