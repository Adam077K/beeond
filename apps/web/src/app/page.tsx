import { COPY } from "@/lib/brand.lock";
import { SiteHeader } from "@/components/site-header";
import { RevealObserver } from "@/components/reveal-observer";
import { Hero } from "@/components/hero/hero";
import { ArtifactStripSection } from "@/components/sections/artifact-strip";
import { ProblemSection } from "@/components/sections/problem";
import { ChannelMapSection } from "@/components/channel-map/section";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { AntiGenericSection } from "@/components/sections/anti-generic";
import { ProofC6Section } from "@/components/sections/proof-c6";
import { FoundersSection } from "@/components/sections/founders";
import { TrustC5Section } from "@/components/sections/trust-c5";
import { SocialProofSection } from "@/components/sections/social-proof";
import { FaqSection } from "@/components/sections/faq";
import { FAQ } from "@/components/sections/faq-data";
import { FinalCtaSection } from "@/components/sections/final-cta";

/** JSON-LD mirrors on-page copy verbatim — same data module as the DOM. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://beeond.ai/#org",
      name: "Beeond",
      url: "https://beeond.ai",
      description: COPY.subhead.en,
      founder: [
        { "@type": "Person", name: "Adam" },
        { "@type": "Person", name: "Yarden Morgan" },
      ],
      knowsLanguage: ["en", "he"],
    },
    {
      "@type": "Service",
      serviceType:
        "AI-native done-for-you B2B marketing — whole digital footprint",
      provider: { "@id": "https://beeond.ai/#org" },
      areaServed: ["IL", "US"],
      description:
        "One coordinated swarm across GEO/AI-search visibility, SEO content, LinkedIn, paid, email lifecycle, CRO, digital PR, founder-led content, trust and reporting.",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <RevealObserver />
      <main id="main">
        <Hero />
        <ArtifactStripSection />
        <ProblemSection />
        <ChannelMapSection />
        <HowItWorksSection />
        <AntiGenericSection />
        <ProofC6Section />
        <FoundersSection />
        <TrustC5Section />
        <SocialProofSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </>
  );
}
