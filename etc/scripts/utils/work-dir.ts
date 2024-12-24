import "zx/globals";

import * as path from "path";

const root = path.resolve(import.meta.dirname, "../../../"),
	app = path.resolve(root, "app"),
	scripts = path.resolve(root, "etc/scripts");

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
