import { ChatType } from "@/App";
import getAllChats from "@/services/get-chats-service";

const fetchChatHistory = async (
  setChatHistory: (history: ChatType[]) => void,
  switchIsLoaded: () => void
) => {
  const data = await getAllChats();

  if (!data) return;
  if (data.userChats.length === 0) return;
  if (data.aiChats.length === 0) return;

  const orderedList = [];

  for (let i = 0; i < data.userChats.length; i++) {
    orderedList.push(data.userChats[i]);
    orderedList.push(data.aiChats[i]);
  }

  setChatHistory(orderedList);
  switchIsLoaded();
};

export default fetchChatHistory;
