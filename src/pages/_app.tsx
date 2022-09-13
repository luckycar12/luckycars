import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter';
import '@/styles/global.css';
import { Global } from '@emotion/react';

import { setup } from 'twind';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global
        styles={`
          @font-face {
            font-family: 'Altform';
            font-display: swap;
            src: url('/font/AltformTRIAL-Bold.otf') format('otf'),
          }
          body {
            font-family: 'Altform Bold';
          }
        `}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
