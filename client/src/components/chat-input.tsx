import userChatStore from "@/state/userChatStore";
import aiChatStore from "@/state/aiChatStore";
import chatResponseService from "@/services/chat-response-service";

import { IoIosSend } from "react-icons/io";
import { IconButton, Group, Input } from "@chakra-ui/react";
import logChatService from "@/services/log-chat-service";

export const ChatInput = () => {
  const userChat = userChatStore((state) => state.userChat);

  const updateUserChat = userChatStore((state) => state.updateUserChat);
  const updateAiChat = aiChatStore((state) => state.updateAiChat);

  const handleQuery = async () => {
    await chatResponseService(userChat, (chunk) => {
      const currChat = aiChatStore.getState().aiChat;
      updateAiChat(currChat + chunk);
    });

    await logChatService("user", userChat);
    await logChatService("ai", aiChatStore.getState().aiChat);
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
