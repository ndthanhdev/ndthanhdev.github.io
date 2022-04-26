import React from "react";
import { ThemeProvider, merge } from "theme-ui";
import { Helmet } from "react-helmet";

let Layout: React.FC<{
	children: React.ReactNode;
}> = (props) => {
	return (
		<>
			<div>{props.children}</div>
		</>
	);
};

export default Layout;
