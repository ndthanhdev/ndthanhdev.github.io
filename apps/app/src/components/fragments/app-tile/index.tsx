import type React from "react";

export interface AppTileProps {
	title: React.ReactNode;
	url: string;
}

export const AppTile = ({ title }: AppTileProps) => {
	return title;
};
