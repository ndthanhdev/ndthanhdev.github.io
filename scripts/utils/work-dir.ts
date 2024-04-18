import "zx/globals";

import * as path from "path";

const root = path.resolve(import.meta.dirname, "../../"),
	app = path.resolve(root, "app"),
	scripts = path.resolve(root, "scripts");

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
