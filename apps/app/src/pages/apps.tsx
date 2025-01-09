import { AppsScreen } from "@n8v/app/components/screens/apps";
import { useMainTemplateProps } from "@n8v/app/hooks/use-main-template-props";

export const AppsPage = () => {
	const mainTemplateProps = useMainTemplateProps();
	return (
		<AppsScreen
			apps={[
				{
					title: "App 1",
					url: "/apps/counter",
				},
				{
					title: "App 2",
					url: "/app-2",
				},
			]}
			mainTemplateProps={mainTemplateProps}
		/>
	);
};

export default AppsPage;
