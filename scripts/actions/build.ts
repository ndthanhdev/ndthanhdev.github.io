#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";

import { cleanBuild } from "~/utils/clean-build";
import { getBuildNumber } from "~/utils/get-build-number";
import { getRev } from "~/utils/get-rev";
import { workDirs } from "~/utils/work-dir";

await cleanBuild();

cd(workDirs.app.path);

$.env.GATSBY_BUILD_NUMBER = getBuildNumber();
$.env.GATSBY_REV = await getRev();
$.env.GATSBY_MODE = $.env.MODE;

await $`yarn build`;
