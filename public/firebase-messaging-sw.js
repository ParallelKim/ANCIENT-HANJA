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

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
