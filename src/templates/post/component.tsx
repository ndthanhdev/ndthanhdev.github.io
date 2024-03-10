import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export type PostLayoutProps = React.PropsWithChildren<{}>;

export const PostLayout = ({ children }: any) => {
	return <>{children}</>;
};
