import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { IconButton } from "@mui/material";
import { useAtom } from "jotai";
import { isNotiOnAtom } from "../../../stores/atoms";
import { requestPermission } from "../../../firebase/message";

export const ToggleNotiButton = () => {
  const [isNotificationOn, setIsNotificationOn] = useAtom(isNotiOnAtom);

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
