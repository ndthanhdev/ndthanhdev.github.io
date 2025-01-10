import { type Project } from "@n8v/app/components/screens/projects";
import React from "react";

export const useProjects = () =>
	React.useMemo(
		() =>
			[
				{
					description:
						"A simple counter app compiled to WebAssembly, written in Rust.",
					title: "Wasm Counter",
					url: "/apps/counter",
				},
			] satisfies Project[],
		[],
	);
