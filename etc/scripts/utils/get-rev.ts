import "zx/globals";

export async function getRev(): Promise<string> {
	const result = await $`git rev-parse HEAD`;
	return result.toString().trim();
}