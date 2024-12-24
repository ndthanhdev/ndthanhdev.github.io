import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as GatsbyLink } from "gatsby";
import { DateTime } from "luxon";
import * as React from "react";

import { styles } from "./styles";

export interface PostItemProps {
	title?: string;
	link: string;
	date?: string;
	excerpt?: string;
	thumb?: string;
}

export const PostItem = ({
	thumb,
	title,
	date: dateProp,
	link,
	excerpt,
}: PostItemProps) => {
	const date = dateProp
		? DateTime.fromISO(dateProp).toLocaleString(DateTime.DATE_FULL)
		: "";

	return (
		<Box css={styles.root}>
			<Link
				component={GatsbyLink}
				to={link}
				underline="none"
				css={styles.title}
				variant="h6"
			>
				{title}
			</Link>
			<Typography css={styles.date} variant="subtitle1">
				{date}
			</Typography>
			<Link
				component={GatsbyLink}
				to="/posts/qs05qpu3c0p78ww123zv1/"
				underline="none"
				css={styles.description}
				variant="body1"
			>
				{excerpt}
			</Link>
			{thumb ? (
				<img css={styles.thumb} alt="post thumbnail" src={thumb} />
			) : (
				<ArticleOutlinedIcon css={styles.thumb} />
			)}
			<Divider css={styles.divider} />
		</Box>
	);
};
