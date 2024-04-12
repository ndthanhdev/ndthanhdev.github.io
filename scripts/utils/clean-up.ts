import "zx/globals";
import { workDirs } from "~/utils/work-dir";
import { cleanBuild } from "~/utils/clean-build";

export const cleanUp = async () => {
	await cleanBuild();
	await $`rm -rf ${workDirs.path}/node_modules`;
};
