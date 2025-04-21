import { Flex, Box, Text } from "@chakra-ui/react";

export const UserMessage = ({ text }: { text: string }) => {
  return (
    <Box>
      <Flex justify="flex-end">
        <Box
          bg="gray.800"
          px={5}
          py={3}
          rounded="lg"
          maxWidth="70%"
          wordBreak="break-word"
        >
          <Text color="white">{text}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserMessage;
