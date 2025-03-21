import corsHeaders from "@/utility/cors-headers";

async function chatResponseService(userInput: string) {
  try {
    const response = await fetch("http://localhost:3000/chat/respond", {
      method: "POST",
      body: JSON.stringify({ userInput }),
      mode: "cors",
      headers: corsHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const { data } = await response.json();
  } catch (e) {
    console.error((e as Error).message);
  }
}

export default chatResponseService;
