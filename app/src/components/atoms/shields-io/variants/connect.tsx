import { cx } from "@emotion/css";
import Link from "@mui/material/Link";
import React from "react";

import { iconShieldStyles } from "../shared-styles";
import { ShieldsIO, ShieldsStyle } from "../shields-io";

type Connect = {
	connect: string;
	connectLogo?: string;
	connectColor?: string;
	url?: string;
} & React.ComponentPropsWithoutRef<"img">;

const Connect = React.forwardRef<HTMLAnchorElement, Connect>((props, ref) => {
	const {
		connect,
		connectLogo: connectLogoProp,
		connectColor,
		className: classNameProp,
		url,
		...otherProps
	} = props;

	const connectLogo = connectLogoProp ?? connect;

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
