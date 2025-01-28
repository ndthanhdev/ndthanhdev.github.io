import * as muiIcon from "@mui/icons-material";
import * as mui from "@mui/material";
import { Link as GatsbyLink } from "gatsby";

import { styles } from "./styles";

export interface MediaProps {
	title: string;
	url: string;
}

export const Media = ({ title, url }: MediaProps) => {
	return (
		<mui.Box css={styles.media}>
			<iframe css={styles.mediaIframe} src={url} title={title} />
		</mui.Box>
	);
};

export interface ProjectCardProps {
	description?: string;
	onCopy?: () => void;
	title: string;
	url: string;
}

export const ProjectCard = ({
	description,
	onCopy,
	title,
	url,
}: ProjectCardProps) => {
	return (
		<mui.Card css={styles.root}>
			<mui.CardMedia component={Media} title={title} url={url} />
			<mui.Divider />
			<mui.CardContent css={styles.content}>
				<mui.Typography gutterBottom variant="h5">
					{title}
				</mui.Typography>
				<mui.Typography css={styles.description} variant="body2">
					{description}
				</mui.Typography>
			</mui.CardContent>
			<mui.CardActions css={styles.actions}>
				<mui.IconButton color="primary" onClick={onCopy} size="medium">
					<muiIcon.CopyAll />
				</mui.IconButton>
				<mui.IconButton
					aria-label={`Open ${title}`}
					color="primary"
					href={url}
					LinkComponent={GatsbyLink}
					size="medium"
					target="_blank"
				>
					<muiIcon.OpenInNew />
				</mui.IconButton>
			</mui.CardActions>
		</mui.Card>
	);
};
