import "zx/globals";
import { workDirs } from "@n8v/scripts/utils/work-dir";

$.verbose = true;

export const cleanCache = () => $`rm -rf ${workDirs.apps.app.cache.path}`;
