import { DateTime } from "luxon";

const Constants = {
	halfNumber: 2,
	minuteLength: 3,
};

export const getBuildNumber = () => {
	const now = DateTime.now().toUTC(),
		startOfDate = now.startOf("day"),
		halfMinuteSinceStartOfDay = String(
			Math.floor(
				now.diff(startOfDate, "minutes").minutes / Constants.halfNumber,
			),
		).padStart(Constants.minuteLength, "0"),
		yyMMdd = now.toFormat("yyMMdd");

	return `${yyMMdd}${halfMinuteSinceStartOfDay}`;
};
