import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T52JTTT');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T52JTTT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
