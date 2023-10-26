import { useEffect, useRef } from "react";
import { useAtom } from "jotai";

import { sessionIdAtom } from "../stores/atoms";
import { useAuth, useSigninCheck } from "reactfire";

export const SessionManager = () => {
    const detectedSessionList = useRef<unknown[]>([]);
    const [sessionId, setSessionId] = useAtom(sessionIdAtom);

    const auth = useAuth();
    const { status, data: signInCheckResult } = useSigninCheck();

    const getUserInfo = (uid: string) => {
        const progress = {};
        console.log(uid, progress);
        return progress;
    };

    const initSession = () => {
        // 중요도: 1.구글, 2.로컬 스토리지, 3.url hash. 하나 이상의 값이 다르다면 덮어씌울지 합칠지 정하도록
        if (signInCheckResult.user) {
            const userInfo = getUserInfo(signInCheckResult.user.uid);

            if (userInfo) {
                if (!signInCheckResult.user.isAnonymous) {
                    // 1. It might google logion
                    detectedSessionList.current.push({
                        method: "GOOGLE",
                        user: userInfo,
                    });
                } else {
                    // 2. anonymous id might change every session(depend on setting)
                    detectedSessionList.current.push({
                        method: "Anonymous",
                        user: userInfo,
                    });
                }
            }
        }

        // 3. check local storage has uid and it has progress on fb
        const localUid = localStorage.getItem("uid");
        if (localUid) {
            const userInfo = getUserInfo(localUid);

            if (userInfo) {
                detectedSessionList.current.push({
                    method: "LOCAL",
                    user: userInfo,
                });
            }
        }

        if (sessionId) {
            const userInfo = getUserInfo(sessionId);

            if (userInfo) {
                detectedSessionList.current.push({
                    method: "HASH",
                    user: userInfo,
                });
            }
        }
    };

    useEffect(initSession);

    return null;
};
