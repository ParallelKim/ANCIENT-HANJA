import { getMessaging, getToken } from "firebase/messaging";
import { app } from ".";

export const messaging = getMessaging(app);

export const requestPermission = () => {
  console.log("Requesting permission...");
  return Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const noti = new Notification("푸시 알림 권한 설정 완료", { body: "test" });
      return Boolean(noti);
    }
    return false;
  });
};

export const getMsgToken = () => {
  return getToken(messaging, {
    vapidKey: "BN3K5cEjhNy4Luzdo3qsG7qyN_-2fqVDKpbV__CCok5XP7lFV_N-qSPKKEET3FvoDJWp2ZQg-w6BqsQxE1P9Oq4",
  })
    .then((currentToken) => {
      if (!currentToken) {
        console.log("No registration token available. Request permission to generate one.");
        requestPermission().then((res) => {
          return res;
        });
      }
      return true;
    })
    .catch((err) => {
      console.error("An error occurred while retrieving token. ", err);
      // ...
      throw new Error("푸시 알림 권한 설정 중 오류가 발생했습니다.");
    });
};

export const disableMsg = () => {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    console.log(registrations);
    registrations.forEach((registration) => registration.unregister());
  });
};
