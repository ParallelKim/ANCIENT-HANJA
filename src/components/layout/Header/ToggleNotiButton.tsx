import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { IconButton } from "@mui/material";
import { useAtom, useSetAtom } from "jotai";
import { isNotiOnAtom, msgTokenAtom } from "../../../stores/atoms";
import { getMsgToken, requestPermission } from "../../../firebase/message";

export const ToggleNotiButton = () => {
  const [isNotificationOn, setIsNotificationOn] = useAtom(isNotiOnAtom);
  const setMsgToken = useSetAtom(msgTokenAtom);

  return (
    <IconButton
      aria-label="notification-icon"
      color="inherit"
      onClick={() => {
        if (isNotificationOn) {
          setIsNotificationOn(false);
        } else {
          requestPermission().then((res) => {
            setIsNotificationOn(res);
          });
        }
      }}
    >
      {isNotificationOn ? <NotificationsActiveIcon fontSize="large" /> : <NotificationsIcon fontSize="large" />}
    </IconButton>
  );
};
