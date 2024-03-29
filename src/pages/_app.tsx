import "@fontsource-variable/inter";
import "@fontsource/darker-grotesque";
import type { AppProps } from "next/app";
import MainLayout from "@/layout/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme} resetCSS={true}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
