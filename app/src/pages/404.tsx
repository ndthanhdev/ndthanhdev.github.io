import * as React from "react";

import { NotFoundFrame } from "@/components/frames/not-found";
import { useMainTemplateProps } from "@/hooks/use-main-template-props";

const NotFoundPage = () => {
	const mainTemplateProps = useMainTemplateProps();

	return <NotFoundFrame mainTemplateProps={mainTemplateProps} />;
};

export default NotFoundPage;
