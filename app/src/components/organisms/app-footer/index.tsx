import { Box, Divider, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styles } from "./styles";

export type AppFooterProps = React.PropsWithChildren<{}>;

export const AppFooter = ({}: AppFooterProps) => {
	return (
		<Box css={styles.root}>
			<Divider />
			<Box css={styles.contentContainer}>
				<Box css={styles.contentWrapper}>
					<Box css={styles.leftWrapper}>{"Made with ❤️ by me"}</Box>
					<Box css={styles.centerWrapper}></Box>
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
};
