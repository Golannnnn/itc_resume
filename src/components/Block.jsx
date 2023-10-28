/* eslint-disable react/prop-types */
import { useRef, useContext } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { SectionContext } from "../context/SectionContext";

const AbstractBlock = ({ id, sectionId, type, children }) => {
  const { addParagraph, deleteParagraph } = useContext(SectionContext);
  const addButtonRef = useRef();
  const deleteButtonRef = useRef();

  return (
    <Flex
      className="rm-margin"
      mb={5}
      direction="column"
      onMouseEnter={() => {
        addButtonRef.current.style.visibility = "visible";
        deleteButtonRef.current.style.visibility = "visible";
      }}
      onMouseLeave={() => {
        addButtonRef.current.style.visibility = "hidden";
        deleteButtonRef.current.style.visibility = "hidden";
      }}
    >
      {children}
      <Flex gap={2} my={2} align="center" mb={-5} className="hideInPrint">
        <Button
          ref={deleteButtonRef}
          visibility="hidden"
          size="sm"
          onClick={() => deleteParagraph(sectionId, id)}
        >
          -
        </Button>
        <Button
          ref={addButtonRef}
          visibility="hidden"
          size="sm"
          onClick={() => addParagraph(sectionId, id, type)}
        >
          +
        </Button>
      </Flex>
    </Flex>
  );
};

export default AbstractBlock;
