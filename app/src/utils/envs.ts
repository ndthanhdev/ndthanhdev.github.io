const buildNumber = process.env.GATSBY_BUILD_NUMBER || "local";
const rev = process.env.GATSBY_REV || "local";

export const envs = { buildNumber, rev };
