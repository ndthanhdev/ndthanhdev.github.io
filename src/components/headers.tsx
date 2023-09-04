import React from "react";
import { Helmet as _Helmet } from "react-helmet";
import "modern-normalize/modern-normalize.css";

const Helmet = _Helmet as any;

export const Headers = () => (
	<Helmet>
		<meta
			name="google-site-verification"
			content="9OBwzAgCmUComfywGqCjEriNiYJ8qS4OYM9Fz4fan7s"
		/>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=Architects+Daughter"
		/>
	</Helmet>
);
