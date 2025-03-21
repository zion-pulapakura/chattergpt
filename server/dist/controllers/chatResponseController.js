import OpenAI from "openai";
const chatResponse = async (req, res) => {
    try {
        const { userInput } = req.body;
        const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const completion = await client.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: userInput,
                },
            ],
        });
        return res.json({
            message: "Success",
            data: completion.choices[0].message.content,
        });
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
};
export default chatResponse;
