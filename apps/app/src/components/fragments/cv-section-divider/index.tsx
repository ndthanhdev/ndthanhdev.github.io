import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import React, { type ReactNode } from "react";

import { styles } from "./styles";

export interface CvSectionDividerProps {
	children?: ReactNode;
}

export const CvSectionDivider = ({ children }: CvSectionDividerProps) => {
	return (
		<Stack
			css={styles.stack}
			direction="row"
			justifyContent="center"
			mb={2}
			mt={6}
		>
			<Divider css={styles.divider} textAlign="center">
				{children}
			</Divider>
		</Stack>
	);
};
