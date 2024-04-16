import * as React from "react";
import { Wip } from "@/components/organisms/wip";
import { MainTemplate } from "@/components/templates/main";
import { useMainTemplateProps } from "@/hooks/use-main-template-props";

function Index() {
	const mainTemplateProps = useMainTemplateProps();

	return (
		<MainTemplate {...mainTemplateProps}>
			<Wip />
		</MainTemplate>
	);
}

export default Index;
