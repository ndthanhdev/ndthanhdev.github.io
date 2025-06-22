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
	"build-env",
	"with-env-variable",
	"--name",
	"MODE",
	"--value",
	$.env.MODE ?? "dev",
	"with-secret-variable",
	"--name",
	"Gh_TOKEN",
	"--secret",
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
