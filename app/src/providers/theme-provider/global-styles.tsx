import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";

const styles = {};

export const GlobalStyles = () => (
	<>
		<CssBaseline />
		<Global styles={styles} />
	</>
);
