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
          font-family: 'Red Hat';
          font-style: normal;
          font-display: swap;
          src: url('/font/red-hat.ttf');
        }
        
        @font-face {
          font-family: 'Arthemys';
          font-style: normal;
          font-display: swap;
          src: url('/font/ArthemysDisplay-Light.otf');
        }
        
        @font-face {
          font-family: 'Merc';
          font-style: normal;
          font-display: swap;
          src: url('https://assets.oneweb.mercedes-benz.com/global/1.20.0/fonts/WOFF2/MBCorpoSTitle-Regular-Web.woff2');
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: 'Red Hat';
          margin: 0;
        }
        `}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
