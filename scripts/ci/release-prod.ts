#!yarn tsx
import "zx/globals";
import { workDirs } from "~/utils/work-dir";
import { cleanBuild } from "~/utils/clean-build";

cd(workDirs.path);

await cleanBuild();

await $`dagger call build --dir . export --path ${workDirs.app.public.path}`;

await $`dagger call publish --dir . --token env:GH_TOKEN --mode prod`;
