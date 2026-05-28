"use client";

import { WHATSAPP } from "@/data/siteData";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 md:bottom-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.35 22.606c-.394 1.11-1.946 2.032-3.194 2.3-.856.182-1.974.326-5.738-1.234-4.814-1.994-7.91-6.874-8.15-7.194-.232-.32-1.9-2.53-1.9-4.826s1.2-3.424 1.628-3.892c.426-.468.932-.586 1.242-.586.31 0 .618.002.888.016.286.014.668-.108.1046.798.394.94 1.354 3.308 1.472 3.548.118.24.196.52.04.838-.158.32-.236.52-.472.8-.236.282-.496.628-.71.844-.236.236-.482.492-.208.966.274.472 1.22 2.012 2.618 3.26 1.798 1.604 3.314 2.1 3.786 2.336.472.236.748.196 1.024-.118.274-.314 1.182-1.374 1.498-1.846.314-.472.628-.392 1.06-.236.432.158 2.794 1.318 3.268 1.558.472.236.788.358.906.554.118.196.118 1.13-.276 2.24z" />
      </svg>
    </a>
  );
}
