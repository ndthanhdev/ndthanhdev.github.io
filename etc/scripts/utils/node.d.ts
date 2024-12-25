declare module "process" {
	global {
		namespace NodeJS {
			// eslint-disable-next-line unicorn/prevent-abbreviations
			interface ProcessEnv {
				GATSBY_BUILD_NUMBER?: string;
				GATSBY_MODE?: "dev" | "prod" | "stg";
				GATSBY_REV?: string;
				GH_TOKEN?: string;
				MODE?: "dev" | "prod" | "stg";
			}
		}
	}
}
