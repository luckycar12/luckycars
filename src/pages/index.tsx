import { NextSeo } from 'next-seo';
import useEmblaCarousel from 'embla-carousel-react';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <Page>
      <NextSeo
        title="STARTD - Template"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div
            className="embla__slide"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/grey-luxury-sedan-car-driving-highway_114579-4024.jpg?w=2000&t=st=1661773015~exp=1661773615~hmac=e7708b6035b0034518fb2e79fa905925caa7624f1419914da94570b86882e8a8')`,
            }}
          >
            <h2>Slide 1</h2>
            <p>Opis</p>
          </div>
          <div
            className="embla__slide"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/black-sedan-car-driving-bridge-road_114579-4023.jpg?w=2000&t=st=1661773292~exp=1661773892~hmac=fbe7c5a9f02cd827ea419a9396dcc5af60c66ed5100642b5a0b565238f5f0205')`,
            }}
          >
            <h2>Slide 1</h2>
            <p>Opis</p>
          </div>
          <div
            className="embla__slide"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/sport-car-with-black-white-autotuning-driving-forest_114579-4076.jpg?w=2000&t=st=1661773345~exp=1661773945~hmac=7c901ceb6a1475dc5426c9d6c6f564183e6b3b132b77940e8381f65e2bb9b087')`,
            }}
          >
            <h2>Slide 1</h2>
            <p>Opis</p>
          </div>
        </div>
      </div>
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
