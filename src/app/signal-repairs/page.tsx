import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { areas } from "@/data/siteData";

export const metadata: Metadata = {
  title: "DStv Signal Repairs Cape Town",
  description:
    "Expert DStv signal repairs in Cape Town. Fix pixelation, weak signal, E48-32 errors, and dish misalignment. Same-day service. Call now.",
};

export default function SignalRepairsPage() {
  return (
    <>
      <ServicePageLayout
        title="Signal Repairs"
        description="Pixelation, freezing, or complete signal loss? Our signal specialists use professional meters to diagnose and resolve all satellite signal issues. We restore your DStv to crystal-clear quality."
        features={[
          "Professional signal strength testing",
          "Satellite dish realignment",
          "LNB testing and replacement",
          "Cable continuity testing",
          "F-connector replacement",
          "Signal splitter diagnosis",
          "Multi-switch troubleshooting",
          "Weather damage assessment",
          "Signal booster installation",
        ]}
        process={[
          {
            step: "Describe the Problem",
            description:
              "Tell us about the signal issues — pixelation, freezing, black screen, or error codes. This helps us prepare the right equipment.",
          },
          {
            step: "Signal Analysis",
            description:
              "We use professional signal meters to test signal strength and quality at the dish, cable junction, and decoder.",
          },
          {
            step: "Identify & Fix",
            description:
              "We identify the weak point in the signal chain — dish position, LNB, cabling, or connectors — and fix it on the spot.",
          },
          {
            step: "Verify Quality",
            description:
              "We verify signal strength across all transponders and check picture quality on multiple channels before we leave.",
          },
        ]}
        faqs={[
          {
            question: "Why is my DStv picture pixelating?",
            answer:
              "Pixelation is usually caused by a weak signal. Common causes include dish misalignment (often after strong winds), a degrading LNB, damaged cables, or corroded connectors. We can diagnose the exact cause.",
          },
          {
            question: "My DStv works sometimes but not in bad weather. Why?",
            answer:
              "If your DStv loses signal during rain, it typically means your signal is marginally weak. In clear weather it's just enough, but rain attenuates the signal below the minimum threshold. A dish realignment or LNB upgrade usually fixes this.",
          },
          {
            question: "Can you boost my DStv signal?",
            answer:
              "Yes, we can install signal amplifiers where needed. However, we always address the root cause first — a properly aligned dish with good cabling shouldn't need a booster.",
          },
          {
            question: "How long does a signal repair take?",
            answer:
              "Most signal repairs take 30-60 minutes. Complex issues involving cable replacement or re-routing may take longer. We'll give you a time estimate before starting.",
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
            name: "DStv Signal Repairs Cape Town",
            provider: {
              "@type": "LocalBusiness",
              name: "Cape Direct Connect",
            },
            areaServed: { "@type": "City", name: "Cape Town" },
            description:
              "Expert DStv signal repair services in Cape Town. Fix pixelation, weak signal, and dish misalignment.",
          }),
        }}
      />
    </>
  );
}
