import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

const styles = {};

export const GlobalStyles = () => (
	<React.Fragment>
		<CssBaseline />
		<Global styles={styles} />
	</React.Fragment>
);
