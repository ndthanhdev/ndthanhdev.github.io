import { MyHelmet } from "@n8v/app/components/elements/my-helmet";
import { CVTemplate } from "@n8v/app/components/layouts/cv";
import { AppMDXProvider } from "@n8v/app/providers/mdx-provider";
import { AppThemeProvider } from "@n8v/app/providers/theme-provider";
import { ThemeMode } from "@n8v/app/theme";
import { graphql, type PageProps } from "gatsby";
import * as React from "react";
import { type Merge } from "type-fest";

// eslint-disable-next-line unicorn/prevent-abbreviations
export type MyCVTemplateProps = Merge<
	PageProps<Queries.MyCVQueryQuery>,
	React.PropsWithChildren<object>
>;

const CV = ({ children, data }: MyCVTemplateProps) => (
	<AppThemeProvider overrideThemeMode={ThemeMode.Light}>
		<MyHelmet>
			<title>{data.mdx?.frontmatter?.title}</title>
		</MyHelmet>
		<AppMDXProvider>
			<CVTemplate>{children}</CVTemplate>
		</AppMDXProvider>
	</AppThemeProvider>
);

export default CV;

export const pageQuery = graphql`
	query MyCVQuery($id: String!) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
			}
		}
	}
`;
