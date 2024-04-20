import * as React from "react";

import { HomeFrame } from "@/components/frames/home";
import { useMainTemplateProps } from "@/hooks/use-main-template-props";

function HomePage() {
	const mainTemplateProps = useMainTemplateProps();

	return <HomeFrame mainTemplateProps={mainTemplateProps} />;
}

export default HomePage;
