import { ProjectsScreen } from "@n8v/app/components/screens/projects";
import { useProjects } from "@n8v/app/hooks/use-apps";
import { useMainTemplateProps } from "@n8v/app/hooks/use-main-template-props";

export const AppsPage = () => {
	const mainTemplateProps = useMainTemplateProps();
	return (
		<ProjectsScreen
			mainTemplateProps={mainTemplateProps}
			projects={useProjects()}
		/>
	);
};

export default AppsPage;
