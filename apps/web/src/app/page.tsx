import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero/hero";
import { ChannelMapSection } from "@/components/channel-map/section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ChannelMapSection />
      </main>
    </>
  );
}
