"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PHONE, PHONE_HREF, BUSINESS_NAME } from "@/data/siteData";

const serviceLinks = [
  { href: "/dstv-installation", label: "DStv Installation" },
  { href: "/dstv-repairs", label: "DStv Repairs" },
  { href: "/signal-repairs", label: "Signal Repairs" },
  { href: "/extraview-setup", label: "ExtraView Setup" },
  { href: "/tv-wall-mounting", label: "TV Wall Mounting" },
  { href: "/ovhd-installation", label: "OVHD Installation" },
];

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/areas-we-cover", label: "Areas We Cover" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-blue-700 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      {/* Top bar */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span className="hidden sm:inline">
            Cape Town&apos;s Trusted DStv Experts — Available 7 Days a Week
          </span>
          <a href={PHONE_HREF} className="font-semibold hover:text-yellow-300 transition">
            📞 {PHONE}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-900">
          {BUSINESS_NAME}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {/* Home */}
          <li>
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${pathname === "/" ? "text-blue-700 bg-blue-50" : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"}`}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
          </li>

          {/* Services dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition inline-flex items-center gap-1"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <ul className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Other top-level links (skip Home since already rendered) */}
          {mainLinks
            .filter((l) => l.href !== "/")
            .map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${pathname === link.href ? "text-blue-700 bg-blue-50" : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"}`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden md:inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Call Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white">
          <ul className="px-4 py-2 space-y-1">
            <li>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Home
              </Link>
            </li>

            {/* Mobile services accordion */}
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <ul className="pl-4 space-y-1 mt-1">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {mainLinks
              .filter((l) => l.href !== "/")
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </header>
  );
}
