import Link from "next/link";
import QuoteForm from "./QuoteForm";
import FAQAccordion from "./FAQAccordion";
import { PHONE_HREF, WHATSAPP } from "@/data/siteData";

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface ServicePageLayoutProps {
  title: string;
  description: string;
  features: string[];
  process: { step: string; description: string }[];
  faqs: ServiceFAQ[];
  areas: string[];
}

export default function ServicePageLayout({
  title,
  description,
  features,
  process,
  faqs,
  areas,
}: ServicePageLayoutProps) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={PHONE_HREF}
                  className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-lg transition"
                >
                  📞 Call Now
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-lg transition"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            What&apos;s Included
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 flex items-start gap-3"
              >
                <span className="text-blue-600 mt-0.5">✓</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Our Process
          </h2>
          <div className="space-y-6">
            {process.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.step}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Areas We Cover for {title}
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We provide {title.toLowerCase()} services across Cape Town
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Book Your {title}?
          </h2>
          <p className="text-blue-200 mb-8">
            Contact us today for a free quote. Same-day service available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-lg transition"
            >
              📞 Call Now
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-lg transition"
            >
              💬 WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold px-8 py-3 rounded-lg transition"
            >
              ✉️ Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
