import { tw } from 'twind';

const Footer = () => (
  <footer className={tw(`bg-black border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`w-full`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div className={tw(`mb-14 flex items-center w-full`)}>
              <img src="/images/logo-half.png" alt="logo" width={120} />
            </div>
            <span>Ikona fb</span>
            <span>Ikona ig</span>
          </li>
          <div style={{ color: `white` }}>
            DANE KONTAKTOWE
            <br />
            LUCKY CAR
            <br />
            ul. MACEDOŃSKA 89B
            <br />
            51-109 WROCŁAW
            <br />
            NIP: 555-235-81-51
            <br />
          </div>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
