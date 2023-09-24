import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { AppTheme, AppThemeProvider } from "./theme";

export type MDXProviderProps = React.PropsWithChildren<{}>;

const h1 = (props: any) => <Typography gutterBottom variant="h1" {...props} />;
const h2 = (props: any) => <Typography gutterBottom variant="h2" {...props} />;
const h3 = (props: any) => <Typography gutterBottom variant="h3" {...props} />;
const h4 = (props: any) => <Typography gutterBottom variant="h4" {...props} />;
const h5 = (props: any) => <Typography gutterBottom variant="h5" {...props} />;
const h6 = (props: any) => <Typography gutterBottom variant="h6" {...props} />;
const text = (props: any) => <Typography variant="body1" {...props} />;
const strong = (props: any) => (
	<Typography
		variant="body1"
		css={(theme: AppTheme) => ({
			fontWeight: theme.typography.fontWeightBold,
		})}
		{...props}
	/>
);
const p = (props: any) => (
	<Typography
		{...props}
		variant="body1"
		paragraph
		css={(theme: AppTheme) => ({
			marginBlockEnd: theme.spacing(1),
		})}
	/>
);
const ul = (props: any) => (
	<ul
		{...props}
		css={(theme: AppTheme) => ({
			marginBlockStart: theme.spacing(0),
			marginBlockEnd: theme.spacing(2),
		})}
	/>
);
const li = (props: any) => <li {...props} css={{}} />;

const defaultComponents = {
	text,
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	strong,
	ul,
	li,
} satisfies React.ComponentProps<typeof MDXProvider>["components"];

export const AppMDXProvider = ({ children }: MDXProviderProps) => {
	return <MDXProvider components={defaultComponents}>{children}</MDXProvider>;
};
