import React from "react";
import { ThemeProvider, merge } from "theme-ui";
import { Helmet } from "react-helmet";

const CvLayout: React.FC<{
	children: React.ReactNode;
}> = function CvLayout({ children }) {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div
				style={{
					maxWidth: "210mm",
					padding: "0 10mm 10mm 10mm",
				}}
			>
				{children}
			</div>
		</div>
	);
};

let Layout: React.FC<{
	children: React.ReactNode;
	pageContext: any;
}> = function Layout(props) {
	const { children, pageContext } = props;

	if (pageContext?.layout === "cv") {
		return <CvLayout>{children}</CvLayout>;
	}

	return <div>{children}</div>;
};

export default Layout;
