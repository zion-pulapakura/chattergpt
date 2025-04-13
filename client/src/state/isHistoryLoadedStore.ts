import { create } from "zustand";

type IsHistoryLoadedState = {
  isHistoryLoaded: boolean;
  switchIsLoaded: () => void;
};

const isHistoryLoadedStore = create<IsHistoryLoadedState>((set, get) => ({
  isHistoryLoaded: false,
  switchIsLoaded: () => set({ isHistoryLoaded: get().isHistoryLoaded! }),
}));

export default isHistoryLoadedStore;
