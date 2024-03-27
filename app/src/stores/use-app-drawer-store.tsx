import { create } from "zustand";

export type AppDrawerState = {
	open: boolean;
	openDrawer: () => void;
	closeDrawer: () => void;
};

export const useAppDrawerStore = create<AppDrawerState>((set) => ({
	open: false,
	openDrawer: () => set((state) => ({ open: true })),
	closeDrawer: () => set((state) => ({ open: false })),
}));
