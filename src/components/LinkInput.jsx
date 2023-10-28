import {
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Link,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const calculateWidth = (value, fontWeight) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  context.font = `${fontWeight} 16px / 1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`;

  const width = context.measureText(value).width;

  return `${width + 10}px`;
};

function LinkInput({ value, fontWeight = 400, id, handleDelete }) {
  const inputRef = useRef();
  const [link, setLink] = useState(null);

  const handleResize = () => {
    const input = inputRef.current;

    input.style.width = calculateWidth(input.value, fontWeight);
  };

  const handleDefaultValue = () => {
    const input = inputRef.current;

    if (input.value === "") {
      input.value = value;
    }

    input.style.width = calculateWidth(input.value, fontWeight);
  };

  const handleConvert = () => {
    if (link) {
      setLink(null);
      return;
    }

    const getLink = prompt("Enter link");

    if (getLink) {
      setLink(getLink);
    }
  };

  const inpurOrLink = link ? (
    <Link
      href={link}
      color="blue.500"
      textDecoration="underline"
      py={2}
      px="4.8px"
      isExternal
    >
      {inputRef?.current?.value}
    </Link>
  ) : (
    <Input
      ref={inputRef}
      defaultValue={value}
      onChange={handleResize}
      onBlur={handleDefaultValue}
      textAlign="center"
      border="1px solid white"
      width={calculateWidth(value, fontWeight)}
      _hover={{
        border: "1px solid #ccc",
      }}
      _focus={{
        border: "1px solid #ccc",
      }}
      p={0}
      fontWeight={fontWeight}
    />
  );

  return (
    <>
      <Popover trigger="hover" placement="top-start">
        <PopoverTrigger>{inpurOrLink}</PopoverTrigger>
        <PopoverContent
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={185}
        >
          <PopoverArrow />
          <PopoverBody cursor="pointer" fontSize={14} fontWeight={600}>
            <Flex align="center" justify="center" gap={2}>
              <Button size="sm" colorScheme="blue" onClick={handleConvert}>
                {link ? "Edit text" : "Make link"}
              </Button>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => {
                  handleDelete(id);
                }}
              >
                Delete
              </Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default LinkInput;
