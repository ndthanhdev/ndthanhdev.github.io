import { css } from "@emotion/react";

import { AppTheme } from "@/theme";
import { lineClamp } from "@/utils/styles/line-clamp";

const Constants = {
	titleLineCount: 2,
	descLineCount: 2,
};

export const styles = {
	root: (theme: AppTheme) =>
		css({
			display: "grid",
			gridTemplateColumns: `1fr auto auto`,
			gridTemplateRows: "auto auto minmax(0, 1fr) auto",
			gridTemplateAreas: `\
				"title . thumb"
				"date . thumb"
				"description . thumb"
				"divider divider divider"
			`,
			marginBlockStart: theme.spacing(4),
			marginBlockEnd: theme.spacing(2),
			height: theme.spacing(20),
			[theme.breakpoints.down("md")]: {
				height: theme.spacing(22),
			},
			overflow: "hidden",
		}),

	title: (theme: AppTheme) =>
		css({
			gridArea: "title",
			marginInlineEnd: theme.spacing(2),
			color: theme.palette.text.primary,
			...lineClamp(
				Constants.titleLineCount,
				theme.typography.h6.fontSize!,
				theme.typography.h6.lineHeight!,
			),
		}),

	date: css({
		gridArea: "date",
	}),

	description: (theme: AppTheme) =>
		css({
			gridArea: "description",
			marginBlockStart: theme.spacing(2),
			marginInlineEnd: theme.spacing(2),
			color: theme.palette.text.secondary,
			...lineClamp(
				Constants.descLineCount,
				theme.typography.body1.fontSize!,
				theme.typography.body1.lineHeight!,
			),
		}),

	thumb: (theme: AppTheme) =>
		css({
			gridArea: "thumb",
			width: theme.spacing(15),
			height: theme.spacing(15),
			objectFit: "cover",
			objectPosition: "center",
			backgroundColor: theme.palette.augmentColor({
				color: {
					main: theme.palette.background.paper,
				},
			}).light,
		}),

	divider: (theme: AppTheme) =>
		css({
			gridArea: "divider",
			paddingBlockStart: theme.spacing(2),
		}),
};
