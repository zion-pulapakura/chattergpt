import { Flex, Box, Text } from "@chakra-ui/react";

export const AiMessage = ({ text }: { text: string }) => {
  return (
    <Box>
      <Flex >
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

export default AiMessage;
