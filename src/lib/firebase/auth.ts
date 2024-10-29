import { GoogleAuthProvider, getAuth, signInAnonymously, signInWithPopup } from "firebase/auth";
import { app } from ".";

export const auth = getAuth(app);

export const signOut = () =>
  auth.signOut().then(() => {
    console.log("signed out");
  });

export const anonymousSignIn = async () => {
  await signInAnonymously(auth);
};

export const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();

  await signInWithPopup(auth, provider);
};
