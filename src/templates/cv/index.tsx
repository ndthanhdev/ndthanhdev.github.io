import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Merge } from "type-fest";
import { MyHelmet } from "@/components/atoms/my-helmet";
import { CVLayout } from "./component";
import { ThemeMode } from "@/theme";
import { AppThemeProvider } from "@/providers/theme-provider";
import { AppMDXProvider } from "@/providers/mdx-provider";

export type MyCVTemplateProps = Merge<
	PageProps<Queries.MyCVQueryQuery>,
	React.PropsWithChildren<{}>
>;

const CVTemplate = ({ children, data }: MyCVTemplateProps) => {
	return (
		<AppThemeProvider overrideThemeMode={ThemeMode.Light}>
			<MyHelmet>
				<title>{data.mdx?.frontmatter?.title}</title>
			</MyHelmet>
			<AppMDXProvider>
				<CVLayout>{children}</CVLayout>
			</AppMDXProvider>
		</AppThemeProvider>
	);
};

export default CVTemplate;

export const pageQuery = graphql`
	query MyCVQuery($id: String!) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
			}
		}
	}
`;
