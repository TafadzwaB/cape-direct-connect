import Link from "next/link";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  BUSINESS_NAME,
  WHATSAPP,
} from "@/data/siteData";

const serviceLinks = [
  { href: "/dstv-installation", label: "DStv Installation" },
  { href: "/dstv-repairs", label: "DStv Repairs" },
  { href: "/signal-repairs", label: "Signal Repairs" },
  { href: "/extraview-setup", label: "ExtraView Setup" },
  { href: "/tv-wall-mounting", label: "TV Wall Mounting" },
  { href: "/ovhd-installation", label: "OVHD Installation" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3">{BUSINESS_NAME}</h3>
          <p className="text-sm leading-relaxed">
            Professional DStv installation, repairs and TV wall mounting services
            across Cape Town. Available 7 days a week with same-day service.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/areas-we-cover" className="hover:text-white transition">
                Areas We Cover
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog &amp; News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={PHONE_HREF} className="hover:text-white transition">
                📞 {PHONE}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                💬 WhatsApp Us
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-white transition"
              >
                ✉️ {EMAIL}
              </a>
            </li>
            <li>📍 {ADDRESS}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
