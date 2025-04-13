import { Group, VStack, Text } from "@chakra-ui/react";
import { ChatInput } from "./components/chat-input";
import { MessagesList } from "./components/messages-list";
import Message from "./components/message";

import { useEffect } from "react";
import aiChatStore from "./state/aiChatStore";
import chatHistoryStore from "./state/chatHistoryStore";
import isHistoryLoadedStore from "./state/isHistoryLoadedStore";
import userChatStore from "./state/userChatStore";
import fetchChatHistory from "./utility/fetch-chat-history";

export type ChatType = {
  text: string;
  type: "user" | "ai";
};

function App() {
  const aiChat = aiChatStore((state) => state.aiChat);
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
    <Group width="lvw" height="lvh" padding="1.5em" backgroundColor="blue.100">
      <VStack align="stretch" width="100%" height="100%">
        <Text width="100%" height="80%" backgroundColor="green">
          <MessagesList />
          {userChatStore.getState().userChat && (
            <Message type="user" text={userChatStore.getState().userChat} />
          )}
          {aiChat && <Message type="ai" text={aiChat} />}
        </Text>
        <Group>
          <ChatInput />
        </Group>
      </VStack>
    </Group>
  );
}

export default App;
