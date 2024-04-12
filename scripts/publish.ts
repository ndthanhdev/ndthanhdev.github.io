#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";
import { workDirs } from "~/utils/work-dir";
import { getPublishRemote } from "~/utils/get-publish-remote";

const Constants = {
	user: {
		email: "dagger-bot@users.noreply.github.com",
		name: "Dagger Bot",
	},
};

cd(workDirs.app.path);

try {
	await $`git config --get user.name`;
} catch (error) {
	// git config --global user.email "dagger-bot@users.noreply.github.com"
	await $`git config --global user.email ${Constants.user.email}`;
	// git config --global user.name "Dagger Bot"
	await $`git config --global user.name ${Constants.user.name}`;
}

const remote = getPublishRemote();

$.env.GH_REMOTE = remote;

await $`yarn dlx gh-pages --dist ${workDirs.app.public.path} --repo $GH_REMOTE --dotfiles --message "chore: publish"`;
