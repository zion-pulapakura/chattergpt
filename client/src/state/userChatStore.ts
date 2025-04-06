import { create } from 'zustand'

type UserChatState = {
  userChat: string,
  updateUserChat: (newChat: string) => void,
}

const userChatStore = create<UserChatState>((set) => ({
  userChat: '',
  updateUserChat: (newChat: string) => set({ userChat: newChat }),
}))

export default userChatStore
