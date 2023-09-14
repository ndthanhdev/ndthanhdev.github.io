import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Typography } from "@mui/material";
import { PostLayout } from "../layouts/post";

export type MDXProviderProps = React.PropsWithChildren<{}>;

const h1 = (props: any) => <Typography variant="h1" {...props} />;
const h2 = (props: any) => <Typography variant="h2" {...props} />;
const h3 = (props: any) => <Typography variant="h3" {...props} />;
const h4 = (props: any) => <Typography variant="h4" {...props} />;
const h5 = (props: any) => <Typography variant="h5" {...props} />;
const h6 = (props: any) => <Typography variant="h6" {...props} />;
const text = (props: any) => <Typography variant="body1" {...props} />;
const p = (props: any) => <Typography variant="body1" paragraph {...props} />;

const components = {
	text,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	wrapper: PostLayout,
} satisfies React.ComponentProps<typeof MDXProvider>["components"];

export const AppMDXProvider = ({ children }: MDXProviderProps) => {
	return <MDXProvider components={components}>{children}</MDXProvider>;
};
