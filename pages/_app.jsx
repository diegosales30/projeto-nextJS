import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import HeaderComponent from "../src/components/Header";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <HeaderComponent />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
