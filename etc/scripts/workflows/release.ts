#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";
import { cleanBuild } from "@n8v/scripts/utils/clean-build";
import { workDirs } from "@n8v/scripts/utils/work-dir";

$.verbose = true;

await cleanBuild();

cd(workDirs.etc.workflowRuntime.path);

await $`${[
	"dagger",
	"call",
	"--dir",
	workDirs.path,
	"--mode",
	$.env.MODE ?? "dev",
	"--gh-token",
	"env:GH_TOKEN",
	"with-action",
	"--action",
	"build",
	"with-action",
	"--action",
	"publish",
	"container",
	"directory",
	"--path",
	"/workspace/apps/app/public",
	"export",
	"--path",
	workDirs.apps.app.public.path,
]}`;
