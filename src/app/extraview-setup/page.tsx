import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { areas } from "@/data/siteData";

export const metadata: Metadata = {
  title: "ExtraView Setup Cape Town | DStv ExtraView Installation",
  description:
    "Professional DStv ExtraView setup in Cape Town. Link multiple decoders, watch different channels on different TVs. Same-day installation. Call now.",
};

export default function ExtraViewSetupPage() {
  return (
    <>
      <ServicePageLayout
        title="ExtraView Setup"
        description="Watch different DStv channels on different TVs in your home with ExtraView. We link your decoders, configure the settings, and ensure everything works seamlessly on a single subscription."
        features={[
          "Link 2 or more decoders on one subscription",
          "Watch different channels on different TVs",
          "Decoder configuration and pairing",
          "Additional cable point installation",
          "Smart LNB upgrade if required",
          "Multi-switch installation for 3+ decoders",
          "Signal splitting and distribution",
          "Remote control setup for each decoder",
          "DStv self-service activation assistance",
        ]}
        process={[
          {
            step: "Assess Your Setup",
            description:
              "We evaluate your current DStv setup, number of decoders, and cabling to determine what's needed for ExtraView.",
          },
          {
            step: "Install Additional Points",
            description:
              "If needed, we run additional cables, install a Smart LNB, or add a multi-switch for your extra viewing points.",
          },
          {
            step: "Configure ExtraView",
            description:
              "We link your decoders via the DStv self-service portal, configure the ExtraView settings, and pair the units.",
          },
          {
            step: "Test All Points",
            description:
              "We test that all TVs can independently switch channels and that the ExtraView link is stable.",
          },
        ]}
        faqs={[
          {
            question: "What is DStv ExtraView?",
            answer:
              "ExtraView lets you link two or more DStv decoders on a single subscription. Each TV can watch different channels independently. You pay a small monthly ExtraView fee per additional decoder.",
          },
          {
            question: "How much does ExtraView setup cost?",
            answer:
              "ExtraView setup costs depend on your existing cabling and equipment. If you already have cables run to the second TV, it's a configuration job. If new cables are needed, there's an additional installation cost. Contact us for a quote.",
          },
          {
            question: "Do I need a Smart LNB for ExtraView?",
            answer:
              "In most cases, yes. A Smart LNB provides enough signal outputs for multiple decoders. If you have an older single or twin LNB, we'll upgrade it as part of the ExtraView installation.",
          },
          {
            question: "Can I have ExtraView with an Explora and an HD decoder?",
            answer:
              "Yes, you can link different decoder types (e.g., Explora + HD decoder, or Explora + Explora) on ExtraView. We'll configure each unit correctly.",
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
            name: "ExtraView Setup Cape Town",
            provider: {
              "@type": "LocalBusiness",
              name: "Cape Direct Connect",
            },
            areaServed: { "@type": "City", name: "Cape Town" },
            description:
              "Professional DStv ExtraView setup and installation in Cape Town. Link multiple decoders on one subscription.",
          }),
        }}
      />
    </>
  );
}
