import Head from "next/head";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import customTheme from "../chakra-ui/customTheme";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
