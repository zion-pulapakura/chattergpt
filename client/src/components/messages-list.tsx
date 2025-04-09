import { Flex, Box, Text } from "@chakra-ui/react";
import getAllChats from "@/services/get-chats-service";
import { useEffect, useState } from "react";
import { ChatType } from "@/App";
import aiChatStore from "@/state/aiChatStore";

export const MessagesList = () => {
  const [userChats, setUserChats] = useState<ChatType[]>([]);
  const [aiChats, setAiChats] = useState<ChatType[]>([]);
  const aiChat = aiChatStore((state) => state.aiChat);

  useEffect(() => {
    const fetchChats = async () => {
      const data = await getAllChats();

      if (!data) return;

      setUserChats(data.userChats);
      setAiChats(data.aiChats); // Drop the last one (it's streaming)
    };

    fetchChats();
  }, [aiChat]);

  return (
    <Flex direction="column" width="100%" p={4} gap={3}>
      {userChats.map((userMsg, i) => (
        <Box key={i}>
          {/* User Message */}
          <Flex justify="flex-start">
            <Box
              bg="gray.100"
              px={4}
              py={2}
              rounded="lg"
              maxWidth="70%"
              wordBreak="break-word"
            >
              <Text>{userMsg.text}</Text>
            </Box>
          </Flex>

          {/* AI Message (if it exists) */}
          {aiChats[i] && (
            <Flex justify="flex-end" mt={2}>
              <Box
                bg="blue.100"
                px={4}
                py={2}
                rounded="lg"
                maxWidth="70%"
                wordBreak="break-word"
              >
                <Text>{aiChats[i].text}</Text>
              </Box>
            </Flex>
          )}
        </Box>
      ))}
    </Flex>
  );
};
