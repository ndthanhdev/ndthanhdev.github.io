import { graphql, PageProps } from "gatsby";
import * as React from "react";

import { HomeFrame } from "@/components/frames/home";
import { PostItemProps } from "@/components/organisms/post-item";
import { useMainTemplateProps } from "@/hooks/use-main-template-props";

export type HomePageProps = PageProps<Queries.HomeQuery>;

function HomePage({ data }: HomePageProps) {
	const mainTemplateProps = useMainTemplateProps();

	const posts = data.allMdx?.nodes?.map((post) => {
		return {
			link: `/posts/${post.frontmatter?.nanoId}`,
			title: post.frontmatter?.title,
			date: post.frontmatter?.date,
			excerpt: post.excerpt,
			thumb: post.frontmatter?.thumb?.publicURL,
		} as PostItemProps;
	});

	return <HomeFrame mainTemplateProps={mainTemplateProps} posts={posts} />;
}

export default HomePage;

export const pageQuery = graphql`
	query Home {
		allMdx(
			filter: {
				frontmatter: { wip: { ne: true } }
				internal: { contentFilePath: { glob: "**/posts/**" } }
			}
			sort: { frontmatter: { date: DESC } }
		) {
			nodes {
				id
				frontmatter {
					title
					nanoId
					date
					thumb {
						publicURL
					}
				}
				excerpt
			}
		}
	}
`;
