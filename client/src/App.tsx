import { Group, VStack, Text } from "@chakra-ui/react";
import { ChatInput } from "./components/chat-input";

import { useEffect } from "react";
import aiChatStore from "./state/aiChatStore";

function App() {
  const aiChat = aiChatStore((state) => state.aiChat);

  useEffect(() => {
    console.log("changed");
  }, [aiChat]);

  return (
    <Group width="lvw" height="lvh" padding="1.5em" backgroundColor="blue.100">
      <VStack align="stretch">
        <Text width="100%" height="80%" backgroundColor="green">
          {aiChat}
        </Text>
        <Group>
          <ChatInput />
        </Group>
      </VStack>
    </Group>
  );
}

export default App;
