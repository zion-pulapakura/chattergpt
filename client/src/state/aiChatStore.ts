import { create } from "zustand";

type AiChatState = {
  aiChat: string;
  updateAiChat: (newChat: string) => void;
};

const aiChatStore = create<AiChatState>((set) => ({
  aiChat: "",
  updateAiChat: (newChat) => set({ aiChat: newChat }),
}));

export default aiChatStore;
