import React from "react";
import Stack from "@mui/material/Stack";

export const CVLayout: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<div css={{ display: "flex", justifyContent: "center" }}>
			<Stack
				css={{
					maxWidth: "210mm",
					padding: "0 10mm 10mm 10mm",
					width: "100%",
				}}
			>
				{children}
			</Stack>
		</div>
	);
};
