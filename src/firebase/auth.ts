import {
    Auth,
    GoogleAuthProvider,
    signInAnonymously,
    signInWithPopup,
} from "firebase/auth";

export const signOut = (auth: Auth) =>
    auth.signOut().then(() => console.log("signed out"));

export const anonymousSignIn = async (auth: Auth) => {
    await signInAnonymously(auth);
};

export const googleSignIn = async (auth: Auth) => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);
};
