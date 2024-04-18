import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Divider, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { styles } from "./styles";

export type AppFooterProps = React.PropsWithChildren<{
	year: string;
	buildNumber: string;
	rev: string;
}>;

export const AppFooter = ({ year, buildNumber, rev }: AppFooterProps) => (
	<Box css={styles.root}>
		<Divider />
		<Box css={styles.contentContainer}>
			<Box css={styles.topWrapper}>
				<Box css={styles.leftWrapper}>
					<Typography variant="caption">{`Copyright © ${year}`}</Typography>
					<Typography variant="caption">{`Build: ${buildNumber}`}</Typography>
					<Typography variant="caption">{`Rev: ${rev}`}</Typography>
				</Box>
				<Box css={styles.rightWrapper}>
					<Link
						target="_blank"
						href="https://github.com/ndthanhdev/ndthanhdev.github.io"
						underline="none"
						color="inherit"
						variant="h5"
					>
						<GitHubIcon />
					</Link>
				</Box>
			</Box>
		</Box>
	</Box>
);
