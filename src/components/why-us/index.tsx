import { tw } from 'twind';
import Particles from 'react-particles-js';

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

const WhyUsSection = () => (
  <section className="whyus">
    <div className={tw(`w-full min-h-screen bg-black relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-32 why-section`)}>
        <h1 className={tw(`text-white text-4xl lg:text-6xl font-bold text-center`)}>Dlaczego warto nam zaufać?</h1>
        <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
          <div className={tw(`container mx-auto px-6 p-6`)}>
            <div className={tw(`flex flex-wrap my-12`)}>
              <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
                <div className={tw(`flex flex-col items-center`)}>
                  <img src="/images/svg/protection.svg" width="50px" alt="" />
                  <div className={tw(`mt-4 text-xl text-center text-white`)}>Setki sprowadzonych samochodów</div>
                </div>
              </div>
              <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
                <div className={tw(`flex flex-col items-center`)}>
                  <img src="/images/svg/insurance.svg" width="50px" alt="" />
                  <div className={tw(`mt-4 text-xl text-center text-white`)}>
                    100% gwarancji zadowolenia z naszej usługi
                  </div>
                </div>
              </div>
              <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
                <div className="flex flex-col items-center">
                  <img src="/images/svg/love.svg" width="50px" alt="" />
                  <div className={tw(`mt-4 text-xl text-center text-white`)}>Auto pod dom</div>
                </div>
              </div>
              <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
                <div className={tw(`flex flex-col items-center`)}>
                  <img src="/images/svg/checking.svg" width="50px" alt="" />
                  <div className={tw(`mt-4 text-xl text-center text-white`)}>Rzetelne i profesjonalne podejście</div>
                </div>
              </div>
              <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
                <div className={tw(`flex flex-col items-center`)}>
                  <img src="/images/svg/dollar.svg" width="50px" alt="" />
                  <div className={tw(`mt-4 text-xl text-center text-white`)}>Bez ukrytych kosztów</div>
                </div>
              </div>
              <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
                <div className={tw(`flex flex-col items-center`)}>
                  <img src="/images/svg/scale.svg" width="50px" alt="" />
                  <div className={tw(`mt-4 text-xl text-center text-white`)}>Szacunkowa wycena ewentualnej naprawy</div>
                </div>
              </div>
              <div className={tw(`w-full border-t md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
                <div className={tw(`flex flex-col items-center`)}>
                  <img src="/images/svg/file.svg" width="50px" alt="" />
                  <div className={tw(`mt-4 text-xl text-center text-white`)}>Załatwiamy wszystkie formalności</div>
                </div>
              </div>
              <div className={tw(`w-full border-t md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
                <div className={tw(`flex flex-col items-center`)}>
                  <img src="/images/svg/shopping-cart.svg" width="50px" alt="" />
                  <div className={tw(`mt-4 text-xl text-center text-white`)}>
                    Korzystamy tylko ze sprawdzonych serwisów aukcyjnych
                  </div>
                </div>
              </div>
              <div className={tw(`w-full border-t md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
                <div className="flex flex-col items-center">
                  <img src="/images/svg/hike.svg" width="50px" alt="" />
                  <div className={tw(`mt-4 text-xl text-center text-white`)}>Bezpieczny zakup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
