import React from "react";

export type HomeLayoutProps = React.PropsWithChildren<{}>;

export const HomeLayout = ({ children }: HomeLayoutProps) => {
	return <>{children}</>;
};
