#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";

import { pipeOutput } from "@n8v/scripts/utils/pipe-output";
import { workDirs } from "@n8v/scripts/utils/work-dir";

cd(workDirs.path);

await pipeOutput($`yarn eslint .`);
