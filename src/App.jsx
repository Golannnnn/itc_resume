import { Center, Flex } from "@chakra-ui/react";
import { SectionContextProvider } from "./context/SectionContext";
import Title from "./components/Title";
import Body from "./components/Body";

function App() {
  return (
    <Center p={5} display="flex">
      <Flex maxW="800px" direction="column">
        <SectionContextProvider>
          <Title />
          <Body />
        </SectionContextProvider>
      </Flex>
    </Center>
  );
}

export default App;
