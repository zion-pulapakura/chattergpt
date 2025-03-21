import corsHeaders from "@/utility/cors-headers";

async function chatResponseService(userInput: string) {
  try {
    const response = await fetch("http://localhost:3000/chat/respond", {
      method: "POST",
      body: JSON.stringify({ userInput }),
      headers: corsHeaders()
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);


  } catch (e) {
    console.error((e as Error).message);
  }
}

export default chatResponseService;
