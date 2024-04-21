import "zx/globals";

import { workDirs } from "~/utils/work-dir";

export const cleanBuild = () => $`rm -rf ${workDirs.app.public.path}`;
