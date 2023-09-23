import { SettingContainer, useSettings } from "../settings";
import { MainLayout } from "./main";
import { createStore } from "zustand";

export const useMainLayout = createStore((set) => ({
	openSettings: false,
	setOpenSettings: (open: boolean) => set({ openSettings: open }),
}));

export type MainLayoutContainerProps = React.PropsWithChildren<{}>;

export const MainLayoutContainer = ({ children }: MainLayoutContainerProps) => {
	const settings = useSettings();

	return (
		<MainLayout onOpenSettings={() => settings.setOpen(true)}>
			<SettingContainer />
			{children}
		</MainLayout>
	);
};
