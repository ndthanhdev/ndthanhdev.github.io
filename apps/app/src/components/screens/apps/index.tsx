import * as mui from "@mui/material";
import { AppCard } from "@n8v/app/components/fragments/app-card";
import {
	MainTemplate,
	type MainTemplateProps,
} from "@n8v/app/components/layouts/main";

import { styles } from "./styles";

export interface App {
	title: string;
	url: string;
}

export interface AppsScreenProps {
	apps: App[];
	mainTemplateProps: MainTemplateProps;
}

export const AppsScreen = ({ apps, mainTemplateProps }: AppsScreenProps) => {
	return (
		<MainTemplate css={styles.root} maxWidth="xl" {...mainTemplateProps}>
			<mui.Stack direction="row" spacing={2}>
				{apps.map((app) => (
					<AppCard key={app.url} title={app.title} url={app.url} />
				))}
			</mui.Stack>
		</MainTemplate>
	);
};
