#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";
import { cleanBuild } from "@n8v/scripts/utils/clean-build";
import { workDirs } from "@n8v/scripts/utils/work-dirs";

$.verbose = true;

await cleanBuild();

cd(workDirs.etc.workflowRuntime.path);

await $`${[
	"dagger",
	"call",
	"--dir",
	workDirs.path,
	"build-env",
	"with-env-variable",
	"--name",
	"MODE",
	"--value",
	"dev",
	"with-action",
	"--action",
	"test",
	"with-action",
	"--action",
	"build",
	"stdout",
]}`;
