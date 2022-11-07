import { Flex } from '@chakra-ui/react';
import { tw } from 'twind';

const Footer = () => (
  <footer className={tw(`bg-black border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`w-full`)}>
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <div className={tw(`mb-7 flex items-center w-full`)}>
            <img src="/images/logo-half.png" alt="logo" width={120} style={{ margin: `0 auto` }} />
          </div>
          <Flex mt="10px" mb="20px" color="#fff">
            <div style={{ marginRight: 20 }}>+48 690 502 054</div>
            <div>+48 572 973 088</div>
          </Flex>
          <Flex alignItems="center">
            <a href="https://www.facebook.com/lucky.cars.import" target="_blank" rel="noreferrer">
              <img
                src="https://res.cloudinary.com/dze1rfho9/image/upload/v1667828067/luckycars/facebook_holwpb.png"
                alt="icon"
                width={28}
                height="auto"
                style={{ marginRight: 8 }}
              />
            </a>
            <a href="https://instagram.com/lucky_cars_import?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
              <img
                src="https://res.cloudinary.com/dze1rfho9/image/upload/v1667828067/luckycars/instagram_bhfq5r.png"
                alt="icon"
                width={24}
                height="auto"
                style={{ marginRight: 11 }}
              />
            </a>
            <a href="https://www.tiktok.com/@luckycarsimport" target="_blank" rel="noreferrer">
              <img
                src="https://res.cloudinary.com/dze1rfho9/image/upload/v1667828067/luckycars/tik-tok_potjmi.png"
                alt="icon"
                width={24}
                height="auto"
              />
            </a>
          </Flex>
        </Flex>
      </div>
    </div>
  </footer>
);

export default Footer;
