import { css } from "@emotion/react";
import { type AppTheme } from "@n8v/app/theme";

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
