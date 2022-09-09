import { tw } from 'twind';
import Particles from 'react-particles-js';
import { Box, Flex, Text } from '@chakra-ui/react';

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

function calcTime(offset: any) {
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * offset);
  const formated = nd.toLocaleTimeString(`en-US`, {
    hour: `2-digit`,
    minute: `2-digit`,
  });
  return formated.slice(0, 5);
}

const CasesSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-black relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Strefy czasowe</h1>
        <p className={tw(`text-white text-center text-xl mt-12`)}>Importujemy pojazdy z całego świata</p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`text-white`)}>
            <Flex justifyContent="space-around">
              <Box textAlign="center">
                <Text fontSize="48px">{calcTime(`+1`)}</Text>
                <Text fontSize="48px">Dubaj</Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="48px">{calcTime(`+3`)}</Text>
                <Text fontSize="48px">Anglia</Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="48px">{calcTime(`+5`)}</Text>
                <Text fontSize="48px">Bombaj</Text>
              </Box>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
