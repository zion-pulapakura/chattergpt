import { Response, Request } from "express";
import Chat from "../db/model/Chat.js";

const getAllChatsController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userChats = await Chat.find({ type: "user" });
    const aiChats = await Chat.find({ type: "ai" });

    return res.status(201).json({ userChats, aiChats, message: "Chats retrieved successfully" });
  } catch (e) {
    return res.status(500).json({ message: (e as Error).message });
  }
};

export default getAllChatsController;
