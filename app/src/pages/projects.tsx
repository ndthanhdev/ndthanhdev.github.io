import * as React from "react";

import { ProjectFrame } from "@/components/frames/projects";
import { useMainTemplateProps } from "@/hooks/use-main-template-props";

function Projects() {
	const mainTemplateProps = useMainTemplateProps();

	return <ProjectFrame mainTemplateProps={mainTemplateProps} />;
}

export default Projects;
