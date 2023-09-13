import React from "react";

export const CvLayout: React.FC<{
	children: React.ReactNode;
}> = function CvLayout({ children }) {
	return (
		<div css={{ display: "flex", justifyContent: "center" }}>
			<div css={{ maxWidth: "210mm", padding: "0 10mm 10mm 10mm" }}>
				{children}
			</div>
		</div>
	);
};
