import userChatAtom from "@/state/userChatAtom";
import { IconButton, Group, Input } from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";
import { useAtomValue, useSetAtom } from "jotai";
import chatResponseService from "@/services/chatResponseService";

export const ChatInput = () => {
  const userChat = useAtomValue(userChatAtom);
  const setUserChat = useSetAtom(userChatAtom);

  return (
    <Group rounded="full" paddingX="2" paddingY="1" border="1px solid black">
      <Input
        border="none"
        focusRing="none"
        placeholder="Ask anything!"
        value={userChat}
        onChange={(e) => setUserChat(e.target.value)}
      />

      <IconButton variant="solid" rounded="full" onClick={() => chatResponseService(userChat)}>
        <IoIosSend />
      </IconButton>
    </Group>
  );
};
