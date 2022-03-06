import React from "react";
import { ShieldsIO, ShieldsStyle } from "../shields-io";
import { useThemeUI } from "theme-ui";
import { css as transformStyleObject } from "@theme-ui/css";
import { css as createClassName, cx } from "@emotion/css";

type SkillBadge = {
  logo: string;
  name: string;
  fluent: boolean;
} & ShieldsIO;

let SkillBadge = React.forwardRef<HTMLElement, SkillBadge>((props, ref) => {
  let { logo, name, className: classNameProp, fluent, ...otherProps } = props;

  name = name ?? logo;

  let theme = useThemeUI();

  let classNames = React.useMemo(() => {
    const styles = transformStyleObject({
      borderColor: (theme) => theme.colors?.text,
      borderRadius: "4px",
      borderWidth: "0.0625rem",
      borderStyle: "solid",
    })(theme);

    return createClassName(styles);
  }, [theme]);

  return (
    <ShieldsIO
      {...otherProps}
      ref={ref}
      className={cx("ndt-skill-badge", classNames, classNameProp)}
      logo={logo}
      label=""
      message={name}
      color="#f0f0f0"
      shieldStyle={fluent ? ShieldsStyle.ForTheBadge : ShieldsStyle.Flat}
      labelColor="white"
    />
  );
});

export { SkillBadge };
