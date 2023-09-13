import React from "react";

export type BlogLayoutProps = React.PropsWithChildren<{}>;

export const BlogLayout = ({ children }: BlogLayoutProps) => {
	return (
		<>
			blog layout
			{children}
		</>
	);
};
