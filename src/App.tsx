import { Box } from "@chakra-ui/react";
import Accordion from "./components/Accordion/Accordion";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Box width="md" margin="auto">
        <Accordion />
        <Footer />
      </Box>
    </>
  );
}

export default App;
