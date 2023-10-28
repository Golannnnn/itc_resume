/* eslint-disable react/prop-types */
import {
  Textarea,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { RxDotFilled } from "react-icons/rx";
import { useRef } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

const calculateHeight = (value) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = `400 16px / 1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`;

  const metrics = context.measureText(value);
  const lineBreaks = value.split("\n").length;
  const numOfLines =
    Math.ceil(metrics.width / (window.innerWidth - 50)) + lineBreaks;

  const textHeight = 20;

  const desiredHeight = textHeight * numOfLines;

  if (desiredHeight < 40) {
    return `43px`;
  }

  if (desiredHeight > 220) {
    return `${desiredHeight + 5}px`;
  }

  return `${desiredHeight}px`;
};

const TextAreaInput = ({ value }) => {
  const inputRef = useRef();
  const width = useWindowWidth();

  const handleResize = () => {
    const input = inputRef.current;

    input.style.height = calculateHeight(input.value);
  };

  const handleDefaultValue = () => {
    const input = inputRef.current;

    if (input.value === "") {
      input.value = value;
    }

    input.style.height = calculateHeight(input.value);
  };

  const addBulletPoint = () => {
    const input = inputRef.current;

    input.value = `${input.value}\n• `;
    input.style.height = calculateHeight(input.value);
  };

  return (
    <Popover trigger="hover" placement="bottom-start">
      <PopoverTrigger>
        <Textarea
          ref={inputRef}
          defaultValue={value}
          onChange={handleResize}
          onBlur={handleDefaultValue}
          textAlign="left"
          border="1px solid white"
          width={`${window.innerWidth - 50}px`}
          maxW="800px"
          height={calculateHeight(value)}
          _hover={{
            border: "1px solid #ccc",
          }}
          _focus={{
            border: "1px solid #ccc",
          }}
          p={0}
          pl={1}
          pr={5}
          resize="none"
          rows={1}
        />
      </PopoverTrigger>
      <PopoverContent
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
        w={10}
        h={8}
        ml={20}
        className="hideInPrint"
      >
        <PopoverArrow bg="gray.100" />
        <PopoverBody
          onClick={addBulletPoint}
          cursor="pointer"
          fontSize={14}
          fontWeight={600}
        >
          <Flex align="center" gap={1}>
            <RxDotFilled size={20} />
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TextAreaInput;
