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
	$.env.MODE ?? "dev",
	"with-secret-variable",
	"--name",
	"GH_TOKEN",
	"--secret",
	"env:GH_TOKEN",
	"with-moon-task",
	"--task",
	"scripts:build",
	"with-moon-task",
	"--task",
	"scripts:publish",
	"container",
	"directory",
	"--path",
	"/workspace/apps/app/public",
	"export",
	"--path",
	workDirs.apps.app.public.path,
]}`;
