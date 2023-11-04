import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { subscribe, unsubscribe } from "../firebase/message";
import { isNotiOnAtom, msgTokenAtom } from "../stores/atoms";

export const MessageManager = () => {
  const isNotificationOn = useAtomValue(isNotiOnAtom);
  const setMsgToken = useSetAtom(msgTokenAtom);

  useEffect(() => {
    if (isNotificationOn) {
      ["event"].forEach((topic) => subscribe(topic)); // only user selected topic later
    } else {
      ["event"].forEach((topic) => unsubscribe(topic)); // only user selected topic later
    }
  }, [isNotificationOn, setMsgToken]);

  return null;
};
