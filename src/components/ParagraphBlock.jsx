/* eslint-disable react/prop-types */
import AbstractBlock from "./Block";
import TextAreaInput from "./TextAreaInput";

const ParagraphBlock = ({ id, sectionId }) => (
  <AbstractBlock id={id} sectionId={sectionId} type="paragraph">
    <TextAreaInput
      value={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
    />
  </AbstractBlock>
);

export default ParagraphBlock;
