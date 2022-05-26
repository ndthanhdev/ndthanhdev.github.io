import React from "react";
import { ShieldsIO, ShieldsStyle } from "../shields-io";
import { useThemeUI } from "theme-ui";
import { css as transformStyleObject } from "@theme-ui/css";
import { css as createClassName, cx } from "@emotion/css";

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
		<a ref={ref} href={url ?? "#"} target={url ? "_blank" : "_self"}>
			<ShieldsIO
				{...otherProps}
				className={cx("ndt-skill-badge", classNames, classNameProp)}
				logo={connectLogo}
				logoColor={connectColor}
				leftBg="white"
				rightText={connect}
				shieldStyle={ShieldsStyle.ForTheBadge}
				alt={connect}
			/>
		</a>
	);
});

export { Connect };
