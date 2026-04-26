import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { Sidebar } from "@/components/shared/sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aCore — Управление НИР",
  description: "Система управления научно-исследовательской работой факультета",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex h-full bg-white">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-auto">{children}</div>
      </body>
    </html>
  );
}
