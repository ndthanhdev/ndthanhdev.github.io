import "zx/globals";

export async function getRev(): Promise<string> {
	return (await $`git rev-parse HEAD`).toString().trim();
}
