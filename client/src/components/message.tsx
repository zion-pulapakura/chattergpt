import { Flex, Box, Text } from "@chakra-ui/react";

export const Message = ({
  type,
  text,
}: {
  type: "user" | "ai";
  text: string;
}) => {

  return (
    <Box>
      <Flex justify={type === "user" ? "flex-start" : "flex-end"} mt={type === "user" ? 0 : 2}>
        <Box
          bg="gray.100"
          px={4}
          py={2}
          rounded="lg"
          maxWidth="70%"
          wordBreak="break-word"
        >
          <Text>{text}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Message;