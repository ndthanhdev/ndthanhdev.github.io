import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Divider, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { styles } from "./styles";

export type AppFooterProps = React.PropsWithChildren<{
	buildNumber: string;
	mode: string;
	rev: string;
	year: string;
}>;

export const AppFooter = ({ buildNumber, mode, rev, year }: AppFooterProps) => (
	<Box css={styles.root}>
		<Divider />
		<Box css={styles.contentContainer}>
			<Box css={styles.topWrapper}>
				<Box css={styles.leftWrapper}>
					<Typography variant="caption">{`Copyright © ${year}`}</Typography>
					<Typography variant="caption">{`Rev: ${rev}`}</Typography>
					<Typography variant="caption">{`Build: ${buildNumber}`}</Typography>
					<Typography variant="caption">{`Mode: ${mode}`}</Typography>
				</Box>
				<Box css={styles.rightWrapper}>
					<Link
						color="inherit"
						href="https://github.com/ndthanhdev/ndthanhdev.github.io"
						target="_blank"
						underline="none"
						variant="h5"
					>
						<GitHubIcon />
					</Link>
				</Box>
			</Box>
		</Box>
	</Box>
);
