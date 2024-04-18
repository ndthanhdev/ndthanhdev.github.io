#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";

const Constants = {
	mode: $.env.MODE,
	token: $.env.GH_TOKEN,
	// Owner/repo
	devRepo: "dev-n8v/dev-n8v.github.io",
	prodRepo: "ndthanhdev/ndthanhdev.github.io",
};

export const getPublishRemote = () => {
	if (!Constants.mode) {
		throw new Error("MODE is required");
	}

	if (!Constants.token) {
		throw new Error("GH_TOKEN is required");
	}

	// https://git:${GITHUB_TOKEN}@github.com/ndthanhdev/ndthanhdev.github.io.git
	const remote = `https://oauth2:${Constants.token}@github.com/${Constants.mode === "prod" ? Constants.prodRepo : Constants.devRepo}.git`;

	return remote;
};
