import * as React from "react";

import { AboutFrame } from "@/components/frames/about";
import { useMainTemplateProps } from "@/hooks/use-main-template-props";

function AboutPage() {
	const mainTemplateProps = useMainTemplateProps();

	return <AboutFrame mainTemplateProps={mainTemplateProps} />;
}

export default AboutPage;
