import "zx/globals";
import { workDirs } from "@n8v/scripts/utils/work-dirs";
import fs from "fs-extra";

$.verbose = true;

export const cleanBuild = async () => {
	await fs.emptyDir(workDirs.apps.app.public.path);
};
