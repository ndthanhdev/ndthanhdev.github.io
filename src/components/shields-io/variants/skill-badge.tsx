import React from "react";
import { ShieldsIO, ShieldsStyle } from "../shields-io";
import { useThemeUI } from "theme-ui";
import { css as transformStyleObject } from "@theme-ui/css";
import { css as createClassName, cx } from "@emotion/css";

type SkillBadge = {
	skillLogo?: string;
	skill: string;
} & React.ComponentPropsWithoutRef<"img">;

let SkillBadge = React.forwardRef<HTMLElement, SkillBadge>((props, ref) => {
	let { skillLogo, skill, className: classNameProp, ...otherProps } = props;

	skillLogo = skillLogo ?? skill;

	let theme = useThemeUI();

	let classNames = React.useMemo(() => {
		const styles = transformStyleObject({
			borderColor: (theme) => theme.colors?.text,
			borderRadius: "4px",
			borderWidth: "0.0125rem",
			borderStyle: "solid",
		})(theme as any); // FIXME: theme-ui typings are wrong

		return createClassName(styles);
	}, [theme]);

	return (
		<ShieldsIO
			{...otherProps}
			ref={ref}
			className={cx("ndt-skill-badge", classNames, classNameProp)}
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
