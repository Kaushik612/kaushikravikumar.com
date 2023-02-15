import "@fontsource/fira-sans";
import "@fontsource/noto-serif";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/layout/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
