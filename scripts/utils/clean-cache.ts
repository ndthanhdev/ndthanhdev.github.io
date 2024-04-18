import "zx/globals";

import { workDirs } from "~/utils/work-dir";

export const cleanCache = () => $`rm -rf ${workDirs.app.cache.path}`;
