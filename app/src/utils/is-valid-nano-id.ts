export const isValidNanoId = (id?: string | null): boolean => {
	if (!id) {
		return false;
	}

	const nanoIdRegex = /^[a-z0-9]{21}$/u;

	return nanoIdRegex.test(id);
};
