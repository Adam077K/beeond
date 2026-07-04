import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
      </main>
    </>
  );
}
