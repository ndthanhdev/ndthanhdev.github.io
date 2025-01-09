import * as muiIcon from "@mui/icons-material";
import * as mui from "@mui/material";

import { styles } from "./styles";

export interface AppCardProps {
	description?: string;
	title: string;
	url: string;
}

export const AppCard = ({ description, title, url }: AppCardProps) => {
	return (
		<mui.Card>
			<mui.CardMedia
				component="iframe"
				css={styles.media}
				src={url}
				title={title}
			/>
			<mui.CardContent>
				<mui.Typography gutterBottom variant="h5">
					{title}
				</mui.Typography>
				<mui.Typography css variant="body2">
					{description}
				</mui.Typography>
			</mui.CardContent>
			<mui.CardActions css={styles.actions}>
				<mui.IconButton size="medium">
					<muiIcon.CopyAll />
				</mui.IconButton>
				<mui.IconButton size="medium">
					<muiIcon.OpenInNew />
				</mui.IconButton>
			</mui.CardActions>
		</mui.Card>
	);
};
