/* eslint-disable @typescript-eslint/no-unsafe-call */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/apps/agent/",
	build: {
		target: "esnext",
	},
	plugins: [react()],
	worker: {
		format: "es",
	},
});
