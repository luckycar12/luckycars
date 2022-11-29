import { tw } from 'twind';
import Particles from 'react-particles-js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Flex, Text } from '@chakra-ui/react';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const socialProofs = [
  {
    name: `Marcin`,
    // eslint-disable-next-line max-len
    text: `Pełen profesjonalizm - Codziennie otrzymywałem listy aut które mnie interesowały oraz doradztwo co do stanu egzemplarzy które mnie zainteresowały. Sam proces licytacji i transportu przebiegł szybko i sprawnie. Bardzo dobry kontakt telefoniczny. Na pewno przy kolejnych zakupach skorzystam z usług Pana Łukasza.`,
  },
  {
    name: `Jarek`,
    // eslint-disable-next-line max-len
    text: `Polecam współpracę, rzetelna firma, zawsze pomocna, odpowie na każde pytanie, następne auto naprewno sprowadzimy z Lucky Cars`,
  },
  {
    name: `Darek`,
    // eslint-disable-next-line max-len
    text: `Bardzo profesjonalne podejście i pomoc na każdym kroku od wyboru auta, poprzez fracht i transport lądowy już w Europie. Gorąco polecam:)`,
  },
  {
    name: `Mariusz`,
    // eslint-disable-next-line max-len
    text: `Import przebiegał szybko i sprawnie, a kontakt z Panem Jakubem jest dosłownie 24h na dobę. Profesjonalne podejście i fachowa rada sprawiły, że skorzystałam z usług firmy juz kolejny raz. Dzięki kompleksowej usłudze wraz z naprawą po niecałych 3 miesiącach mogłam cieszyć się moim wymarzonym samochodem:) Polecam bardzo serdecznie`,
  },
  {
    name: `Bartek`,
    // eslint-disable-next-line max-len
    text: `Polecam, cały proces od zakupu po dostarczenie auta przebiegł sprawnie i bez żadnych niespodzianek. Pan Łukasz odpowiadał na wszystkie szczegółowe pytania , doradzał przy wyborze konkretnego pojazdu a , co ważniejsze czasem i odradzał podejrzany egzemplarz auta kontakt konkretny , żadnego owijania w bawełnę. !Uczciwy partner, pomoc na każdym etapie sprowadzenia auta - etapie zakupu, transportu jak i rejestracji. Polecam.`,
  },
  {
    name: `Robert`,
    // eslint-disable-next-line max-len
    text: `Taką piękną "brykę" sprowadził z USA dla rodziny Pan Łukasz  w 6 - tygodni.
    Na każdym etapie operacji był bardzo pomocny i cierpliwie tłumaczył
    krok po kroku wszystkie procedury.
    `,
  },
  {
    name: `Piotr`,
    // eslint-disable-next-line max-len
    text: `Sprawnie, szybko , solidnie, uczciwie.Współpraca z Panem to czysta przyjemność, Z taką firmą sprowadzenie samochodu zza oceanu to przysłowiowa bułka z masłem. Pozdrawiam i życzę sukcesów.`,
  },
  {
    name: `Marcin`,
    // eslint-disable-next-line max-len
    text: `Pierwszy raz sprowadzałem auto z USA więc było kilka wątpliwości, które szybko rozwiał Pan Łukasz . Super obsługa i stały kontakt, polecam !`,
  },
  {
    name: `Bogdan`,
    // eslint-disable-next-line max-len
    text: `Importowałem BMW z USA korzystając z usług Lucky cars. Życzę wszystkim żeby trafiali na takie osoby jak Pan Łukasz. Zawsze pod telefonem, służący pomocą w sprawach dotyczących transportu. Pomógł mi również w sytuacji awaryjnej gdy samochód miałem już u siebie co było tylko jego dobrą wolą. POLECAM!`,
  },
  {
    name: `Dawid`,
    // eslint-disable-next-line max-len
    text: `Serdecznie polecamy! Skorzystaliśmy już dwa razy z usług Lucky Cars Pan Jakub odpowiadał na każde nasze pytania, rozwiewał wszystkie wątpliwości. Zawsze pod telefonem, na bieżąco informował nas gdzie aktualnie znajduje się samochód. Wszystkie koszty jasno opisane i udokumentowane. POLECAMY!`,
  },
  {
    name: `Damian`,
    // eslint-disable-next-line max-len
    text: `Polecam profesjonalnie, dokładnie wykonana praca, jestem zadowolony z usługi Pan Łukasz. Kontakt telefoniczny doskonały, odpowiedzi na pytania bez ściemy i rzetelne. Wszystko na czas i zgodnie z planem. Polecam!`,
  },
  {
    name: `Janina`,
    // eslint-disable-next-line max-len
    text: `Razem z Mężem serdecznie polecamy. Bezproblemowo, wszystko zgodnie z ustaleniami.`,
  },
  {
    name: `Czarek`,
    // eslint-disable-next-line max-len
    text: `Kompleksowa pomoc poczawszy od wyboru wymarzonego auta na aukcji, ewentualna naprawe i dokumentacje w Polsce, od A do Z ,Pan Jakub bardzo kontaktowy i pomocny.Polecam.`,
  },
  {
    name: `Bartek`,
    // eslint-disable-next-line max-len
    text: `Rewelacja! Pan Łukasz to złoty człowiek. Fachowa obsługa, sprawnie przeprowadzone testy dwóch grubszych samochodów. Od razu widać że pomogą kompleksowo od początku do końca. Na pewno w niedalekim czasie będziemy coś razem działać`,
  },
  {
    name: `Eryk`,
    // eslint-disable-next-line max-len
    text: `Doskonała obsługa i kontakt z klientem, pracownicy z ogromną wiedzą odpowiedzieli na każde moje pytanie a sam proces zakupu został przeprowadzony niezwykle sprawnie.`,
  },
  {
    name: `Gracjan`,
    // eslint-disable-next-line max-len
    text: `Najlepsi w swojej dziedzinie i nie tylko! Polecam również ich warsztat, sami fachowcy!`,
  },
  {
    name: `Tomasz G.`,
    // eslint-disable-next-line max-len
    text: `Zdecydowanie polecam. Bardzo profesjonalna i dokładna obsługa. Samochód mnie kosztował tyle ile wcześniej pracownik obliczył. Poza małym otarciem w porcie (który zrekompensowano) jestem w 100 % zadowolony.`,
  },
  {
    name: `Tomasz`,
    // eslint-disable-next-line max-len
    text: `Polecam, super obsługa. Rzadko spotyka się taki profesjonalizm!`,
  },
  {
    name: `Robert`,
    // eslint-disable-next-line max-len
    text: `Cudowna współpraca, wszystko załatwione tak jak należy, polecam serdecznie.`,
  },
  {
    name: `Marcin`,
    // eslint-disable-next-line max-len
    text: `Polecam !! Świetna obsługa i pełen profesjonalizm`,
  },
  {
    name: `Daniel`,
    // eslint-disable-next-line max-len
    text: `Samochód przypłynął w 6 tygodni, wszystko zgodnie z ustaleniami, dopięte na ostatni guzik. Polecam :)`,
  },
  {
    name: `Artur`,
    // eslint-disable-next-line max-len
    text: `Polecam z czystym sumieniem, obsługa na świetnym poziomie, z dużą wiedzą i znajomością rynku. Samochód sprowadzony bez najmniejszych problemów, po 3 miesiącach użytkowania nie znalazłem niczego, do czego można się przyczepić.`,
  },
  {
    name: `Berek`,
    // eslint-disable-next-line max-len
    text: `Gorąco i z czystym sumieniem polecam tę firmę do importu samochodu z USA. Każdy samochód został dokładnie omówiony i sprawdzony w miarę możliwości przed podjęciem próby zakupu. Współpraca przeszła moje najśmielsze oczekiwania. Zdecydowanie polecam!`,
  },
  {
    name: `Tomasz`,
    // eslint-disable-next-line max-len
    text: `Marzył mi się piękny samochód, który był dostępny tylko w USA. Zdecydowałam się skorzystać z usługi tej firmy, w celu ściągnięcia tego samochodu do Polski. Cały proces nie trwał zbyt długo, a firma znalazła idealne pod względem technicznym i wizualnym samochód. Bardzo dziękuję!`,
  },
  {
    name: `Antek`,
    // eslint-disable-next-line max-len
    text: `Firma sprowadziła dla mnie samochód. Od samego początku kontakt był bezproblemowy, wszystko było czarno na białym. Pomoc na każdym kroku transakcji. Zdecydowanie polecam!`,
  },
  {
    name: `Kornel`,
    // eslint-disable-next-line max-len
    text: `Auto przed zakupem zostało sprawdzone dokładnie przez firmę. Na żywo samochód wygląda jeszcze lepiej niż na zdjęciach. Zdecydowanie mogę polecić firmę. Dzięki pełnemu zaangażowaniu lucky cars udało mi się sprowadzić samochód, o którym marzyłam wraz z moim chłopakiem.`,
  },
  {
    name: `Piotr`,
    // eslint-disable-next-line max-len
    text: `Polecam serdecznie! Rzetelnie przeprowadzili mnie przez cały proces sprowadzenia wymarzonego pojazdu. Duża wiedza, doświadczenie oraz cierpliwe podejście zaprocentowało sprowadzeniem takiego pojazdu, jaki sobie wymarzyłem. :)`,
  },
  {
    name: `Paweł`,
    // eslint-disable-next-line max-len
    text: `Bardzo pomocna, rzetelna firma. Znalezienie idealnego samochodu przebiegło szybko, podobnie jak jego transport do kraju. Polecam każdemu, kto marzy o własnym amerykańskim aucie.`,
  },
  {
    name: `Bartek`,
    // eslint-disable-next-line max-len
    text: `Za pośrednictwem firmy lucky cars sprowadziłem auto z USA. Zależało mi na bezpiecznym aucie rodzinnym z możliwie niskim przebiegiem. Takowe znaleźli dla mnie i szybko sprowadzili. Świetna firma. Bardzo polecam. :)`,
  },
  {
    name: `Łukasz`,
    // eslint-disable-next-line max-len
    text: `Sprowadzałem przez lucky cars swój wymarzony samochód. Profesjonalne podejście do sprawy, od początku do samego końca. Jestem niesamowicie zadowolony z naszej współpracy. Polecam!`,
  },
  {
    name: `Marta`,
    // eslint-disable-next-line max-len
    text: `Zamówiłam auto i dokładnie takie mi sprowadzono. Załatwiono również wszelkie formalności za mnie. Bardzo sprawnie i fachowo. Miła obsługa. Polecam.`,
  },
  {
    name: `Olo`,
    // eslint-disable-next-line max-len
    text: `Od zawsze marzyłem o amerykańskim aucie. Dzięki Państwu udało mi się spełnić to marzenie. Doskonały kontakt, ciekawe propozycje, fachowe doradztwo. Brak zbędnych formalności.`,
  },
  {
    name: `Amadi`,
    // eslint-disable-next-line max-len
    text: `Firma godna polecenia. Wszystko tak jak się dogadaliśmy, jestem zadowolony.`,
  },
  {
    name: `Robert`,
    // eslint-disable-next-line max-len
    text: `O wszystkim informują na bieżąco oraz pomagają w formalnościach. Zakup jak najbardziej udany.`,
  },
];

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const CasesSection = () => (
  <section className="opinions">
    <div className={tw(`w-full bg-black relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-32`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Opinie</h1>
        <div className={tw(`mx-auto pt-24`)}>
          <Carousel responsive={responsive} infinite ssr>
            {socialProofs.map((testimonial) => (
              // eslint-disable-next-line react/no-array-index-key
              <Flex flexDir="column" p="20px">
                <Text color="#fff" fontFamily="Merc">
                  {testimonial.text}
                </Text>
                <Text color="#fff">{testimonial.name}</Text>
              </Flex>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
