import userChatStore from "@/state/userChatStore";
import aiChatStore from "@/state/aiChatStore";
import chatResponseService from "@/services/chat-response-service";

import { IoIosSend } from "react-icons/io";
import { IconButton, Group, Input } from "@chakra-ui/react";

export const ChatInput = () => {
  const userChat = userChatStore((state) => state.userChat);

  const updateUserChat = userChatStore((state) => state.updateUserChat);

  const handleQuery = async () => {
    const chunk = await chatResponseService(userChat);
    const updateAiChat = aiChatStore((state) => state.updateAiChat);
  
    updateAiChat(chunk!)
  };

  return (
    <>
      <Group rounded="full" paddingX="2" paddingY="1" border="1px solid black">
        <Input
          border="none"
          focusRing="none"
          placeholder="Ask anything!"
          value={userChat}
          onChange={(e) => updateUserChat(e.target.value)}
        />

        <IconButton
          variant="solid"
          rounded="full"
          onClick={handleQuery}
        >
          <IoIosSend />
        </IconButton>
      </Group>
    </>
  );
};
