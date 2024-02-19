import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { accordionTheme } from "./components/Accordion/themes/base.ts";
import App from "./App.tsx";

const colors = {
  brand: {
    white: `hsl(0, 0%, 100%)`,
    gray: "rgba(0, 0, 0, 0.08)",
    pink: ` hsl(275, 100%, 97%)`,
    purple: `hsl(292, 16%, 49%)`,
    darkPurple: `hsl(292, 42%, 14%)`,
    highlightPurple: `hsl(281, 77%, 52%)`,
  },
};

const theme = extendTheme({
  colors,
  components: { Accordion: accordionTheme },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
