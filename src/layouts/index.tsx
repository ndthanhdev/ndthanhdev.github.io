import React from "react";
import { Headers } from "../components/headers";

const CvLayout: React.FC<{
	children: React.ReactNode;
}> = function CvLayout({ children }) {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div css={{ maxWidth: "210mm", padding: "0 10mm 10mm 10mm" }}>
				{children}
			</div>
		</div>
	);
};

let Layout: React.FC<{
	children: React.ReactNode;
	pageContext: any;
}> = function Layout(props) {
	let { children, pageContext } = props;

	children = (
		<>
			<Headers />
			{children}
		</>
	);

	if (pageContext?.layout === "cv") {
		return <CvLayout>{children}</CvLayout>;
	}

	return <div>{children}</div>;
};

export default Layout;
