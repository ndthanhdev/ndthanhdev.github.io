import React from "react";
import type { PageProps } from "gatsby";
import { PageContext } from "../types/page-context";
import { CvLayout } from "../layouts/cv";
import { PostLayout } from "../layouts/post";
import type { ShellProps } from "./shell";

export const AutoLayout: React.FC<ShellProps> = function Layout(props) {
	let children = props.children as any;
	let pageContext = props.pageContext as PageContext;

	if (pageContext?.layout === "cv") {
		return <CvLayout>{children}</CvLayout>;
	} else if (pageContext?.layout === "post") {
		return <>{children}</>;
	}

	return <>{children}</>;
};
