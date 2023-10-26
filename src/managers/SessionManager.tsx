import { useEffect, useRef } from "react";
import { useAtom } from "jotai";

import { sessionIdAtom } from "../stores/atoms";
import { useAuth, useSigninCheck } from "reactfire";

export const SessionManager = () => {
    const detectedSessionList = useRef<{ [uid: string]: string[] }>({});
    const [sessionId, setSessionId] = useAtom(sessionIdAtom);

    const { status, data: signInCheckResult } = useSigninCheck();

    const getUserInfo = (uid: string) => {
        const progress = { id: uid };
        console.log(uid, progress);
        return progress;
    };

    const initSession = () => {
        // 중요도: 1.구글, 2.로컬 스토리지, 3.url hash. 하나 이상의 값이 다르다면 덮어씌울지 합칠지 정하도록
        if (status === "loading") return;

        if (signInCheckResult && signInCheckResult?.user) {
            const { uid } = signInCheckResult.user;
            const userInfo = getUserInfo(uid);

            if (userInfo) {
                if (!signInCheckResult.user.isAnonymous) {
                    // 1. google logion
                    detectedSessionList.current[uid] = ["Google"];
                } else {
                    // 2. anonymous id might change every session(depend on setting)
                    detectedSessionList.current[uid] =
                        detectedSessionList.current[uid] ?? [];
                    detectedSessionList.current[uid].push("Anonymous");
                }
            }
        }

        // 3. check local storage has uid and it has progress on fb
        const localUid = localStorage.getItem("uid");
        if (localUid) {
            const userInfo = getUserInfo(localUid);

            if (userInfo) {
                detectedSessionList.current[localUid] =
                    detectedSessionList.current[localUid] ?? [];
                detectedSessionList.current[localUid].push("Local");
            }
        }

        if (sessionId) {
            const userInfo = getUserInfo(sessionId);

            if (userInfo) {
                detectedSessionList.current[sessionId] =
                    detectedSessionList.current[sessionId] ?? [];
                detectedSessionList.current[sessionId].push("Hash");
            }
        }

        if (detectedSessionList.current.size) {
            // pop up modal for select sessions
        } else {
            // create new session
        }
    };

    useEffect(initSession, [sessionId, signInCheckResult, status]);

    return null;
};
