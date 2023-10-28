import { useContext } from "react";
import { Button, Flex } from "@chakra-ui/react";
import {
  MdOutlineClear,
  MdOutlinePostAdd,
  MdOutlinePrint,
  MdOutlineRestore,
} from "react-icons/md";
import Section from "./Section";
import { SectionContext } from "../context/SectionContext";

const Body = () => {
  const { sections, addSection, resetSections } = useContext(SectionContext);

  const renderSections =
    sections &&
    sections.map(({ id, title, children }) => (
      <Section key={id} id={id} title={title} paragraphs={children} />
    ));

  return (
    <>
      {renderSections}
      <Flex
        mt="50px"
        mb="50px"
        gap={5}
        alignSelf="center"
        className="hideInPrint"
      >
        <Button
          rightIcon={<MdOutlinePostAdd size={20} />}
          onClick={addSection}
          size="lg"
        >
          Add
        </Button>
        <Button
          rightIcon={<MdOutlinePrint size={20} />}
          onClick={() => window.print()}
          size="lg"
        >
          Print
        </Button>
        <Button
          rightIcon={<MdOutlineRestore size={20} />}
          onClick={() => window.location.reload()}
          size="lg"
        >
          Reset
        </Button>
        <Button
          rightIcon={<MdOutlineClear size={20} />}
          onClick={() => resetSections()}
          size="lg"
        >
          Clear
        </Button>
      </Flex>
    </>
  );
};

export default Body;
