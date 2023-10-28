import { useState, Fragment } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import LinkInput from "./LinkInput";
import { nanoid } from "nanoid";

const ContactInfo = () => {
  const [contactInfo, setContactInfo] = useState([
    { id: nanoid(), value: "+972 (54) 904-1769" },
    { id: nanoid(), value: "john@smith.com" },
    { id: nanoid(), value: "GitHub" },
    { id: nanoid(), value: "LinkedIn" },
  ]);

  const handleDelete = (id) => {
    setContactInfo((prev) => prev.filter((info) => info.id !== id));
  };

  const handleAdd = () => {
    setContactInfo((prev) => [
      ...prev,
      { id: nanoid(), value: "Click to edit" },
    ]);
  };

  const renderContactInfo = contactInfo.map(({ id, value }, index) => (
    <Fragment key={nanoid()}>
      {index !== 0 && <Text key={nanoid()}>|</Text>}
      <LinkInput key={id} id={id} value={value} handleDelete={handleDelete} />
    </Fragment>
  ));

  return (
    <Flex align="center" justify="center">
      {renderContactInfo}
      <Button
        my={contactInfo.length === 0 ? 2 : 0}
        size="xs"
        ml={2}
        colorScheme="blue"
        onClick={handleAdd}
        className="hideInPrint"
      >
        +
      </Button>
    </Flex>
  );
};

export default ContactInfo;
