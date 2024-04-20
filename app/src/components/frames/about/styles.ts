import { css } from "@emotion/react";

import { AppTheme } from "@/theme";

export const styles = {
	mainWrapper: () =>
		css({
			minHeight: "90vh",
		}),

	brief: (theme: AppTheme) =>
		css({
			fontWeight: theme.typography.fontWeightMedium,
		}),
};
