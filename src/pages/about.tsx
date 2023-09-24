import * as React from "react";
import { Link, navigate } from "gatsby";
import { Shell } from "@/shell";
import { MainLayoutContainer } from "@/layouts/main";
import Stack from "@mui/material/Stack";
import { css } from "@emotion/react";
import { AppTheme } from "@/shell/theme";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

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
		<Shell>
			<MainLayoutContainer>
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
			</MainLayoutContainer>
		</Shell>
	);
}

export default Index;
