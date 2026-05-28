import Link from "next/link";
import { PHONE_HREF, PHONE, WHATSAPP } from "@/data/siteData";

export default function NotFound() {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-6xl font-bold text-[#1a56db] mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#1a56db] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition"
          >
            Go to Homepage
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center bg-white text-[#1a56db] border-2 border-[#1a56db] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Browse Articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-[#1a56db] border-2 border-[#1a56db] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Contact Us
          </Link>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Need DStv Help Right Now?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25d366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1da851] transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
