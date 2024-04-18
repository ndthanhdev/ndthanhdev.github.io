import { graphql, PageProps } from "gatsby";
import * as React from "react";
import { Merge } from "type-fest";

import { MyHelmet } from "@/components/atoms/my-helmet";
import { AppMDXProvider } from "@/providers/mdx-provider";
import { AppThemeProvider } from "@/providers/theme-provider";
import { ThemeMode } from "@/theme";

import { CVTemplate } from "../../components/templates/cv";

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
