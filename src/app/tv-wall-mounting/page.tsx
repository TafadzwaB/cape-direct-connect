import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { areas } from "@/data/siteData";

export const metadata: Metadata = {
  title: "TV Wall Mounting Cape Town | Professional TV Installation",
  description:
    "Professional TV wall mounting in Cape Town. All TV sizes, all wall types. Concealed cables, bracket supply and installation. Call for a free quote.",
};

export default function TvWallMountingPage() {
  return (
    <>
      <ServicePageLayout
        title="TV Wall Mounting"
        description="Transform your living space with professional TV wall mounting. We securely mount all TV sizes on any wall type with clean cable concealment. Bracket supply and installation included."
        features={[
          "Mounting for all TV sizes (32\" to 85\"+)",
          "Fixed, tilting, and full-motion brackets",
          "Brick, concrete, and dry wall mounting",
          "Concealed cable channelling",
          "Cable trunking for neat finish",
          "Bracket supply and installation",
          "Soundbar mounting",
          "DStv decoder and media player setup",
          "Power point relocation advice",
        ]}
        process={[
          {
            step: "Choose Your Position",
            description:
              "We help you pick the perfect viewing height and position based on your room layout and seating arrangement.",
          },
          {
            step: "Wall Assessment",
            description:
              "We check the wall type, stud locations, and cable routing options to ensure a safe and secure mount.",
          },
          {
            step: "Mount & Conceal",
            description:
              "We install the bracket, mount the TV, and route cables behind the wall or through trunking for a clean look.",
          },
          {
            step: "Setup & Calibrate",
            description:
              "We connect your DStv, media devices, and sound system, then adjust picture settings for the best viewing experience.",
          },
        ]}
        faqs={[
          {
            question: "Can you mount a TV on a dry wall / partition wall?",
            answer:
              "Yes, we use specialized hollow-wall anchors (like toggle bolts) rated for the weight of your TV. For very large TVs on dry wall, we may recommend a plywood backing plate for extra security.",
          },
          {
            question: "Do you supply TV wall brackets?",
            answer:
              "Yes, we supply high-quality brackets in fixed, tilting, and full-motion configurations. You can also provide your own bracket and we'll install it.",
          },
          {
            question: "How do you hide the cables?",
            answer:
              "We offer two options: in-wall cable routing (chasing cables into the wall and plastering over) or surface-mounted cable trunking for a neat finish without cutting into walls.",
          },
          {
            question: "How long does TV wall mounting take?",
            answer:
              "A standard TV wall mount with cable concealment takes 1-2 hours. More complex setups with multiple devices or extensive cable routing may take 2-3 hours.",
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
            name: "TV Wall Mounting Cape Town",
            provider: {
              "@type": "LocalBusiness",
              name: "Cape Direct Connect",
            },
            areaServed: { "@type": "City", name: "Cape Town" },
            description:
              "Professional TV wall mounting services in Cape Town. All TV sizes, all wall types, concealed cabling.",
          }),
        }}
      />
    </>
  );
}
