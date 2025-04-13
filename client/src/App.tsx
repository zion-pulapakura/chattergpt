import { Group, VStack, Text, Flex, Box } from "@chakra-ui/react";
import { ChatInput } from "./components/chat-input";
import { MessagesList } from "./components/messages-list";

import { useEffect } from "react";
import aiChatStore from "./state/aiChatStore";

export type ChatType = {
  text: string;
  type: "user" | "ai";
};

function App() {
  const aiChat = aiChatStore((state) => state.aiChat);

  useEffect(() => {
    console.log("changed");
  }, [aiChat]);

  return (
    <Group width="lvw" height="lvh" padding="1.5em" backgroundColor="blue.100">
      <VStack align="stretch" width="100%" height="100%">
        <Text width="100%" height="80%" backgroundColor="green">
          <MessagesList />
          {aiChat && (
            <Flex justify="flex-end" mt={2}>
              <Box bg="blue.200" px={4} py={2} rounded="lg" maxWidth="70%">
                <Text>{aiChat}</Text>
              </Box>
            </Flex>
          )}
        </Text>
        <Group>
          <ChatInput />
        </Group>
      </VStack>
    </Group>
  );
}

export default App;
