import { ProjectsScreen } from "@n8v/app/components/screens/projects";
import { useNotifyCopied } from "@n8v/app/hooks/notifications";
import { useProjects } from "@n8v/app/hooks/use-apps";
import { useMainTemplateProps } from "@n8v/app/hooks/use-main-template-props";

export const AppsPage = () => {
	const mainTemplateProps = useMainTemplateProps();
	const handleCopied = useNotifyCopied("Copied!");
	return (
		<ProjectsScreen
			mainTemplateProps={mainTemplateProps}
			onCopy={() => {
				handleCopied();
			}}
			projects={useProjects()}
		/>
	);
};

export default AppsPage;
