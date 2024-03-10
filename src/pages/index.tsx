import * as React from "react";
import { Link, navigate } from "gatsby";
import { Shell } from "@/shell";
import Stack from "@mui/material/Stack";
import { Wip } from "@/components/organisms/wip";
import { MainTemplate } from "@/templates/main";

function Index() {
	// test
	return (
		<MainTemplate>
			<Wip />
		</MainTemplate>
	);
}

export default Index;
