import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { areas } from "@/data/siteData";

export const metadata: Metadata = {
  title: "DStv Installation Cape Town",
  description:
    "Professional DStv installation in Cape Town. Single view, extra view and multi-room setups. Same-day service. Accredited installers. Call for a free quote.",
};

export default function DstvInstallationPage() {
  return (
    <>
      <ServicePageLayout
        title="DStv Installation"
        description="Get professional DStv installation anywhere in Cape Town. From single-view setups to multi-room installations, our accredited technicians ensure perfect signal quality and clean cable management every time."
        features={[
          "Standard single-view installation",
          "Extra view / dual-view setup",
          "Multi-room installation (3+ points)",
          "New dish and LNB installation",
          "Signal meter alignment for best quality",
          "Cable routing and concealment",
          "Decoder setup and channel activation",
          "Smart LNB installations",
          "Communal / complex installations",
        ]}
        process={[
          {
            step: "Free Consultation",
            description:
              "Call us or send a WhatsApp. We'll discuss your requirements, number of viewing points, and provide a quote.",
          },
          {
            step: "Site Assessment",
            description:
              "Our technician assesses the best dish position, cable routes, and signal conditions at your property.",
          },
          {
            step: "Professional Installation",
            description:
              "We install the dish, run cables neatly, set up your decoder, and align for maximum signal strength.",
          },
          {
            step: "Testing & Handover",
            description:
              "We test every channel, walk you through the remote and settings, and ensure you're 100% happy.",
          },
        ]}
        faqs={[
          {
            question: "How much does DStv installation cost in Cape Town?",
            answer:
              "A standard single-view DStv installation in Cape Town starts from R850. Extra view setups and multi-room installations vary based on cable runs and complexity. Contact us for an exact quote.",
          },
          {
            question: "How long does a DStv installation take?",
            answer:
              "A standard single-view installation takes 1-2 hours. Multi-room setups may take 3-4 hours depending on the number of points and cable routing required.",
          },
          {
            question: "Do you supply the DStv decoder and dish?",
            answer:
              "Yes, we can supply all equipment including decoders, satellite dishes, LNBs, and cabling. You can also purchase your own equipment and we'll install it.",
          },
          {
            question: "Can you install DStv in a complex or apartment?",
            answer:
              "Yes, we regularly install DStv in apartments, complexes, and townhouse developments. We can work with existing communal dishes or install dedicated systems.",
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
            name: "DStv Installation Cape Town",
            provider: {
              "@type": "LocalBusiness",
              name: "Cape Direct Connect",
            },
            areaServed: { "@type": "City", name: "Cape Town" },
            description:
              "Professional DStv installation services in Cape Town including single view, extra view and multi-room setups.",
          }),
        }}
      />
    </>
  );
}
