#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";
import { workDirs } from "~/utils/work-dir";
import { cleanBuild } from "./utils/clean-build";

cd(workDirs.app.path);

await cleanBuild();

await $`yarn build`;
