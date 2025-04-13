import { Flex } from "@chakra-ui/react";
import chatHistoryStore from "@/state/chatHistoryStore";
import Message from "./message";

export const MessagesList = () => {
  const chatHistory = chatHistoryStore((state) => state.chatHistory);

  return (
    <Flex direction="column" width="100%" p={4} gap={3}>
      {chatHistory.map((chat, index) => (
        <Message key={index} type={chat.type} text={chat.text} />
      ))}
    </Flex>
  );
};
