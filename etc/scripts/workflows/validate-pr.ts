#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";

import { cleanBuild } from "../utils/clean-build";
import { workDirs } from "../utils/work-dirs";

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
	"with-moon-task",
	"--task",
	"scripts:test",
	"with-moon-task",
	"--task",
	"scripts:build",
	"stdout",
]}`;
