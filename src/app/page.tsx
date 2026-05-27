import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import {
  services,
  areas,
  faqs,
  PHONE_HREF,
  WHATSAPP,
  BUSINESS_NAME,
} from "@/data/siteData";

export const metadata: Metadata = {
  title: {
    absolute: "Cape Direct Connect | DStv Installation & Repairs Cape Town",
  },
  description:
    "Professional DStv installation, repairs, signal fixes, ExtraView setup, TV wall mounting and OVHD installation across Cape Town. Same-day service available.",
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                ⭐ Rated #1 DStv Installer in Cape Town
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Professional DStv Installation & Repairs in{" "}
                <span className="text-yellow-300">Cape Town</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
                Same-day DStv installations, repairs, signal fixes and TV wall
                mounting. Trusted by thousands of Cape Town homeowners.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={PHONE_HREF}
                  className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition shadow-lg"
                >
                  📞 Call Now for Free Quote
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition shadow-lg"
                >
                  💬 WhatsApp Us
                </a>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-blue-200">
                <span>✓ Same-Day Service</span>
                <span>✓ Accredited Installers</span>
                <span>✓ All Areas Covered</span>
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From new installations to emergency repairs, we provide a complete
              range of DStv and satellite services across Cape Town.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose {BUSINESS_NAME}?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re Cape Town&apos;s most trusted DStv service provider.
              Here&apos;s why thousands of customers choose us.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                title: "Same-Day Service",
                desc: "Call before 12pm and we'll be there today. Emergency repairs available 7 days a week.",
              },
              {
                icon: "🏆",
                title: "Accredited Installers",
                desc: "Our technicians are fully trained and accredited DStv installers with years of experience.",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                desc: "No hidden fees. We provide upfront quotes before starting any work.",
              },
              {
                icon: "🛡️",
                title: "Guaranteed Work",
                desc: "All our installations and repairs come with a workmanship guarantee for your peace of mind.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Repairs Banner */}
      <section className="bg-red-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            🚨 Emergency DStv Repairs Available Now
          </h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Lost signal? Decoder not working? Don&apos;t miss the big game. Our
            technicians are standing by for emergency call-outs across Cape Town.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            📞 Call for Emergency Repair
          </a>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Cover
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide DStv installation and repair services across the greater
              Cape Town area and surrounds.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {areas.slice(0, 20).map((area) => (
              <span
                key={area}
                className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700 transition"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/areas-we-cover"
              className="text-blue-700 font-semibold hover:underline"
            >
              View all areas we cover →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">
              Don&apos;t just take our word for it — hear from our satisfied
              customers across Cape Town.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Whether you need a new DStv installation, a quick repair, or TV wall
            mounting — we&apos;re here to help. Contact us today for a free,
            no-obligation quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition"
            >
              📞 Call Now
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition"
            >
              💬 WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition"
            >
              ✉️ Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Cape Direct Connect",
            description:
              "Professional DStv installation, repairs, signal fixes, ExtraView setup, TV wall mounting and OVHD installation across Cape Town.",
            telephone: "+27212001537",
            email: "info@capedirectconnect.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cape Town",
              addressRegion: "Western Cape",
              addressCountry: "ZA",
            },
            areaServed: {
              "@type": "City",
              name: "Cape Town",
            },
            serviceType: [
              "DStv Installation",
              "DStv Repairs",
              "Signal Repairs",
              "ExtraView Setup",
              "TV Wall Mounting",
              "OVHD Installation",
            ],
          }),
        }}
      />
    </div>
  );
}
