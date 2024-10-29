import { getAnalytics } from "firebase/analytics";
import { app } from ".";

export const analytics = getAnalytics(app);
