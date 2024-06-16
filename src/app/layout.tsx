import type { Metadata } from "next";
import "./globals.css";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Image
          className="absolute top-8 left-10"
          src="/logo.svg" 
          alt="Logo"
          width={230}
          height={60}
        />
        <main className="w-screen h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
