import { cx } from "@emotion/css";
import React from "react";

import { iconShieldStyles } from "../shared-styles";
import { ShieldsIO, ShieldsStyle } from "../shields-io";

type SkillBadge = {
	skillLogo?: string;
	skill: string;
} & React.ComponentPropsWithoutRef<"img">;

const SkillBadge = React.forwardRef<HTMLElement, SkillBadge>((props, ref) => {
	const {
		skillLogo: skillLogoProp,
		skill,
		className: classNameProp,
		...otherProps
	} = props;

	const skillLogo = skillLogoProp ?? skill;

	return (
		<ShieldsIO
			{...otherProps}
			css={iconShieldStyles.wrapper}
			ref={ref}
			className={cx("ndt-skill-badge", classNameProp)}
			logo={skillLogo}
			leftText=""
			leftBg="white"
			rightText={skill}
			shieldStyle={ShieldsStyle.ForTheBadge}
			alt={skill}
		/>
	);
});

export { SkillBadge };
