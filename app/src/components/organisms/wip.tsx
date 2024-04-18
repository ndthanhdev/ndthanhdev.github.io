import { css } from "@emotion/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { AppTheme } from "@/theme";

export type WipProps = React.PropsWithChildren<object>;

const styles = {
	root: () =>
		css({
			minHeight: "90vh",
		}),
	description: (theme: AppTheme) =>
		css({
			fontWeight: theme.typography.fontWeightMedium,
		}),
};

export const Wip = () => (
	<Stack css={styles.root} justifyContent="center" alignItems="center">
		<Typography css={styles.description} variant="h1">
			{"Wip ;)"}
		</Typography>
	</Stack>
);
