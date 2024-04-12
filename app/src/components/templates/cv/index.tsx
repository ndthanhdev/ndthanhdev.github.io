import React from "react";
import Stack from "@mui/material/Stack";
import { styles } from "./styles";

export const CVTemplate: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<div css={styles.root}>
			<Stack
				css={styles.stack}
			>
				{children}
			</Stack>
		</div>
	);
};
