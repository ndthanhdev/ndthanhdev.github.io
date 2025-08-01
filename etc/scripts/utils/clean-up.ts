import "zx/globals";
import { cleanBuild } from "@n8v/scripts/utils/clean-build";
import { workDirs } from "@n8v/scripts/utils/work-dirs";

$.verbose = true;

export const cleanUp = async () => {
	await cleanBuild();
	await $`rm -rf ${workDirs.path}/node_modules`;
};
