import { NextSeo } from 'next-seo';
import useEmblaCarousel from 'embla-carousel-react';
import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import CasesSection from '@/components/cases-section';
import Footer from '@/components/footer';
import Placeholder from '@/components/placeholder';
import SocialProof from '@/components/social-proof';
import Form from '@/components/form';

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
            <h2>Spełnimy Twoje motoryzacyjne marzenie</h2>
            <p>Zapłacisz o 30%-55% ceny rynkowej mniej</p>
          </div>
          <div
            className="embla__slide"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/black-sport-car-front-side-salon-view-black-wheel-with-metallic-silver-color-direction-door-open_114579-1166.jpg?w=1800&t=st=1661861983~exp=1661862583~hmac=6f2822f39fe58957ae5361fdf1906df4f83b8eeb61ee5ddac12701c46df89818')`,
            }}
          >
            <h2>Postaw na wygodę, a wszystkie formalności zostaw nam</h2>
            <p>Setki zadowolonych klientów z całego świata</p>
          </div>
          <div
            className="embla__slide"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/sport-car-with-black-white-autotuning-driving-forest_114579-4076.jpg?w=2000&t=st=1661773345~exp=1661773945~hmac=7c901ceb6a1475dc5426c9d6c6f564183e6b3b132b77940e8381f65e2bb9b087')`,
            }}
          >
            <h2>Sprowadzimy kazdy rodzaj pojazdu</h2>
            <p>Zanim kupisz pojazd dokładnie go sprawdzimy</p>
          </div>
        </div>
      </div>
      <Form />
      <Header />
      <div
        className="cta"
        style={{
          backgroundImage: `url(
            https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
          )`,
        }}
      >
        <h2>Współpracując z LuckyCars zaszczędzasz do 55% wartości pojazdu</h2>
      </div>
      <div>
        <h2>robimy tłumaczenia</h2>
        <p>
          Na życzenie klientów pomagamy w tłumaczeniach dokumentów, skontaktujemy klienta z rzeczoznawcą w celu
          przygotowania opinii potrzebnej do opłacenia podatku akcyzowego. organizujemy części zamienne CZĘŚCI ZAMIENNE
          Pomagamy w zakupie części do napraw zakupionych przez nas aut.
        </p>
      </div>
      <main>
        <ListSection />
        <Placeholder name="Kalkulator kosztów" />
        <CasesSection />
        <SocialProof />
      </main>
      <Footer />
    </Page>
  );
}
