import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { getMsgToken } from "../firebase/message";
import { isNotiOnAtom, msgTokenAtom } from "../stores/atoms";

export const MessageManager = () => {
  const isNotificationOn = useAtomValue(isNotiOnAtom);
  const setMsgToken = useSetAtom(msgTokenAtom);

  useEffect(() => {
    if (isNotificationOn) {
      getMsgToken().then((res) => {
        if (res) setMsgToken(res);
      });
    }
  }, [isNotificationOn, setMsgToken]);

  return null;
};
