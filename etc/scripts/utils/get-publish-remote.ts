#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";

const Constants = {
	// Owner/repo
	devRepo: "dev-n8v/dev-n8v.github.io",

	mode: $.env.MODE,

	prodRepo: "ndthanhdev/ndthanhdev.github.io",
	stg: "stg-n8v/stg-n8v.github.io",
	token: $.env.GH_TOKEN,
};

$.verbose = true;

export const getPublishRemote = () => {
	if (!Constants.mode) {
		throw new Error("MODE is required");
	}

	if (!Constants.token) {
		throw new Error("GH_TOKEN is required");
	}

	const repo =
		Constants.mode === "prod"
			? Constants.prodRepo
			: Constants.mode === "stg"
				? Constants.stg
				: Constants.devRepo;

	// https://git:${GITHUB_TOKEN}@github.com/ndthanhdev/ndthanhdev.github.io.git
	const remote = `https://oauth2:${Constants.token}@github.com/${repo}.git`;

	return remote;
};
