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

	let content = null;

	if (pageContext?.layout === "cv") {
		content = <CvLayout>{children}</CvLayout>;
	}

	content = <div>{children}</div>;

	return (
		<>
			<SEO />
			{content}
		</>
	);
};

export default Layout;
