import { ChatType } from "@/App";
import { create } from "zustand";

type ChatHistoryState = {
  chatHistory: ChatType[];
  updateChatHistory: (text: string, type: "user" | "ai") => void;
  setChatHistory: (history: ChatType[]) => void;
};

const chatHistoryStore = create<ChatHistoryState>((set, get) => ({
  chatHistory: [],

  updateChatHistory: (text, type) =>
    set({ chatHistory: [...get().chatHistory, { text, type }] }),

  setChatHistory: (history) => set({ chatHistory: history }),
}));

export default chatHistoryStore;
