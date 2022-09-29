import { Box, Flex } from '@chakra-ui/react';
import { tw } from 'twind';

const listItems = [
  {
    title: `Wybór auta`,
    // eslint-disable-next-line max-len
    description: `Współpracę rozpoczynamy od wyszukania odpowiedniego POJAZDU, spełniającego wszystkie wymagania klienta. Następnie auto jest przez nas weryfikowane poprzez Raporty Carfax oraz osoby znajdujące się na miejscu . Po sprawdzeniu historii klient otrzymuje od nas szacowaną cene pojazdu pod dom`,
    image: `/images/svg/cruise.svg`,
  },
  {
    title: `Umowa oraz kaucja`,
    // eslint-disable-next-line max-len
    description: `Przed zakupem podpisujemy umowę. Klient jest także zobligowany do wpłaty kaucji zwrotnej. Kaucja jest niezbędna w przypadku wycofania się klienta po zakupie auta. Wtedy, przy zwrocie, sprzedający pobiera taką karę. To nasze zabezpieczenie na wypadek rezygnacji. W przypadku niepomyślnego zakończenia  zakupu kaucja jest zwracana, bądź pozostaje na poczet kolejnych prób. Każde podejście do zakupu jest w pełni darmowe.`,
    image: `/images/svg/document.svg`,
  },
  {
    title: `Zakup auta`,
    // eslint-disable-next-line max-len
    description: `Po załatwieniu wszystkich formalności przystępujemy do kupna i prowadzimy je maksymalnie do kwoty wcześniej ustalonej. Każdy klient może obserwować przebieg na żywo. Na życzenie może być z nami „na telefonie” i kontrolować oferty.`,
    image: `/images/svg/donation.svg`,
  },
  {
    title: `Płatność za pojazd`,
    // eslint-disable-next-line max-len
    description: `Po zakupie auta MUSIMY  w ciągu  48 godzin wysłac   zapłatę za auto oraz prowizję sprzedającego. Płatność odbywa się bezpośrednio do USA. Udzielamy wszelkich porad jak wykonać przelew.`,
    image: `/images/svg/invoice.svg`,
  },
  {
    title: `Transport do Europy`,
    // eslint-disable-next-line max-len
    description: `W momencie, gdy auto jest opłacone, możemy rozpocząć procedurę transportu auta do Europy. Zawsze dostarczamy auto do najbliższego portu, przez co minimalizujemy koszty transportu lądowego po USA. Następnie klient otrzymuje od nas zdjęcia wykonane w magazynie. Następnie auto zostaje załadowane do kontenera i wyrusza w podróż do Europy. Klient otrzymuje od nas link, w którym może śledzić podróż swojego pojazdu.`,
    image: `/images/svg/trade.svg`,
  },
  {
    title: `Odprawa celna`,
    // eslint-disable-next-line max-len
    description: `Po dotarciu do portu docelowego klient otrzymuje od nas zdjęcia auta po wyładowaniu go z kontenera. Wtedy też następuje odprawa celno-skarbowa.`,
    image: `/images/svg/trade.svg`,
  },
  {
    title: `Transport do Ciebie`,
    // eslint-disable-next-line max-len
    description: `Po zapłacie należności, auto zostaje zwolnione. Wtedy organizujemy transport pojazdu pod wybrany przez niego adres.`,
    image: `/images/svg/trade.svg`,
  },
  {
    title: `Naprawa`,
    // eslint-disable-next-line max-len
    description: `Jeżeli klient wyraża taką chęć, może naprawić auto bezpośrednio w naszych partnerskich warsztatach , przez co może odebrać auto gotowe do jazdy i w pełni przystosowane do rynku europejskiego..`,
    image: `/images/svg/trade.svg`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base font-semibold tracking-wide uppercase`)}>Cały proces zakupu krok po kroku</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Jak to działa?</p>
      </div>
      <Flex justifyContent="center">
        <Box maxW="66%">
          <ul className="list-items">
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4 mb-6`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    <img src={item.image} alt="" />
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>
                    {index + 1}. {item.title}
                  </h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Box>
      </Flex>
    </div>
  </section>
);

export default ListSection;
