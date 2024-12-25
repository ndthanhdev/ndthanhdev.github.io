import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

const styles = {};

export const GlobalStyles = () => (
	<>
		<CssBaseline />
		<Global styles={styles} />
	</>
);
