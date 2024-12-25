import { AboutFrame } from "@n8v/app/components/frames/about";
import { useMainTemplateProps } from "@n8v/app/hooks/use-main-template-props";

function AboutPage() {
	const mainTemplateProps = useMainTemplateProps();

	return <AboutFrame mainTemplateProps={mainTemplateProps} />;
}

export default AboutPage;
