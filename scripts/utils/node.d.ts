declare module "process" {
	global {
		namespace NodeJS {
			interface ProcessEnv {
				MODE?: "dev" | "prod";
				GH_TOKEN?: string;
			}
		}
	}
}
