#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";
import { cleanBuild } from "@n8v/scripts/utils/clean-build";
import { workDirs } from "@n8v/scripts/utils/work-dir";

await cleanBuild();

cd(workDirs.path);

await $`dagger call --dir . test`;
