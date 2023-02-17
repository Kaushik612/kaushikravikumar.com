import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { config } from "./config";
import { fonts } from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  styles: {
    global: (props) => ({
      "html, body": {
        bgColor: props.colorMode === "dark" ? "#1B2430" : "gray.50",
      },
    }),
  },
});

export default customTheme;
