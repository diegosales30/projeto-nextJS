import "../styles/globals.css";
import Head from "next/head";

import HeaderComponent from "../src/components/Header";
import Footer from "../src/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Diego | dev</title>
      </Head>
      <ChakraProvider>
        <HeaderComponent />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
