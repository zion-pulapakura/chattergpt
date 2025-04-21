import { Response, Request } from "express";
import OpenAI from "openai";

const chatResponseController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { chatHistory } = req.body;

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const formattedChatHistory = formatChatHistory(chatHistory);

    const stream = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        ...formattedChatHistory,
      ],

      stream: true,
    });

    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    for await (const chunk of stream) {
      if (chunk.choices[0].delta?.content) {
        res.write(chunk.choices[0].delta.content);
      }
    }

    res.end();
  } catch (e) {
    return res.status(500).json({ message: (e as Error).message });
  }
};

function formatChatHistory(
  chatHistory: { type: "user" | "ai"; text: string }[]
): { role: "user" | "assistant"; content: string }[] {
  return chatHistory.map(({ type, text }) => ({
    role: type === "user" ? "user" : "assistant",
    content: text,
  }));
}

export default chatResponseController;
