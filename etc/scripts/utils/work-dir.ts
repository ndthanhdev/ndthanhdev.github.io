import "zx/globals";
// eslint-disable-next-line unicorn/import-style
import * as path from "node:path";

const root = path.resolve(import.meta.dirname, "../../../");
const apps = path.resolve(root, "apps");
const etc = path.resolve(root, "etc");
const app = path.resolve(apps, "app");
const counter = path.resolve(apps, "counter");
const runner = path.resolve(etc, "runner");
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
			dist: {
				apps: {
					path: path.resolve(counter, "dist/apps"),
				},
				path: path.resolve(counter, "dist"),
			},
			path: counter,
		},
		path: apps,
	},

	etc: {
		path: etc,
		runner: {
			path: runner,
		},
		scripts: {
			path: scripts,
		},
	},
	path: root,
};
