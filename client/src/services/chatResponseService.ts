async function chatResponseService(userInput: string) {
  try {
    const response = await fetch("localhost:3000", {
      method: "POST",
      body: JSON.stringify({ userInput }),
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
