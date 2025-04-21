import { Flex } from "@chakra-ui/react";
import chatHistoryStore from "@/state/chatHistoryStore";
import UserMessage from "./user-message";
import AiMessage from "./ai-message";
import aiChatStore from "@/state/aiChatStore";

export const MessagesList = () => {
  const chatHistory = chatHistoryStore((state) => state.chatHistory);
  const aiChat = aiChatStore((state) => state.aiChat);

  return (
    <Flex direction="column" width="100%" p={4} gap={3}>
      {chatHistory.map(({ type, text }, index) => {
        if (type === "ai") {
          return <AiMessage text={text} key={index} />;
        } else if (type === "user") {
          return <UserMessage text={text} key={index} />;
        }
      })}

      {aiChat && <AiMessage text={aiChat} />}
    </Flex>
  );
};
