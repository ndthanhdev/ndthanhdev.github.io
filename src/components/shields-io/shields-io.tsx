import React from "react";

type ShieldsIO = {
  logo?: string;
  logoColor?: string;
  logoWidth?: number;

  label?: string;
  labelColor?: string;

  color?: string;

  message?: string;
  shieldStyle?: ShieldsStyle;

  Comp?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>;

enum ShieldsStyle {
  Plastic = "plastic",
  Flat = "flat",
  FlatSquare = "flat-square",
  ForTheBadge = "for-the-badge",
  Social = "social",
}

let ShieldsIO = React.forwardRef<HTMLElement, ShieldsIO>((props, ref) => {
  let {
    logo,
    logoColor,
    logoWidth,

    label = "",
    labelColor,

    color = "",

    message = "",
    shieldStyle = ShieldsStyle.Flat,
    Comp = "img",
    ...otherProps
  } = props;

  let src = React.useMemo(() => {
    let url = new URL(`https://img.shields.io/static/v1.svg`);

    logo && url.searchParams.append("logo", logo);
    logoColor && url.searchParams.append("logoColor", logoColor);
    logoWidth && url.searchParams.append("logoWidth", logoWidth.toString());

    url.searchParams.set("label", label);
    labelColor && url.searchParams.append("labelColor", labelColor);

    color && url.searchParams.append("color", color);

    message && url.searchParams.set("message", message);

    shieldStyle && url.searchParams.append("style", shieldStyle);

    return url.toString();
  }, [logo]);

  return <Comp {...otherProps} ref={ref} src={src} />;
});

export { ShieldsIO, ShieldsStyle };
