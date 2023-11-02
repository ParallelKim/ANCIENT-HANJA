import { getMessaging, getToken } from "firebase/messaging";
import { app } from ".";

export const messaging = getMessaging(app);

export const requestPermission = () => {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      return true;
    }
    return false;
  });
};

export const getMsgToken = () => {
  getToken(messaging, {
    vapidKey: "BN3K5cEjhNy4Luzdo3qsG7qyN_-2fqVDKpbV__CCok5XP7lFV_N-qSPKKEET3FvoDJWp2ZQg-w6BqsQxE1P9Oq4",
  })
    .then((currentToken) => {
      if (!currentToken) {
        console.log("No registration token available. Request permission to generate one.");
        const permission = requestPermission();

        return permission;
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // ...
      throw new Error("푸시 알림 권한 설정 중 오류가 발생했습니다.");
    });
};
