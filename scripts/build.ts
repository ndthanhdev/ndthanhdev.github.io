#!../node_modules/.bin/bun
import "zx/globals";
import { workDirs } from "./utils/work-dir";

cd(workDirs.app.path);

await $`rm -rf ${workDirs.app.public.path}`;

await $`yarn build`;
