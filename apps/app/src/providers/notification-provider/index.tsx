import { ToastContainer } from "react-toastify";

import { styles } from "./styles";

export const NotificationProvider = () => {
	return (
		<ToastContainer
			closeButton={false}
			css={styles.root}
			customProgressBar
			icon={false}
			limit={3}
			position="bottom-center"
		/>
	);
};
