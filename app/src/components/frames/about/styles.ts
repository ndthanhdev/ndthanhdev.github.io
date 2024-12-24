import { css } from "@emotion/react";

import { AppTheme } from "@/theme";

export const styles = {
	brief: (theme: AppTheme) =>
		css({
			fontWeight: theme.typography.fontWeightMedium,
		}),

	mainWrapper: () =>
		css({
			minHeight: "90vh",
		}),
};
