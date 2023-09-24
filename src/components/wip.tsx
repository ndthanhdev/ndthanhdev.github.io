import { AppTheme } from "@/shell/theme";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import * as React from "react";

export type WipProps = React.PropsWithChildren<{}>;

const styles = {
	root: (theme: AppTheme) =>
		css({
			minHeight: "90vh",
		}),
	description: (theme: AppTheme) =>
		css({
			fontWeight: theme.typography.fontWeightMedium,
		}),
};

export const Wip = ({}: WipProps) => {
	return (
		<Stack css={styles.root} justifyContent="center" alignItems="center">
			<Typography css={styles.description} variant="h1">
				{"Wip ;)"}
			</Typography>
		</Stack>
	);
};
