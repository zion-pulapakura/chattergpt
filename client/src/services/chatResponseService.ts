import corsHeaders from "@/utility/cors-headers";

async function chatResponseService(
  userInput: string,
  onData: (text: string) => void
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
      
      console.log(Date.now())
      console.log(decoder.decode(value, { stream: true }))
      onData(decoder.decode(value, { stream: true })); // Directly pass text to callback
    }
  } catch (e) {
    console.error((e as Error));
  }
}

export default chatResponseService;
