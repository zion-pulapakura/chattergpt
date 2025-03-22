import userChatAtom from "@/state/userChatAtom";
import { IconButton, Group, Input } from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";
import { useAtomValue, useSetAtom } from "jotai";
import chatResponseService from "@/services/chatResponseService";
import { useState } from "react";

export const ChatInput = () => {
  const userChat = useAtomValue(userChatAtom);
  const setUserChat = useSetAtom(userChatAtom);
  const [messages, setMessages] = useState<string>("");

  const handleChat = async () => {
    setMessages("");

    await chatResponseService("Hello!", (chunk) => {
      setMessages((prev) => prev + chunk);
    });
  };

  return (
    <>
      <Group rounded="full" paddingX="2" paddingY="1" border="1px solid black">
        <Input
          border="none"
          focusRing="none"
          placeholder="Ask anything!"
          value={userChat}
          onChange={(e) => setUserChat(e.target.value)}
        />

        <IconButton variant="solid" rounded="full" onClick={handleChat}>
          <IoIosSend />
        </IconButton>
      </Group>
      <p>{messages}</p>
    </>
  );
};
