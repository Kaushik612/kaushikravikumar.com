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
        bgColor: props.colorMode === "dark" ? "bg.100" : "bg.200",
      },
    }),
  },
});

export default customTheme;
