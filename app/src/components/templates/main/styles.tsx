import { css } from "@emotion/react";

import { AppTheme } from "@/theme";

export const styles = {
	main: (theme: AppTheme) =>
		css({
			minHeight: "95vh",
			marginInline: theme.spacing(2),
		}),
};
