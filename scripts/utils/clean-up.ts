import "zx/globals";

import { cleanBuild } from "~/utils/clean-build";
import { workDirs } from "~/utils/work-dir";

export const cleanUp = async () => {
	await cleanBuild();
	await $`rm -rf ${workDirs.path}/node_modules`;
};
