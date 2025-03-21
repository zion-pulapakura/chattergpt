import { Response, Request } from "express";
import OpenAI from "openai";

const chatResponseController = async (req: Request, res: Response): Promise<any> => {
  try {
    const { userInput } = req.body;
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const stream = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: userInput,
        },
      ],
      stream:true
    });

    for await (const chunk of stream) {
      res.write(`data: ${JSON.stringify(chunk.choices[0].delta)}\n\n`)
    }
    
    res.end()
  } catch (e) {
    return res.status(500).json({ message: (e as Error).message });
  }
};

export default chatResponseController;
