import { tw } from 'twind';

const PlacehoderSection = ({ name }: { name: string }) => (
  <section className={tw(`text-center lg:py-28 pt-28 overflow-hidden`)}>
    <h2>Sekcja {name}</h2>
  </section>
);

export default PlacehoderSection;
