import { Group, VStack, Text } from "@chakra-ui/react";
import { ChatInput } from "./components/chat-input";
import { MessagesList } from "./components/messages-list";

import { useEffect } from "react";
import aiChatStore from "./state/aiChatStore";
import chatHistoryStore from "./state/chatHistoryStore";
import isHistoryLoadedStore from "./state/isHistoryLoadedStore";
import fetchChatHistory from "./utility/fetch-chat-history";
import AiMessage from "./components/ai-message";

export type ChatType = {
  text: string;
  type: "user" | "ai";
};

function App() {
  const setChatHistory = chatHistoryStore((state) => state.setChatHistory);

  const isHistoryLoaded = isHistoryLoadedStore(
    (state) => state.isHistoryLoaded
  );
  const switchIsLoaded = isHistoryLoadedStore((state) => state.switchIsLoaded);

  useEffect(() => {
    if (!isHistoryLoaded) {
      fetchChatHistory(setChatHistory, switchIsLoaded);
    }
  }, []);

  return (
    <Group width="lvw" height="lvh" backgroundColor="gray.300">
      <VStack align="stretch" width="100%" height="100%">
        <Text
          padding="1em"
          width="100%"
          height="90%"
          maxHeight="90%"
          overflowY="auto"
          scrollBehavior="smooth"
        >
          <MessagesList />
        </Text>
        <Group paddingX="1em">
          <ChatInput />
        </Group>
      </VStack>
    </Group>
  );
}

export default App;
