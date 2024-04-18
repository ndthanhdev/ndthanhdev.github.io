#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";

import { pipeOutput } from "~/utils/pipe-output";
import { workDirs } from "~/utils/work-dir";

cd(workDirs.path);

await pipeOutput($`yarn eslint .`);
