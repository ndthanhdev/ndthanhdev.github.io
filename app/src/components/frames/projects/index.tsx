import { Wip } from "@n8v/app/components/organisms/wip";
import {
	MainTemplate,
	type MainTemplateProps,
} from "@n8v/app/components/templates/main";

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
