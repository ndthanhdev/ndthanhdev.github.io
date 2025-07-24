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
				{
					description:
						"An MCP Server that enables AI assistants to interact with your local browsers.",
					title: "MCP Browser Kit",
					url: "https://github.com/ndthanhdev/mcp-browser-kit",
				},
			] satisfies Project[],
		[],
	);
