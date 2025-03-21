import { Response, Request } from "express";
import OpenAI from "openai";

const chatResponse = async (req: Request, res: Response): Promise<any> => {
  try {
    const { userInput } = req.body;
    const client = new OpenAI();
    console.log(1)

    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: userInput,
        },
      ],
    });
    console.log(2)

    return res.json({ message: "Success", data: completion.choices[0].message.content });
  } catch (e) {
    return res.status(500).json({ message: (e as Error).message });
  }
};

export default chatResponse;
