import React from "react";
import { ThemeProvider, merge, Themed } from "theme-ui";
import { Helmet } from "react-helmet";

let Layout: React.FC<{}> = function Layout(props) {
	return (
		<>
			<div>{props.children}</div>
		</>
	);
};

export default Layout;
