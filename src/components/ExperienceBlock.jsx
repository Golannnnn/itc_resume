/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";
import AbstractBlock from "./Block";

const ExperienceBlock = ({ id, sectionId }) => (
  <AbstractBlock id={id} sectionId={sectionId} type="experience">
    <Flex justify="space-between">
      <Flex gap={2} align="center">
        <TextInput
          value="XXXX-XXXX Title of your most recent position"
          fontWeight="bold"
        />
      </Flex>
      <Flex gap={10}>
        <TextInput value="Company" canBeEmpty={true} />
        <TextInput value="City" canBeEmpty={true} />
      </Flex>
    </Flex>
    <TextAreaInput
      value={`• Responsibility #1 \n• Responsibility #2 \n• Responsibility #3`}
    />
  </AbstractBlock>
);

export default ExperienceBlock;
