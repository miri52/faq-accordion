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
      alDarkGreen: "0, 133, 120",
      alPrimaryTeal: "0, 98, 114",
      alTealDarker: "0, 78, 91",
      alTeal10: "229, 239, 240",
      alCloudWhite: "249, 249, 249",
      alBlack: "44, 42, 41",
      alRed: "197, 80, 80",
      alWhite: "	255, 255, 255",
      alCoastalJetty: "0, 110, 128",
      alCoolGrey4: "187, 188, 188",
      alCoolGrey10: "99, 102, 106",
      alCoolGrey2: "208, 208, 206",
      alBackgroundGrey: "247, 247, 247",
      alTeal: "0, 120, 140",
      alPrimaryShamrockGreen: "132, 189, 0",
      alCityGreen: "18, 173, 158",
      alDarkCityGreen: "0, 133, 120",
      alSkyBlue: "0, 149, 203",
      alExtraLegroom: "77, 208, 225",
      alSeaBlue: "0, 103, 185",
      alOrange: "231, 114, 0",
      alCoolGrey1: "241, 241, 241",
      alCoolGrey8: "136, 139, 141",
      alTeal5: "242, 247, 248",
      alOrange5: "254, 248, 242",
      alRed5: "252, 246, 246",
      alShamrock5: "249, 251, 242",
      alSkyBlue5: "242, 249, 252",
      alBGTeal10: "229, 239, 240",
      alYellow: "242, 204, 6",
      alTeal15: "0, 76, 89",
      alHighlightOrange: "231, 114, 0",
    },
    // brand: {
    //   white: "rgb(var(--chakra-colors-rgb-alWhite))",
    //   primaryTeal: "rgb(var(--chakra-colors-rgb-alPrimaryTeal))",
    //   primaryShamrockGreen:
    //     "rgb(var(--chakra-colors-rgb-alPrimaryShamrockGreen))",
    //   coolgrey1: "rgb(var(--chakra-colors-rgb-alCoolGrey1))",
    //   coolgrey2: "rgb(var(--chakra-colors-rgb-alCoolGrey2))",
    //   coolgrey4: "rgb(var(--chakra-colors-rgb-alCoolGrey4))",
    //   coolgrey8: "rgb(var(--chakra-colors-rgb-alCoolGrey8)) ",
    //   coolgrey10: "rgb(var(--chakra-colors-rgb-alCoolGrey10))",
    //   backgroundGrey: "rgb(var(--chakra-colors-rgb-alBackgroundGrey))",
    //   coastalJetty: "rgb(var(--chakra-colors-rgb-alCoastalJetty))",
    //   black: "rgb(var(--chakra-colors-rgb-alBlack))",
    //   teal: "rgb(var(--chakra-colors-rgb-alTeal))",
    //   tealDarker: "rgb(var(--chakra-colors-rgb-alTealDarker))",
    //   teal5: "rgb(var(--chakra-colors-rgb-alTeal5))",
    //   teal15: "rgb(var(--chakra-colors-rgb-alTeal15))",
    //   red: "rgb(var(--chakra-colors-rgb-alRed))",
    //   red5: "rgb(var(--chakra-colors-rgb-alRed5))",
    //   teal10: "rgb(var(--chakra-colors-rgb-alTeal10))",
    //   cloudWhite: "rgb(var(--chakra-colors-rgb-alCloudWhite))",
    //   cityGreen: "rgb(var(--chakra-colors-rgb-alCityGreen))",
    //   darkCityGreen: "rgb(var(--chakra-colors-rgb-alDarkCityGreen))",
    //   shamrock5: "rgb(var(--chakra-colors-rgb-alShamrock5))",
    //   orange: "rgb(var(--chakra-colors-rgb-alOrange))",
    //   bgteal10: "rgb(var(--chakra-colors-rgb-alBGTeal10))",
    //   icon: "rgb(var(--chakra-colors-rgb-alBlack))",
    //   inputIcon: "rgb(var(--chakra-colors-rgb-alPrimaryTeal))",
    //   highlightOrange: "rgb(var(--chakra-colors-rgb-alHighlightOrange))",
    // },
    brand: {
      white: `hsl(0, 0%, 100%)`,
      gray: "rgba(0, 0, 0, 0.08)",
      pink: ` hsl(275, 100%, 97%)`,
      purple: `hsl(292, 16%, 49%)`,
      darkPurple: `hsl(292, 42%, 14%)`,
      highlightPurple: `hsl(281, 77%, 52%)`,
    },
    error: {
      primary: "rgb(var(--chakra-colors-rgb-alRed))",
    },
  },
  components: {
    Accordion,
  },
});
