importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCG86sax9dL9xrIWalsVH2r14A-NK2q4Uw",
  authDomain: "ancient-hanja.firebaseapp.com",
  databaseURL: "https://ancient-hanja-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ancient-hanja",
  storageBucket: "ancient-hanja.appspot.com",
  messagingSenderId: "163743091418",
  appId: "1:163743091418:web:d4c491fd6826bc883a73e3",
  measurementId: "G-XTNPLDVM69",
});

let topics = [];

const broadcast = new BroadcastChannel("fcm-sw");

broadcast.onmessage = (event) => {
  if (event.data) {
    const { type, topic } = event.data;

    if (event.data.type === "SUBSCRIBE") {
      topics.push(event.data.topic);
      topics = [...new Set(topics)];
    }

    if (event.data.type === "UNSUBSCRIBE") {
      topics.splice(topics.indexOf(topic), 1);
    }

    console.log("current topic:", topics);
  }
};

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  if (!payload.data || !payload.notification) return;

  const {
    data: { topic },
    notification,
  } = payload;

  console.log({
    topics: topics,
    data: payload.data,
    topic: topic,
    isSub: topics.includes(topic),
  });

  (async () => {
    if (topics.includes(topic)) {
      await self.registration.showNotification(notification.title, {
        body: notification.body,
        icon: "/firebase-logo.png",
        data: "SHOW",
      });
    } else {
      console.warn("이건 토픽에 없는걸", topics, payload);
    }

    self.registration.getNotifications().then((notifications) => {
      console.log(notifications);
      notifications.forEach((noti) => {
        if (noti.data !== "SHOW") {
          console.log("closing notification", noti);
          noti.close();
        }
      });
    });
  })();
});
