/* eslint-disable react/prop-types */
import { useRef, useContext } from "react";
import { Flex, Divider, Button } from "@chakra-ui/react";
import { MdOutlinePostAdd } from "react-icons/md";
import TextInput from "./TextInput";
import ParagraphBlock from "./ParagraphBlock";
import ExperienceBlock from "./ExperienceBlock";
import EducationBlock from "./EducationBlock";
import { SectionContext } from "../context/SectionContext";

const Section = ({ id, title, paragraphs }) => {
  const { addParagraphToEmptySection, deleteSection } =
    useContext(SectionContext);
  const buttonRef = useRef();

  const renderParagraphs = paragraphs.map((p) =>
    p.type === "paragraph" ? (
      <ParagraphBlock key={p.id} id={p.id} sectionId={id} />
    ) : p.type === "experience" ? (
      <ExperienceBlock key={p.id} id={p.id} sectionId={id} />
    ) : p.type === "education" ? (
      <EducationBlock key={p.id} id={p.id} sectionId={id} />
    ) : null
  );

  return (
    <Flex
      direction="column"
      alignSelf="flex-start"
      w="100%"
      onMouseEnter={() => (buttonRef.current.style.display = "block")}
      onMouseLeave={() => (buttonRef.current.style.display = "none")}
    >
      <Flex align="center" gap={2}>
        <TextInput value={title} fontWeight="800" />
        <Button
          ref={buttonRef}
          display="none"
          className="hideInPrint"
          size="sm"
          onClick={() => deleteSection(id)}
        >
          -
        </Button>
      </Flex>
      <Divider ml={1} border="1px solid black" />
      {paragraphs.length > 0 ? (
        renderParagraphs
      ) : (
        <Flex gap={3} className="hideInPrint" my={5}>
          <Button
            size="md"
            rightIcon={<MdOutlinePostAdd size={20} />}
            onClick={() => addParagraphToEmptySection(id, "paragraph")}
          >
            Paragraph
          </Button>
          <Button
            size="md"
            rightIcon={<MdOutlinePostAdd size={20} />}
            onClick={() => addParagraphToEmptySection(id, "experience")}
          >
            Experience
          </Button>
          <Button
            size="md"
            rightIcon={<MdOutlinePostAdd size={20} />}
            onClick={() => addParagraphToEmptySection(id, "education")}
          >
            Education
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Section;
