import React from "react";
import { ShieldsIO, ShieldsStyle } from "../shields-io";
import { cx } from "@emotion/css";
import { iconShieldStyles } from "../shared-styles";

type SkillBadge = {
	skillLogo?: string;
	skill: string;
} & React.ComponentPropsWithoutRef<"img">;

let SkillBadge = React.forwardRef<HTMLElement, SkillBadge>((props, ref) => {
	let { skillLogo, skill, className: classNameProp, ...otherProps } = props;

	skillLogo = skillLogo ?? skill;

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
