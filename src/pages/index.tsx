import * as React from "react";
import { Link, navigate } from "gatsby";
import { Shell } from "@/shell";
import { MainLayoutContainer } from "@/layouts/main";
import Stack from "@mui/material/Stack";

function Index() {
	return (
		<Shell>
			<MainLayoutContainer>
				<Stack></Stack>
			</MainLayoutContainer>
		</Shell>
	);
}

export default Index;
