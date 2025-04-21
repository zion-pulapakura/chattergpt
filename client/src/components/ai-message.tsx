import { Flex, Box, Text } from "@chakra-ui/react";

export const AiMessage = ({ text }: { text: string }) => {
  return (
    <Box>
      <Flex>
        <Box px={4} py={2} marginBottom={10} rounded="lg">
          <Text color="white">{text}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AiMessage;
