import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { MainTemplate, MainTemplateProps } from "@/components/templates/main";

import { styles } from "./styles";

export interface AboutFrameProps {
	mainTemplateProps: MainTemplateProps;
}

export const AboutFrame = ({ mainTemplateProps }: AboutFrameProps) => {
	return (
		<MainTemplate {...mainTemplateProps}>
			<Container maxWidth="lg">
				<Stack
					css={styles.mainWrapper}
					justifyContent="center"
					alignItems="center"
				>
					<Typography css={styles.brief} variant="h1">
						{"A developer, an open source lover and a gamer"}
					</Typography>
				</Stack>
			</Container>
		</MainTemplate>
	);
};
