import "zx/globals";

import * as path from "path";

const root = path.resolve(import.meta.dirname, "../../");
const app = path.resolve(root, "app");
const scripts = path.resolve(root, "scripts");

export const workDirs = {
	path: root,
	app: {
		path: app,
		public: {
			path: path.resolve(app, "public"),
		},
	},
	scripts: {
		path: scripts,
	},
};
