#!yarn tsx
import "zx/globals";
import { workDirs } from "~/utils/work-dir";
import { cleanBuild } from "./utils/clean-build";

await cleanBuild();

cd(workDirs.app.path);

await $`yarn build`;
