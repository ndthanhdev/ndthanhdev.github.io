import * as React from "react";

import { Wip } from "@/components/organisms/wip";
import { MainTemplate, MainTemplateProps } from "@/components/templates/main";

export type HomeFrameProps = {
	mainTemplateProps: MainTemplateProps;
};

export const ProjectFrame = ({ mainTemplateProps }: HomeFrameProps) => {
	return (
		<MainTemplate {...mainTemplateProps}>
			<Wip />
		</MainTemplate>
	);
};
