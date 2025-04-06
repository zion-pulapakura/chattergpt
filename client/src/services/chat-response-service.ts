import chatHistoryStore from "@/state/chatHistoryStore";
import corsHeaders from "@/utility/cors-headers";

async function chatResponseService(userInput: string) {
  try {
    const response = await fetch("http://localhost:3000/chat/respond", {
      method: "POST",
      body: JSON.stringify({ userInput }),
      mode: "cors",
      headers: corsHeaders(),
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) throw new Error("No readable stream found.");

    const updateChatHistory = chatHistoryStore(
      (state) => state.updateChatHistory
    );

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      updateChatHistory("ai", decoder.decode(value, { stream: true }));
    }
  } catch (e) {
    console.error(e as Error);
  }
}

export default chatResponseService;
