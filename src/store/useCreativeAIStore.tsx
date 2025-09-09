import { OutlineCard } from "@/lib/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type CreativeAIStore = {
  outlines: OutlineCard[] | [];
  currentAiPrompt: string;
  resetOutlines: () => void;
  addOutline: (outline: OutlineCard) => void;
  addMultipleOutlines: (outlines: OutlineCard[]) => void;
  setCurrentAiPrompt: (prompt: string) => void;
};

const useCreativeAIStore = create<CreativeAIStore>()(
  devtools(
    persist(
      (set) => ({
        outlines: [],
        currentAiPrompt: "",
        resetOutlines: () => {
          set({ outlines: [] });
        },
        addOutline: (outline: OutlineCard) => {
          set((state) => ({
            outlines: [outline, ...state.outlines],
          }));
        },
        addMultipleOutlines: (outlines: OutlineCard[]) => {
          set(() => ({
            outlines: [...outlines],
          }));
        },
        setCurrentAiPrompt: (prompt: string) => {
          set({ currentAiPrompt: prompt });
        },
      }),
      { name: "creative-ai" }
    )
  )
);

export default useCreativeAIStore;
