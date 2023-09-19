import React from "react";
import { ShieldsIO, ShieldsStyle } from "../shields-io";
import Link from "@mui/material/Link";
import { useTheme } from "@emotion/react";
// import { useThemeUI } from "theme-ui";
// import { css as transformStyleObject } from "@theme-ui/css";
import { cx } from "@emotion/css";
import { iconShieldStyles } from "../shared-styles";

type Connect = {
	connect: string;
	connectLogo?: string;
	connectColor?: string;
	url?: string;
} & React.ComponentPropsWithoutRef<"img">;

let Connect = React.forwardRef<HTMLAnchorElement, Connect>((props, ref) => {
	let {
		connect,
		connectLogo,
		connectColor,
		className: classNameProp,
		url,
		...otherProps
	} = props;

	connectLogo = connectLogo ?? connect;
	return (
		<Link
			css={iconShieldStyles.wrapper}
			ref={ref}
			href={url ?? "#"}
			target={url ? "_blank" : "_self"}
			underline="none"
		>
			<ShieldsIO
				{...otherProps}
				className={cx("ndt-skill-badge", classNameProp)}
				logo={connectLogo}
				logoColor={connectColor}
				leftBg="white"
				rightText={connect}
				shieldStyle={ShieldsStyle.ForTheBadge}
				alt={connect}
			/>
		</Link>
	);
});

export { Connect };
