import Stack, { StackProps } from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DateTime } from "luxon";
import * as React from "react";

export type PostHeaderProps = Omit<
	StackProps<
		"div",
		{
			title?: string | null;
			date?: string | null;
		}
	>,
	"sx"
>;

export const PostHeader = ({ title, date, ...stackProps }: PostHeaderProps) => {
	const formatterDate = date
		? DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)
		: "";

	return (
		<Stack {...stackProps}>
			<Typography variant="h2">{title}</Typography>
			<Typography variant="subtitle1">{formatterDate}</Typography>
		</Stack>
	);
};
