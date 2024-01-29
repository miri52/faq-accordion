import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  root: {
    // bg: "lightgrey",
    // p: 4,
    my: 8,
  },
  container: { _first: { borderTop: "none" }, _last: { borderBottom: "none" } },
  button: { color: "brand.darkPurple", fontWeight: 600 },
  panel: { color: "brand.purple" },
  icon: {},
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
