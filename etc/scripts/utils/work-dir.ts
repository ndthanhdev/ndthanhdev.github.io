import "zx/globals";
// eslint-disable-next-line unicorn/import-style
import * as path from "node:path";

const root = path.resolve(import.meta.dirname, "../../../"),
	app = path.resolve(root, "app"),
	scripts = path.resolve(root, "etc/scripts");

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
	path: root,
	scripts: {
		path: scripts,
	},
};
