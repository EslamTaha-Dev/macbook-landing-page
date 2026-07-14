import { create } from "zustand";

interface MacbookStore {
  color: string;
  setColor: (color: string) => void;

  scale: number;
  setScale: (scale: number) => void;

  texture: string;
  setTexture: (texture: string) => void;

  reset: () => void;
}

const useMacbook = create<MacbookStore>((set) => ({
  color: "#7D7E80",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({ color: "#7D7E80", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));
export default useMacbook;
