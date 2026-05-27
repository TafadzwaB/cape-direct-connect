import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  WHATSAPP,
  BUSINESS_NAME,
} from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Cape Direct Connect for DStv installation, repairs, and TV wall mounting in Cape Town. Call, WhatsApp, or fill in our online form for a free quote.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Get in touch with {BUSINESS_NAME} for a free quote. We respond
            within 30 minutes during business hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                    <a
                      href={PHONE_HREF}
                      className="text-blue-700 hover:underline text-lg font-semibold"
                    >
                      {PHONE}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      Available 7 days a week, 7am — 7pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline text-lg font-semibold"
                    >
                      Send us a message
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      Quick responses, share photos of your setup
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-blue-700 hover:underline"
                    >
                      {EMAIL}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Service Area
                    </h3>
                    <p className="text-gray-700">{ADDRESS}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      We cover all areas across Cape Town
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday — Friday</span>
                    <span className="font-semibold text-gray-900">
                      07:00 — 19:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">
                      08:00 — 17:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">
                      09:00 — 14:00
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-red-600 font-medium">
                      Emergency Repairs
                    </span>
                    <span className="font-semibold text-red-600">
                      Available 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Free Quote
              </h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Serving All of Cape Town
          </h2>
          <p className="text-gray-600 mb-8">
            From the CBD to the Southern Suburbs, Northern Suburbs to the
            Atlantic Seaboard — we cover the entire Cape Town metro.
          </p>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-4">🗺️</span>
                <p className="text-gray-500">
                  Cape Town Metropolitan Area
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  All suburbs and surrounding areas covered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
