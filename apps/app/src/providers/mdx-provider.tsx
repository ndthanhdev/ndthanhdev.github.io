import "prismjs/themes/prism-okaidia.css";

import type { AppTheme } from "@n8v/app/theme";

import { MDXProvider } from "@mdx-js/react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

export type AppMDXProviderProps = React.PropsWithChildren<object>;

/* eslint-disable @typescript-eslint/no-explicit-any */
const h1 = (props: any) => <Typography gutterBottom variant="h3" {...props} />;
const h2 = (props: any) => <Typography gutterBottom variant="h4" {...props} />;
const h3 = (props: any) => <Typography gutterBottom variant="h5" {...props} />;
const h4 = (props: any) => <Typography gutterBottom variant="h6" {...props} />;
const h5 = (props: any) => <Typography gutterBottom variant="h7" {...props} />;
const h6 = (props: any) => (
	<Typography gutterBottom variant="subtitle1" {...props} />
);
const text = (props: any) => <Typography variant="body1" {...props} />;

const strong = (props: any) => (
	<Typography
		component="strong"
		css={(theme: AppTheme) => ({
			fontWeight: theme.typography.fontWeightBold,
		})}
		variant="body1"
		{...props}
	/>
);

const p = (props: any) => (
	<Typography
		{...props}
		css={(theme: AppTheme) => ({
			marginBlockEnd: theme.spacing(1),
		})}
		paragraph
		variant="body1"
	/>
);

const ul = (props: any) => (
	<ul
		{...props}
		css={(theme: AppTheme) => ({
			marginBlockEnd: theme.spacing(2),
			marginBlockStart: theme.spacing(0),
		})}
	/>
);

const li = (props: any) => <li {...props} css={{}} />;

const a = (props: any) => <Link component="a" target="_blank" {...props} />;

const defaultComponents = {
	a,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	li,
	p,
	strong,
	text,
	ul,
} satisfies React.ComponentProps<typeof MDXProvider>["components"];
/* eslint-enable @typescript-eslint/no-explicit-any */

export const AppMDXProvider = ({ children }: AppMDXProviderProps) => (
	<MDXProvider components={defaultComponents}>{children}</MDXProvider>
);