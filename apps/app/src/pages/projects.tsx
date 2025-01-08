import { ProjectFrame } from "@n8v/app/components/screens/projects";
import { useMainTemplateProps } from "@n8v/app/hooks/use-main-template-props";

function Projects() {
	const mainTemplateProps = useMainTemplateProps();

	return <ProjectFrame mainTemplateProps={mainTemplateProps} />;
}

export default Projects;
