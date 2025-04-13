import userChatStore from "@/state/userChatStore";
import aiChatStore from "@/state/aiChatStore";
import getChatResponseService from "@/services/get-chat-response-service";

import { IoIosSend } from "react-icons/io";
import { IconButton, Group, Input } from "@chakra-ui/react";
import logChatToDBService from "@/services/log-chat-service";
import chatHistoryStore from "@/state/chatHistoryStore";

export const ChatInput = () => {
  const userChat = userChatStore((state) => state.userChat);

  const updateChatHistory = chatHistoryStore(
    (state) => state.updateChatHistory
  );
  const updateUserChat = userChatStore((state) => state.updateUserChat);
  const updateAiChat = aiChatStore((state) => state.updateAiChat);

  const handleQuery = async () => {
    await getChatResponseService(userChat, (chunk) => {
      const currChat = aiChatStore.getState().aiChat;
      updateAiChat(currChat + chunk);
    });

    await logChatToDBService("user", userChat);
    await logChatToDBService("ai", aiChatStore.getState().aiChat);

    updateChatHistory(userChat, "user");
    updateChatHistory(aiChatStore.getState().aiChat, "ai");
  };

  return (
    <>
      <Group
        height="100%"
        width="100%"
        rounded="full"
        paddingX="2"
        paddingY="1"
        border="1px solid black"
      >
        <Input
          border="none"
          focusRing="none"
          placeholder="Ask anything!"
          value={userChat}
          onChange={(e) => updateUserChat(e.target.value)}
        />

        <IconButton variant="solid" rounded="full" onClick={handleQuery}>
          <IoIosSend />
        </IconButton>
      </Group>
    </>
  );
};
