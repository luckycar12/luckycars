import { tw } from 'twind/css';

const Header = () => (
  <header className="why-us">
    <div className={tw(`max-w-4xl mx-auto pt-16 px-14 sm:px-6 lg:px-8`)}>
      <div className={tw(`text-center`)}>
        <h1 className={tw(`mt-2 pb-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Oferta</h1>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600 mt-2`)}>
          Nasi parterzy podczas licytacji
        </p>
        <div className="section-vehicles">
          <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
            <img src="/images/png/logo-1.png" alt="logo" className={tw(`max-w-xs mr-8`)} />
            <img src="/images/png/logo-2.gif" alt="logo" className={tw(`max-w-xs`)} />
          </div>
        </div>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600 mb-6`)}>
          Sprowadzamy pojazdy z krajów:
        </p>
        <div className="section-vehicles">
          <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
            <div className={tw(`max-w-xs mr-8`)}>
              <img src="/images/png/flag-1.png" alt="logo" />
              <p className={tw(`mt-6 font-mono uppercase text-center font-medium text-sm text-gray-600 mb-6`)}>USA</p>
            </div>
            <div className={tw(`max-w-xs mr-8`)}>
              <img src="/images/png/flag-2.webp" alt="logo" />
              <p className={tw(`mt-6 font-mono uppercase text-center font-medium text-sm text-gray-600 mb-6`)}>
                Kanada
              </p>
            </div>
            <div className={tw(`max-w-xs mr-8`)}>
              <img src="/images/png/flag-3.png" alt="logo" />
              <p className={tw(`mt-6 font-mono uppercase text-center font-medium text-sm text-gray-600 mb-6`)}>
                Anglia
              </p>
            </div>
            <div className={tw(`max-w-xs`)}>
              <img src="/images/png/flag-4.png" alt="logo" />
              <p className={tw(`mt-6 font-mono uppercase text-center font-medium text-sm text-gray-600 mb-6`)}>
                ZEA (Dubaj)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600 mb-4`)}>
          Pojazdy, które sprowadzamy:
        </p>
        <div className="section-vehicles">
          <div className={tw(`flex items-center justify-center flex-wrap mr-16`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <img src="/images/svg/sedan.svg" alt="" />
              <div className={tw(`mt-4 text-gray-600 font-mono text-xl text-center`)}>Samochody</div>
            </div>
          </div>
          <div className={tw(`flex items-center justify-center flex-wrap mr-16`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <img src="/images/svg/motorcycle.svg" alt="" />
              <div className={tw(`mt-4 text-gray-600 font-mono text-xl text-center`)}>Motory</div>
            </div>
          </div>
          <div className={tw(`flex items-center justify-center flex-wrap mr-16`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <img src="/images/svg/boat.svg" alt="" />
              <div className={tw(`mt-4 text-gray-600 font-mono text-xl text-center`)}>Łodzie</div>
            </div>
          </div>
          <div className={tw(`flex items-center justify-center flex-wrap mr-16`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <img src="/images/svg/tow-truck.svg" alt="" />
              <div className={tw(`mt-4 text-gray-600 font-mono text-xl text-center`)}>Autolawety</div>
            </div>
          </div>
          <div className={tw(`flex items-center justify-center flex-wrap`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <img src="/images/svg/minibus.svg" alt="" />
              <div className={tw(`mt-4 text-gray-600 font-mono text-xl text-center`)}>Minibusy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
