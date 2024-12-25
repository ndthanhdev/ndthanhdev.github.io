#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";
import { cleanBuild } from "@n8v/scripts/utils/clean-build";
import { workDirs } from "@n8v/scripts/utils/work-dir";

await cleanBuild();

cd(workDirs.etc.runner.path);

await $`dagger call --dir ${workDirs.path} test`;

await $`dagger call --dir ${workDirs.path} build`;
