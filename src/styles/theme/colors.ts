import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  bg: {
    100: "#1B2430",
    200: "gray.50",
    300: "#F5F5F5",
    400: "#171923",
  },
  text: {
    100: "#262626",
    200: "#E5E5E5",
  },
  base: {
    50: "#4299e1",
    100: "#000",
    200: "#eee",
  },
  hover: {
    100: "#E53E3E",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
