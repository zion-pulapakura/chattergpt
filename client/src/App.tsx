import { Group, VStack, Text, Flex, Box } from "@chakra-ui/react";
import { ChatInput } from "./components/chat-input";
import { MessagesList } from "./components/messages-list";
import Message from "./components/message";

import { useEffect } from "react";
import aiChatStore from "./state/aiChatStore";
import chatHistoryStore from "./state/chatHistoryStore";
import isHistoryLoadedStore from "./state/isHistoryLoadedStore";
import getAllChats from "./services/get-chats-service";
import userChatStore from "./state/userChatStore";

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
    const fetchChats = async () => {
      const data = await getAllChats();

      if (!data) return;
      if (data.userChats.length === 0) return;
      if (data.aiChats.length === 0) return;

      const orderedList = [];

      for (let i = 0; i < data.userChats.length; i++) {
        orderedList.push(data.userChats[i]);
        orderedList.push(data.aiChats[i]);
      }

      setChatHistory(orderedList);
      switchIsLoaded();
    };

    if (!isHistoryLoaded) {
      fetchChats();
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
