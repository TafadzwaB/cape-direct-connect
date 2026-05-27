import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { areas } from "@/data/siteData";

export const metadata: Metadata = {
  title: "DStv Repairs Cape Town | Fast Same-Day DStv Repair Service",
  description:
    "Fast DStv repairs in Cape Town. Decoder faults, no signal, error codes, LNB replacement. Same-day service available. Call now for emergency repairs.",
};

export default function DstvRepairsPage() {
  return (
    <>
      <ServicePageLayout
        title="DStv Repairs"
        description="Experiencing DStv problems? Our expert technicians diagnose and fix all DStv faults fast. From decoder errors to complete signal loss, we'll have you back up and running in no time."
        features={[
          "Decoder fault diagnosis and repair",
          "No signal / signal loss troubleshooting",
          "Error code resolution (E48-32, E16, etc.)",
          "LNB replacement",
          "Cable and connector repairs",
          "Dish realignment after storms",
          "Smart card activation issues",
          "Remote control pairing",
          "Software update assistance",
        ]}
        process={[
          {
            step: "Report Your Issue",
            description:
              "Call or WhatsApp us with a description of the problem. If possible, share the error code displayed on screen.",
          },
          {
            step: "Same-Day Dispatch",
            description:
              "We dispatch a technician to your location. Most repairs are attended to on the same day.",
          },
          {
            step: "Diagnose & Repair",
            description:
              "Our technician runs diagnostics, identifies the root cause, and repairs the fault on-site.",
          },
          {
            step: "Full Signal Test",
            description:
              "We test all channels and verify signal quality before leaving to ensure the problem is fully resolved.",
          },
        ]}
        faqs={[
          {
            question: "How much do DStv repairs cost?",
            answer:
              "DStv repair costs depend on the issue. A standard call-out and diagnosis starts from R450. Parts like LNBs or cables are quoted separately. We always provide a quote before proceeding.",
          },
          {
            question: "Can you fix my DStv if I have no signal?",
            answer:
              "Yes, signal loss is one of the most common issues we fix. It could be caused by dish misalignment, a faulty LNB, damaged cables, or weather interference. We'll diagnose and fix it.",
          },
          {
            question: "What does error E48-32 mean on DStv?",
            answer:
              "Error E48-32 typically means your DStv decoder is not receiving a signal. This could be due to dish misalignment, a faulty LNB, or cable issues. Contact us for a quick diagnosis.",
          },
          {
            question: "Do you repair DStv decoders?",
            answer:
              "We diagnose decoder issues and can resolve most software-related faults. For hardware failures, we can advise on decoder replacement options and install the new unit.",
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
            name: "DStv Repairs Cape Town",
            provider: {
              "@type": "LocalBusiness",
              name: "Cape Direct Connect",
            },
            areaServed: { "@type": "City", name: "Cape Town" },
            description:
              "Fast DStv repair services in Cape Town. Decoder faults, signal loss, error codes and LNB replacements.",
          }),
        }}
      />
    </>
  );
}
