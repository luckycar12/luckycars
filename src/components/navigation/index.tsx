import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: `Wyszukaj auto`,
    href: `/`,
  },
  {
    label: `Dlaczego my?`,
    href: `/`,
  },
  {
    label: `Jak to działa?`,
    href: `/`,
  },
  {
    label: `Kalkulacja kosztów`,
    href: `/`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-white`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: Link) => (
        <a href={link.href} className={tw(`text-white block px-3 py-2 text-base font-medium`)} key={link.label}>
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={tw(`absolute navbar`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center justify-between w-full`)}>
            <div className={tw(`flex-shrink-0`)}>
              <img src="/images/logo-half.png" alt="logo" width={120} />
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link: Link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={tw(`text-white hover:text-white px-3 py-2 rounded-md font-medium`)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button primary>
                  <a href="tel:+48690502054">
                    <img
                      src="https://res.cloudinary.com/dze1rfho9/image/upload/v1667823998/luckycars/call_v3yxxc.png"
                      alt=""
                    />
                    +48 690 502 054
                  </a>
                </Button>
                <Button primary>
                  <a href="tel:+48572973088">
                    <img
                      src="https://res.cloudinary.com/dze1rfho9/image/upload/v1667823998/luckycars/call_v3yxxc.png"
                      alt=""
                    />
                    +48 572 973 088
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
