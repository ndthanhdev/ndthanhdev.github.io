import { DateTime } from "luxon";

export const getBuildNumber = () => {
	const now = DateTime.now().toUTC();
	const startOfDate = now.startOf("day");

	const halfMinuteSinceStartOfDay = String(
		Math.floor(now.diff(startOfDate, "minutes").minutes / 2),
	).padStart(3, "0");

	const yyMMdd = now.toFormat("yyMMdd");

	return `${yyMMdd}${halfMinuteSinceStartOfDay}`;
};
