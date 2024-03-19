import { extendTheme } from "@chakra-ui/react";
import { Accordion } from "./components/Accordion/themes/base.ts";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body, div#__next": {
        color: "brand.black",
      },
      body: {
        input: {
          _placeholder: {
            color: "brand.coolgrey10",
          },
        },
      },
      "*:focus-visible": {
        outlineColor: "brand.brand.primaryTeal",
      },
    },
  },
  shadows: {
    floating: "0px 8px 32px 0px rgba(0, 0, 0, 0.29)",
  },
  //   fonts: {
  //     heading:
  //     body:
  //   },
  colors: {
    rgb: {
      alWhite: "255, 255, 255",
      alPink: "249, 240, 255",
      alPurple: "140, 105, 145",
      alDarkPurple: "47, 21, 51",
      alHighlightPurple: "167, 38, 227",
      alRed: "197, 80, 80",
      alGrey: "241, 241, 241",
    },
    brand: {
      white: "rgb(var(--chakra-colors-rgb-alWhite))",
      gray: "rgb(var(--chakra-colors-rgb-alGrey))",
      pink: "rgb(var(--chakra-colors-rgb-alPink))",
      purple: "rgb(var(--chakra-colors-rgb-alPurple))",
      darkPurple: "rgb(var(--chakra-colors-rgb-alDarkPurple))",
      highlightPurple: "rgb(var(--chakra-colors-rgb-alHighlightPurple))",
    },
    error: {
      primary: "rgb(var(--chakra-colors-rgb-alRed))",
    },
  },
  components: {
    Accordion,
  },
});
