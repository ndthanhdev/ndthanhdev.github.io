import React from "react";

export const MyCVLayout: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<div css={{ display: "flex", justifyContent: "center" }}>
			<div css={{ maxWidth: "210mm", padding: "0 10mm 10mm 10mm" }}>
				{children}
			</div>
		</div>
	);
};
