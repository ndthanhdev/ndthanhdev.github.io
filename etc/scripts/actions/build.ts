#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";
import { cleanBuild } from "@n8v/scripts/utils/clean-build";
import { getBuildNumber } from "@n8v/scripts/utils/get-build-number";
import { getRev } from "@n8v/scripts/utils/get-rev";
import { workDirs } from "@n8v/scripts/utils/work-dir";

await cleanBuild();

cd(workDirs.apps.app.path);

$.env.GATSBY_BUILD_NUMBER = getBuildNumber();
$.env.GATSBY_REV = await getRev();
$.env.GATSBY_MODE = $.env.MODE;

await $`yarn build`;
