import { Flex } from "@chakra-ui/react";
import CustomInput from "./TextInput";
import ContactInfo from "./ContactInfo";

const Title = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      textAlign="center"
      mb={5}
    >
      <CustomInput value="John Smith" />
      <CustomInput value="Full Stack Developer" />
      <ContactInfo />
    </Flex>
  );
};

export default Title;
