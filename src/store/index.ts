import { create } from "zustand";

interface MacbookStore {
  color: string;
  setColor: (color: string) => void;

  scale: number;
  setScale: (scale: number) => void;

  reset: () => void;
}

const useMacbook = create<MacbookStore>((set) => ({
  color: "#7D7E80",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  reset: () => set({ color: "#2B2B2D", scale: 0.08 }),
}));

export default useMacbook;
