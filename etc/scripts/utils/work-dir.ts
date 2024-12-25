import "zx/globals";
// eslint-disable-next-line unicorn/import-style
import * as path from "node:path";

const root = path.resolve(import.meta.dirname, "../../../");
const app = path.resolve(root, "app");
const etc = path.resolve(root, "etc");
const runner = path.resolve(etc, "runner");
const scripts = path.resolve(etc, "scripts");

// eslint-disable-next-line unicorn/prevent-abbreviations
export const workDirs = {
	app: {
		cache: {
			path: path.resolve(app, ".cache"),
		},
		path: app,
		public: {
			path: path.resolve(app, "public"),
		},
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
