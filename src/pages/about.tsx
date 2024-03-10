import * as React from "react";
import Stack from "@mui/material/Stack";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AppTheme } from "@/theme";
import { MainTemplate } from "@/templates/main";

const styles = {
	mainWrapper: (theme: AppTheme) =>
		css({
			minHeight: "90vh",
		}),

	brief: (theme: AppTheme) =>
		css({
			fontWeight: theme.typography.fontWeightMedium,
		}),
};

function Index() {
	return (
		<MainTemplate>
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
}

export default Index;
