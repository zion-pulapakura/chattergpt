import { create } from "zustand";

type ChatHistoryState = {
  userChats: string[];
  aiChats: string[];
  updateChatHistory: (type: "user" | "ai", newChat: string) => void;
};

const chatHistoryStore = create<ChatHistoryState>((set) => ({
  userChats: [],
  aiChats: [],

  updateChatHistory: (type, newChat) => {
    if (type === "user") {
      set((state) => ({ userChats: [...state.userChats, newChat] }));
    } else if (type === "ai") {
      set((state) => ({ aiChats: [...state.aiChats, newChat] }));
    }
  },
  
}));

export default chatHistoryStore;
