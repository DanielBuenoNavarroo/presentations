import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type Page = "create" | "creative-ai" | "create-scratch";

type PropmtStore = {
  page: Page;
  setPage: (page: Page) => void;
};

const usePromptStore = create<PropmtStore>()(
  devtools(
    persist(
      (set) => ({
        page: "create",
        setPage: (page: Page) => {
          set({ page });
        },
      }),
      { name: "prompts" }
    )
  )
);

export default usePromptStore