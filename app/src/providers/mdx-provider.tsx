import { MDXProvider } from "@mdx-js/react";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { AppTheme } from "@/theme";

export type AppMDXProviderProps = React.PropsWithChildren<object>;

/* eslint-disable @typescript-eslint/no-explicit-any */
const h1 = (props: any) => <Typography gutterBottom variant="h1" {...props} />,
	h2 = (props: any) => <Typography gutterBottom variant="h2" {...props} />,
	h3 = (props: any) => <Typography gutterBottom variant="h3" {...props} />,
	h4 = (props: any) => <Typography gutterBottom variant="h4" {...props} />,
	h5 = (props: any) => <Typography gutterBottom variant="h5" {...props} />,
	h6 = (props: any) => <Typography gutterBottom variant="h6" {...props} />,
	text = (props: any) => <Typography variant="body1" {...props} />,
	strong = (props: any) => (
		<Typography
			variant="body1"
			css={(theme: AppTheme) => ({
				fontWeight: theme.typography.fontWeightBold,
			})}
			{...props}
		/>
	),
	p = (props: any) => (
		<Typography
			{...props}
			variant="body1"
			paragraph
			css={(theme: AppTheme) => ({
				marginBlockEnd: theme.spacing(1),
			})}
		/>
	),
	ul = (props: any) => (
		<ul
			{...props}
			css={(theme: AppTheme) => ({
				marginBlockStart: theme.spacing(0),
				marginBlockEnd: theme.spacing(2),
			})}
		/>
	),
	li = (props: any) => <li {...props} css={{}} />,
	defaultComponents = {
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
/* eslint-enable @typescript-eslint/no-explicit-any */

export const AppMDXProvider = ({ children }: AppMDXProviderProps) => (
	<MDXProvider components={defaultComponents}>{children}</MDXProvider>
);
