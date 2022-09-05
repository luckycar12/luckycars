import { tw, css } from 'twind/css';
import Protection from '@/constants/svg/protection.svg';
import Insurance from '@/constants/svg/insurance.svg';
import Love from '@/constants/svg/love.svg';
import Checking from '@/constants/svg/checking.svg';
import Dollar from '@/constants/svg/dollar.svg';
import Scale from '@/constants/svg/scale.svg';
import ShoppingCard from '@/constants/svg/shopping-cart.svg';
import Hike from '@/constants/svg/hike.svg';
import Paper from '@/constants/svg/paper.svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto pt-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Dlaczego warto nam zaufać?
      </h1>
    </div>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <Protection width={50} height={50} fill="currentColor" className={tw(`h-10 w-10 text-indigo-500`)} />
              <div className={tw(`mt-4 text-xl text-center`)}>Setki sprowadzonych samochodów</div>
            </div>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <Insurance width={20} height={20} fill="currentColor" className={tw(`h-10 w-10 text-indigo-500`)} />
              <div className={tw(`mt-4 text-xl text-center`)}>100% gwarancji zadowolenia z naszej usługi</div>
            </div>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex flex-col items-center">
              <Love width={20} height={20} fill="currentColor" className={tw(`h-10 w-10 text-indigo-500`)} />
              <div className={tw(`mt-4 text-xl text-center`)}>Auto pod dom</div>
            </div>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <Checking width={20} height={20} fill="currentColor" className={tw(`h-10 w-10 text-indigo-500`)} />
              <div className={tw(`mt-4 text-xl text-center`)}>Rzetelne i profesjonalne podejście</div>
            </div>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <Dollar width={20} height={20} fill="currentColor" className={tw(`h-10 w-10 text-indigo-500`)} />
              <div className={tw(`mt-4 text-xl text-center`)}>Bez ukrytych kosztów</div>
            </div>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <Scale width={20} height={20} fill="currentColor" className={tw(`h-10 w-10 text-indigo-500`)} />
              <div className={tw(`mt-4 text-xl text-center`)}>Szacunkowa wycena ewentualnej naprawy</div>
            </div>
          </div>
          <div className={tw(`w-full border-t md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <Paper width={20} height={20} fill="currentColor" className={tw(`h-10 w-10 text-indigo-500`)} />
              <div className={tw(`mt-4 text-xl text-center`)}>Załatwiamy wszystkie formalności</div>
            </div>
          </div>
          <div className={tw(`w-full border-t md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex flex-col items-center`)}>
              <ShoppingCard width={20} height={20} fill="currentColor" className={tw(`h-10 w-10 text-indigo-500`)} />
              <div className={tw(`mt-4 text-xl text-center`)}>Korzystamy tylko ze sprawdzonych serwisów aukcyjnych</div>
            </div>
          </div>
          <div className={tw(`w-full border-t md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex flex-col items-center">
              <Hike width={20} height={20} fill="currentColor" className={tw(`h-10 w-10 text-indigo-500`)} />
              <div className={tw(`mt-4 text-xl text-center`)}>Bezpieczny zakup</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600 mb-12`)}>
          Z jakich stron korzystamy podczas licytacji
        </p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <img src="/images/png/logo-1.png" alt="logo" className={tw(`max-w-xs mr-8`)} />
          <img src="/images/png/logo-2.gif" alt="logo" className={tw(`max-w-xs`)} />
        </div>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600 mb-12`)}>
          Skąd sprowadzamy pojazdy?
        </p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_the_United_States_%281861-1863%29.svg/640px-Flag_of_the_United_States_%281861-1863%29.svg.png"
            alt="logo"
            className={tw(`max-w-xs mr-8`)}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png"
            alt="logo"
            className={tw(`max-w-xs mr-8`)}
          />
          <img
            src="https://bartekwpodrozy.pl/wp-content/uploads/2020/01/DSC_4033_1slider.jpg"
            alt="logo"
            className={tw(`max-w-xs mr-8`)}
          />
          <img
            src="https://transporteuropejski.pl/wp-content/uploads/2017/03/Anglia.png"
            alt="logo"
            className={tw(`max-w-xs`)}
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
