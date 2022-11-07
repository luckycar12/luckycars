import { tw } from 'twind';
import { Box, Flex, Text } from '@chakra-ui/react';
import Clock from 'react-live-clock';

const SocialProof = () => (
  <div className={tw(`container mx-auto my-8`)}>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <Flex justifyContent="space-around">
        <Box textAlign="center">
          <Clock format="HH:mm:ss" ticking timezone="Asia/Dubai" />
          <Text fontSize="48px">Dubaj</Text>
        </Box>
        <Box textAlign="center">
          <Clock format="HH:mm:ss" ticking timezone="Europe/London" />
          <Text fontSize="48px">Anglia</Text>
        </Box>
        <Box textAlign="center">
          <Clock format="HH:mm:ss" ticking timezone="America/New_York" />
          <Text fontSize="48px">USA</Text>
        </Box>
      </Flex>
    </div>
  </div>
);

export default SocialProof;
