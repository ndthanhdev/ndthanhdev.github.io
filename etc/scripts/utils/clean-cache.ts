import "zx/globals";
import { workDirs } from "@n8v/scripts/utils/work-dir";

export const cleanCache = () => $`rm -rf ${workDirs.apps.app.cache.path}`;
