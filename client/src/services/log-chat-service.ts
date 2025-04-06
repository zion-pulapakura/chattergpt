import corsHeaders from "@/utility/cors-headers";

async function logChatService(type: string, chat: string) {
  try {
    const response = await fetch("http://localhost:3000/chat/create", {
      method: "POST",
      body: JSON.stringify({ text: chat, type }),
      mode: "cors",
      headers: corsHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const { message } = await response.json();
    console.log(message);
  } catch (e) {
    console.error(e as Error);
  }
}

export default logChatService;
