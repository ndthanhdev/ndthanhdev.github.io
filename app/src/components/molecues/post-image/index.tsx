import Stack, { StackProps } from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { styles } from "./styles";

export type PostImageProps = Omit<
	StackProps<
		"div",
		{
			src: string;
			caption?: string | React.ReactNode;
		}
	>,
	"sx"
>;

export const PostImage = ({ src, caption, ...cardProps }: PostImageProps) => {
	return (
		<Stack
			direction="column"
			css={styles.root}
			alignItems="center"
			spacing={1}
			{...cardProps}
		>
			<img
				css={styles.image}
				src={src}
				alt={typeof caption === "string" ? caption : undefined}
			/>
			{typeof caption === "string" ? (
				<Typography variant="caption">{caption}</Typography>
			) : (
				caption
			)}
		</Stack>
	);
};
