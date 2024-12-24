import "zx/globals";

import { workDirs } from "@n8v/scripts/utils/work-dir";

export const cleanBuild = () => $`rm -rf ${workDirs.app.public.path}`;
