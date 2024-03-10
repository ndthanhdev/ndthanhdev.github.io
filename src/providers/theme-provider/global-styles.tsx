import * as React from "react";
import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

const styles = {};

export const GlobalStyles = () => (
	<>
		<CssBaseline />
		<Global styles={styles} />
	</>
);
