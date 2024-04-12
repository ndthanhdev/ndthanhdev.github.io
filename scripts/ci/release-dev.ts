#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";
import { workDirs } from "~/utils/work-dir";
import { cleanBuild } from "~/utils/clean-build";

await cleanBuild();

cd(workDirs.path);

await $`dagger call build --dir . export --path ${workDirs.app.public.path}`;

await $`dagger call publish --dir . --token env:GH_TOKEN --mode dev`;
