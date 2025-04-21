import { Flex, Box, Text } from "@chakra-ui/react";

export const UserMessage = ({ text }: { text: string }) => {
  return (
    <Box>
      <Flex justify="flex-end">
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

export default UserMessage;
