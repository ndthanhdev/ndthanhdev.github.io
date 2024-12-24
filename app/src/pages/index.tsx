import { graphql, type PageProps } from "gatsby";

import { HomeFrame } from "@/components/frames/home";
import { type PostItemProps } from "@/components/organisms/post-item";
import { useMainTemplateProps } from "@/hooks/use-main-template-props";

export type HomePageProps = PageProps<Queries.HomeQuery>;

function HomePage({ data }: HomePageProps) {
	const mainTemplateProps = useMainTemplateProps();

	const posts = data.allMdx.nodes.map((post) => {
		return {
			date: post.frontmatter?.date,
			excerpt: post.excerpt,
			link: `/posts/${String(post.frontmatter?.nanoId)}`,
			thumb: post.frontmatter?.thumb?.publicURL,
			title: post.frontmatter?.title,
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
