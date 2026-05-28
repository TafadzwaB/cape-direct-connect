import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { areas } from "@/data/siteData";

export const metadata: Metadata = {
  title: "OVHD Installation Cape Town",
  description:
    "Professional OVHD / OpenView HD installation in Cape Town. Free-to-air channels, no monthly fees. One-time installation cost. Call for a free quote.",
};

export default function OvhdInstallationPage() {
  return (
    <>
      <ServicePageLayout
        title="OVHD Installation"
        description="Get free-to-air satellite TV with OVHD (OpenView HD). One-time installation cost, no monthly subscription fees. Enjoy channels like e.tv, SABC, eExtra, eMovies, and more in HD quality."
        features={[
          "Complete OVHD satellite dish installation",
          "OVHD decoder supply and setup",
          "Satellite dish alignment for best signal",
          "Cable installation and routing",
          "Channel scanning and activation",
          "Multi-room OVHD setups",
          "Upgrade from analogue to OVHD",
          "Combination DStv + OVHD installations",
          "No monthly subscription required",
        ]}
        process={[
          {
            step: "Contact Us",
            description:
              "Call or WhatsApp for a free quote. We'll explain the OVHD packages and what equipment you need.",
          },
          {
            step: "Equipment & Installation",
            description:
              "We supply and install the OVHD satellite dish, decoder, and cabling at your property.",
          },
          {
            step: "Dish Alignment",
            description:
              "We professionally align the dish to the correct satellite for maximum signal strength and channel availability.",
          },
          {
            step: "Activation & Testing",
            description:
              "We activate the decoder, scan for all available channels, and verify HD picture quality on your TV.",
          },
        ]}
        faqs={[
          {
            question: "What is OVHD / OpenView HD?",
            answer:
              "OVHD (OpenView HD) is a free-to-air satellite TV service in South Africa. You pay a once-off cost for equipment and installation, then enjoy channels like eTV, SABC, eExtra, and eMovies HD with no monthly fees.",
          },
          {
            question: "How much does OVHD installation cost?",
            answer:
              "A complete OVHD installation including the decoder, satellite dish, and installation starts from R1,200. Contact us for an exact quote based on your setup requirements.",
          },
          {
            question: "Can I have both DStv and OVHD?",
            answer:
              "Yes, you can have both DStv and OVHD installed at your home. They use separate decoders and can share the same satellite dish with the right LNB setup.",
          },
          {
            question: "What channels do I get with OVHD?",
            answer:
              "OVHD offers channels including e.tv, eExtra, eMovies, eToonz, SABC 1-3, eNCA, and various music and religious channels. The channel lineup continues to grow.",
          },
        ]}
        areas={areas}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "OVHD Installation Cape Town",
            provider: {
              "@type": "LocalBusiness",
              name: "Cape Direct Connect",
            },
            areaServed: { "@type": "City", name: "Cape Town" },
            description:
              "Professional OVHD / OpenView HD installation in Cape Town. Free-to-air satellite TV with no monthly fees.",
          }),
        }}
      />
    </>
  );
}
