#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";

import { cleanBuild } from "~/utils/clean-build";
import { workDirs } from "~/utils/work-dir";

await cleanBuild();

cd(workDirs.path);

await $`dagger call \
--dir . \
--mode ${$.env.MODE ?? "dev"} \
build \
export --path ${workDirs.app.public.path} \
`;

await $`dagger call \
--dir . \
--mode ${$.env.MODE ?? "dev"} \
--gh-token env:GH_TOKEN \
publish \
`;
