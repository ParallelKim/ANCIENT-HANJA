import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { ReactNode } from "react";
import { AuthProvider, FirebaseAppProvider, useFirebaseApp } from "reactfire";

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
    const app = useFirebaseApp();
    const auth = getAuth(app);

    return <AuthProvider sdk={auth}>{children}</AuthProvider>;
};
