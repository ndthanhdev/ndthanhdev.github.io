import { create } from "zustand";

export interface AppDrawerState {
	open: boolean;
	openDrawer: () => void;
	closeDrawer: () => void;
}

export const useAppDrawerStore = create<AppDrawerState>((set) => ({
	closeDrawer: () => {
		set(() => ({ open: false }));
	},
	open: false,
	openDrawer: () => {
		set(() => ({ open: true }));
	},
}));
