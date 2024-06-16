import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Roboto } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
// });

const sfPro = localFont({
  src: "../public/fonts/SF-Pro.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Macbook Web Clone",
  description: "This website is just for personal use only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sfPro.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
