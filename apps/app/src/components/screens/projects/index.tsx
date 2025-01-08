import { Wip } from "@n8v/app/components/fragments/wip";
import {
	MainTemplate,
	type MainTemplateProps,
} from "@n8v/app/components/layouts/main";

export interface HomeFrameProps {
	mainTemplateProps: MainTemplateProps;
}

export const ProjectFrame = ({ mainTemplateProps }: HomeFrameProps) => {
	return (
		<MainTemplate {...mainTemplateProps}>
			<Wip />
		</MainTemplate>
	);
};
