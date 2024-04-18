import React from "react";

type ShieldsIO<T extends React.ElementType = "img"> = {
	logo?: string;
	logoColor?: string;
	logoWidth?: number;

	leftText?: string;
	leftBg?: string;

	rightText?: string;
	rightBg?: string;

	shieldStyle?: ShieldsStyle;

	Comp?: React.ElementType;
} & React.ComponentPropsWithoutRef<T>;

enum ShieldsStyle {
	Plastic = "plastic",
	Flat = "flat",
	FlatSquare = "flat-square",
	ForTheBadge = "for-the-badge",
	Social = "social",
}

const ShieldsIO = React.forwardRef<HTMLElement, ShieldsIO>((props, ref) => {
	const {
			logo,
			logoColor,
			logoWidth,

			leftText = "",
			leftBg,

			rightText,

			/*
			 * This is for by pass the case that leftText and rightText are both undefined
			 * shieldIO will return error if using query type
			 * if using path type one of 3 must be defined
			 * so we use color because using any character will affect the width of the shield
			 */
			rightBg = "#f0f0f0",

			shieldStyle = ShieldsStyle.Flat,

			Comp = "img",

			...otherProps
		} = props,
		src = React.useMemo(() => {
			let sUrl = "https://img.shields.io/badge/";

			sUrl += leftText ? `${leftText}-` : "-";
			sUrl += rightText ? `${rightText}-` : "-";
			sUrl += encodeURIComponent(rightBg);

			/*
			 * FIXME: support other extensions1
			 * sUrl += ".svg";
			 */

			const url = new URL(sUrl);

			logo && url.searchParams.append("logo", logo);
			logoColor && url.searchParams.append("logoColor", logoColor);
			logoWidth && url.searchParams.append("logoWidth", logoWidth.toString());

			// Url.searchParams.set("label", leftText);
			leftBg && url.searchParams.append("labelColor", leftBg);

			// Url.searchParams.append("color", rightBg);

			// RightText && url.searchParams.set("message", rightText);

			url.searchParams.append("style", shieldStyle);

			return url.toString();
		}, [logo]);

	return <Comp {...otherProps} ref={ref} src={src} />;
});

export { ShieldsIO, ShieldsStyle };
