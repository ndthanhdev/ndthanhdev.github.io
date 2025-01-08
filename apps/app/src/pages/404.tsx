import { NotFoundFrame } from "@n8v/app/components/screens/not-found";
import { useMainTemplateProps } from "@n8v/app/hooks/use-main-template-props";

const NotFoundPage = () => {
	const mainTemplateProps = useMainTemplateProps();

	return <NotFoundFrame mainTemplateProps={mainTemplateProps} />;
};

export default NotFoundPage;
