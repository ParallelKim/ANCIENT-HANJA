import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { getMsgToken } from "../firebase/message";
import { isNotiOnAtom } from "../stores/atoms";

export const MessageManager = () => {
  const setIsNotificationOn = useSetAtom(isNotiOnAtom);

  useEffect(() => {
    getMsgToken().then((res) => {
      setIsNotificationOn(res);
    });
  }, [setIsNotificationOn]);

  return null;
};
