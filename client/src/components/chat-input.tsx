import userChatStore from "@/state/userChatStore";

import { IoIosSend } from "react-icons/io";
import { IconButton, Group, Input } from "@chakra-ui/react";
import handleQuery from "@/utility/handle-query";
import aiChatStore from "@/state/aiChatStore";

export const ChatInput = () => {
  const userChat = userChatStore((state) => state.userChat);
  const aiChat = aiChatStore((state) => state.aiChat);

  const updateUserChat = userChatStore((state) => state.updateUserChat);

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
          onClick={async () => {
            await handleQuery(userChat, aiChat);
          }}
        >
          <IoIosSend />
        </IconButton>
      </Group>
    </>
  );
};
