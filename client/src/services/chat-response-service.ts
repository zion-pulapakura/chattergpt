import corsHeaders from "@/utility/cors-headers";

async function chatResponseService(
  userInput: string,
  onData: (data: string) => void
) {
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

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      onData(decoder.decode(value, { stream: true }));
    }
  } catch (e) {
    console.error(e as Error);
  }
}

export default chatResponseService;
