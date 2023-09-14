import React from "react";
import { Helmet as _Base } from "react-helmet";

const Base = _Base as any;

export type MyHelmetProps = React.PropsWithChildren<{}>;

export const MyHelmet = ({ children }: MyHelmetProps) => {
	return <Base>{children}</Base>;
};
