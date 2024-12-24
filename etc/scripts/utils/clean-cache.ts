import "zx/globals";

import { workDirs } from "@n8v/scripts/utils/work-dir";

export const cleanCache = () => $`rm -rf ${workDirs.app.cache.path}`;
