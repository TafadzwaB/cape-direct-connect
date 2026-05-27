import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cape Direct Connect | DStv Installation & Repairs Cape Town",
    template: "%s | Cape Direct Connect",
  },
  description:
    "Professional DStv installation, repairs, signal fixes, ExtraView setup, TV wall mounting and OVHD installation across Cape Town. Same-day service. Call now!",
  keywords: [
    "DStv installation Cape Town",
    "DStv repairs Cape Town",
    "DStv installer near me",
    "TV wall mounting Cape Town",
    "OVHD installation Cape Town",
    "ExtraView setup Cape Town",
    "satellite dish installation",
    "DStv signal repair",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Cape Direct Connect",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
