import "zx/globals";
// eslint-disable-next-line unicorn/import-style
import * as path from "node:path";

$.verbose = true;

const root = path.resolve(import.meta.dirname, "../../../");
const apps = path.resolve(root, "apps");
const etc = path.resolve(root, "etc");
const app = path.resolve(apps, "app");
const counter = path.resolve(apps, "counter");
const workflowRuntime = path.resolve(etc, "workflow-runtime");
const scripts = path.resolve(etc, "scripts");

// eslint-disable-next-line unicorn/prevent-abbreviations
export const workDirs = {
	apps: {
		app: {
			cache: {
				path: path.resolve(app, ".cache"),
			},
			path: app,
			public: {
				path: path.resolve(app, "public"),
			},
		},
		counter: {
			path: counter,
			target: {
				apps: {
					path: path.resolve(counter, "target/apps"),
				},
				path: path.resolve(counter, "target"),
			},
		},
		path: apps,
	},

	etc: {
		path: etc,
		scripts: {
			path: scripts,
		},
		workflowRuntime: {
			path: workflowRuntime,
		},
	},
	path: root,
};
