declare module "process" {
	global {
		namespace NodeJS {
			interface ProcessEnv {
				MODE?: "dev" | "prod";
				GH_TOKEN?: string;
				GATSBY_BUILD_NUMBER?: string;
				GATSBY_REV?: string;
			}
		}
	}
}
