import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { MainTemplate, MainTemplateProps } from "@/components/templates/main";

export type NotFoundFrameProps = {
	mainTemplateProps: MainTemplateProps;
};

export const NotFoundFrame = ({ mainTemplateProps }: NotFoundFrameProps) => {
	return (
		<MainTemplate {...mainTemplateProps}>
			<Typography variant="h1">Page not found</Typography>
			<Typography variant="body1">
				Sorry 😔 we couldn’t find what you were looking for.
			</Typography>
			<Link href="/">Go home</Link>
		</MainTemplate>
	);
};
