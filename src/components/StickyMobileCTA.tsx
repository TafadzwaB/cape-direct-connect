"use client";

import { PHONE_HREF, WHATSAPP } from "@/data/siteData";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-blue-900 text-white">
      <div className="grid grid-cols-2 divide-x divide-blue-700">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 py-3 text-sm font-semibold hover:bg-blue-800 transition"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call Now
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 text-sm font-semibold hover:bg-blue-800 transition"
        >
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.35 22.606c-.394 1.11-1.946 2.032-3.194 2.3-.856.182-1.974.326-5.738-1.234-4.814-1.994-7.91-6.874-8.15-7.194-.232-.32-1.9-2.53-1.9-4.826s1.2-3.424 1.628-3.892c.426-.468.932-.586 1.242-.586.31 0 .618.002.888.016.286.014.668-.108.1046.798.394.94 1.354 3.308 1.472 3.548.118.24.196.52.04.838-.158.32-.236.52-.472.8-.236.282-.496.628-.71.844-.236.236-.482.492-.208.966.274.472 1.22 2.012 2.618 3.26 1.798 1.604 3.314 2.1 3.786 2.336.472.236.748.196 1.024-.118.274-.314 1.182-1.374 1.498-1.846.314-.472.628-.392 1.06-.236.432.158 2.794 1.318 3.268 1.558.472.236.788.358.906.554.118.196.118 1.13-.276 2.24z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
