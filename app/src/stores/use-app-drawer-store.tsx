import { create } from "zustand";

export interface AppDrawerState {
	open: boolean;
	openDrawer: () => void;
	closeDrawer: () => void;
}

export const useAppDrawerStore = create<AppDrawerState>((set) => ({
	open: false,
	openDrawer: () => {
		set(() => ({ open: true }));
	},
	closeDrawer: () => {
		set(() => ({ open: false }));
	},
}));
