import { useEventCallback } from "@mui/material";
import { Notification } from "@n8v/app/components/fragments/notification";
import { toast } from "react-toastify";

export const useNotifyCopied = () => {
	return useEventCallback(() => {
		toast(<Notification />, { data: "Copied to clipboard", type: "success" });
	});
};
