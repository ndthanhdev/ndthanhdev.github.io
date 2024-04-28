import { css } from "@emotion/react";

import { AppTheme } from "@/theme";

export const styles = {
	main: (theme: AppTheme) =>
		css({
			minHeight: "95vh",
			marginBlockStart: theme.spacing(6),
			marginBlockEnd: theme.spacing(4),
		}),

	header: (theme: AppTheme) =>
		css({
			marginBlockEnd: theme.spacing(4),
		}),
};
