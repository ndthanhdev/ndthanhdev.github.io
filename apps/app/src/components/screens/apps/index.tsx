import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import {
	MainTemplate,
	type MainTemplateProps,
} from "@n8v/app/components/layouts/main";

export interface App {
	title: string;
	url: string;
}

export interface AppsFrameProps {
	apps: App[];
	mainTemplateProps: MainTemplateProps;
}

export const AppsFrame = ({ mainTemplateProps }: AppsFrameProps) => {
	return (
		<MainTemplate {...mainTemplateProps}>
			<Container maxWidth="lg">
				<Stack direction="row"></Stack>
			</Container>
		</MainTemplate>
	);
};
