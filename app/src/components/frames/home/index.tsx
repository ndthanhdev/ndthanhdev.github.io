import Box from "@mui/material/Box";
import * as React from "react";

import { PostItem, PostItemProps } from "@/components/organisms/post-item";
import { MainTemplate, MainTemplateProps } from "@/components/templates/main";

export interface HomeFrameProps {
	mainTemplateProps: MainTemplateProps;
	posts: PostItemProps[];
}

export const HomeFrame = ({ mainTemplateProps, posts }: HomeFrameProps) => {
	return (
		<MainTemplate {...mainTemplateProps}>
			<Box>
				<Box>
					{posts.map((post) => (
						<PostItem key={post.link} {...post} />
					))}
				</Box>
			</Box>
		</MainTemplate>
	);
};
