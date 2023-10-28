import { Input } from "@chakra-ui/react";
import { useRef } from "react";

const calculateWidth = (value, fontWeight) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  context.font = `${fontWeight} 16px / 1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`;

  const width = context.measureText(value).width;

  return `${width + 10}px`;
};

function TextInput({ value, fontWeight = 400, canBeEmpty = false }) {
  const inputRef = useRef();

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

  return (
    <Input
      ref={inputRef}
      defaultValue={value}
      onChange={handleResize}
      onBlur={canBeEmpty ? null : handleDefaultValue}
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
}

export default TextInput;
