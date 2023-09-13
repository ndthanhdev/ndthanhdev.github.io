import React from "react";
import type { PageProps } from "gatsby";
import { PageContext } from "../types/page-context";
import { CvLayout } from "../layouts/cv";
import { BlogLayout } from "../layouts/blog";
import type { ShellProps } from "./shell";

export const AutoLayout: React.FC<ShellProps> = function Layout(props) {
	let children = props.children as any;
	let pageContext = props.pageContext as PageContext;

	if (pageContext?.layout === "cv") {
		return <CvLayout>{children}</CvLayout>;
	} else if (pageContext?.layout === "blog") {
		return <BlogLayout>{children}</BlogLayout>;
	}

	return <>{children}</>;
};
