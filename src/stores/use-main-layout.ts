import { createStore } from "zustand";

export const useMainLayout = createStore((set) => ({
	openSettings: false,
	setOpenSettings: (open: boolean) => set({ openSettings: open }),
}));
