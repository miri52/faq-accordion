import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  root: {
    my: 8,
    width: [300, 400, 500],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid",
    borderColor: "brand.gray",
    boxShadow: "xl",
    p: 8,
    borderRadius: "xl",
    // bg: "white",
    bg: "url(background-pattern-desktop.svg) !important",
  },
  container: {
    _first: { borderTop: "none" },
    _last: { borderBottom: "none" },
  },
  button: {
    color: "brand.darkPurple",
    fontWeight: 600,
    caretColor: "black",
    py: 5,
    px: 0,

    _hover: {
      background: "none",
      color: "brand.highlightPurple",
    },
  },
  panel: { color: "brand.purple", px: 0 },
});

export const Accordion = defineMultiStyleConfig({ baseStyle });
