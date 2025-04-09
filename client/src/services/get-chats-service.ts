import { ChatType } from "@/App";
import corsHeaders from "@/utility/cors-headers";

async function getAllChats() {
  try {
    const response = await fetch("http://localhost:3000/chat/all-chats", {
      mode: "cors",
      headers: corsHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const { userChats, aiChats } = await response.json();
    return {
      userChats: userChats as ChatType[],
      aiChats: aiChats as ChatType[],
    };
  } catch (e) {
    console.error(e as Error);
  }
}

export default getAllChats;
