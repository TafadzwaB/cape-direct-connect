import type { Metadata } from "next";
import Link from "next/link";
import { areas, services, PHONE_HREF, WHATSAPP } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Areas We Cover in Cape Town",
  description:
    "Cape Direct Connect provides DStv installation and repair services across all Cape Town areas. Find your area and book a technician today.",
};

const areaGroups = [
  {
    region: "City Bowl & Atlantic Seaboard",
    areas: [
      "Cape Town CBD",
      "Sea Point",
      "Green Point",
      "Camps Bay",
      "Hout Bay",
      "Llandudno",
      "Woodstock",
      "Observatory",
    ],
  },
  {
    region: "Southern Suburbs",
    areas: [
      "Claremont",
      "Newlands",
      "Rondebosch",
      "Constantia",
      "Wynberg",
      "Kenilworth",
      "Plumstead",
      "Tokai",
      "Mowbray",
      "Pinelands",
    ],
  },
  {
    region: "False Bay & South Peninsula",
    areas: [
      "Fish Hoek",
      "Simon's Town",
      "Muizenberg",
      "Kalk Bay",
    ],
  },
  {
    region: "West Coast & Blouberg",
    areas: [
      "Milnerton",
      "Bloubergstrand",
      "Table View",
      "Parklands",
    ],
  },
  {
    region: "Northern Suburbs",
    areas: [
      "Durbanville",
      "Bellville",
      "Parow",
      "Goodwood",
      "Thornton",
    ],
  },
  {
    region: "Cape Flats",
    areas: [
      "Athlone",
      "Mitchell's Plain",
      "Khayelitsha",
    ],
  },
  {
    region: "Helderberg & Winelands",
    areas: [
      "Somerset West",
      "Strand",
      "Gordon's Bay",
      "Stellenbosch",
      "Paarl",
      "Franschhoek",
    ],
  },
];

export default function AreasWeCoverPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Areas We Cover in Cape Town
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            We provide DStv installation, repairs, signal fixes, TV wall
            mounting, and OVHD installation across all areas in the greater Cape
            Town metropolitan area and surrounds.
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
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-lg transition"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Area Groups */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areaGroups.map((group) => (
              <div
                key={group.region}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <h2 className="text-lg font-bold text-blue-900 mb-4 border-b border-gray-100 pb-3">
                  {group.region}
                </h2>
                <ul className="space-y-2">
                  {group.areas.map((area) => (
                    <li
                      key={area}
                      className="text-gray-700 text-sm flex items-center gap-2"
                    >
                      <span className="text-blue-600">✓</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Complete Area List
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Can&apos;t find your area? Contact us — we likely cover it too.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services in Your Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Services Available in Your Area
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-blue-200 transition flex items-center gap-4"
              >
                <span className="text-3xl">{service.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <span className="text-sm text-blue-600">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a DStv Technician in Your Area?
          </h2>
          <p className="text-blue-200 mb-8">
            Contact us today for fast, professional service anywhere in Cape
            Town.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-lg transition"
            >
              📞 Call Now
            </a>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold px-8 py-3 rounded-lg transition"
            >
              ✉️ Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
