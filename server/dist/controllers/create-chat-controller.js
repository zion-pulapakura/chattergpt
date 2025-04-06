import Chat from "../db/model/Chat.js";
const createChatController = async (req, res) => {
    try {
        const { type, text } = req.body;
        const chatEntry = new Chat({
            type,
            text,
        });
        await chatEntry.save();
        return res.status(201).json({ message: "Chat entry created successfully" });
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
};
export default createChatController;
