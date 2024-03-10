import { create } from "zustand";

export type AppDrawerState = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

export const useAppDrawer = create<AppDrawerState>((set) => ({
	open: false,
	setOpen: (open: boolean) => set((state) => ({ open: !state.open })),
}));
