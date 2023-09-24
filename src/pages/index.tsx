import * as React from "react";
import { Link, navigate } from "gatsby";
import { Shell } from "@/shell";
import { MainLayoutContainer } from "@/layouts/main";
import Stack from "@mui/material/Stack";
import { Wip } from "@/components/wip";

function Index() {
	return (
		<Shell>
			<MainLayoutContainer>
				<Wip />
			</MainLayoutContainer>
		</Shell>
	);
}

export default Index;
