import { create } from "zustand";

interface MacbookStore {
  color: string;
  setColor: (color: string) => void;

  scale: number;
  setScale: (scale: number) => void;

  texture: number;
  setTexture: (texture: number) => void;
}

const useMacbook = create<MacbookStore>((set) => ({
  color: "#7D7E80",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: 0,
  setTexture: (texture) => set({ texture }),
}));
export default useMacbook;
