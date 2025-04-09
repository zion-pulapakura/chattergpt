import { Group } from "@chakra-ui/react";
import getAllChats from "@/services/get-chats-service";
import { useEffect, useState } from "react";
import { ChatType } from "@/App";

export const MessagesList = () => {
  const [allUserChats, setAllUserChats] = useState<ChatType[]>([]);
  const [allAiChats, setAllAiChats] = useState<ChatType[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      const data = await getAllChats();
      setAllUserChats(data!.userChats);
      setAllAiChats(data!.aiChats);
    };

    fetchChats();
  }, []);

  return (
    <>
      <Group
        height="100%"
        width="100%"
        rounded="full"
        paddingX="2"
        paddingY="1"
        border="1px solid black"
      ></Group>
    </>
  );
};
