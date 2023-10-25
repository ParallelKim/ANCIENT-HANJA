import { useEffect } from "react";
import uuid from "react-uuid";
import { useAtom } from "jotai";

import { sessionIdAtom } from "../stores/atoms";

export const SessionManager = () => {
    const [sessionId, setSessionId] = useAtom(sessionIdAtom);

    const initSession = () => {
        // 중요도: 1.구글, 2.로컬 스토리지, 3.url hash. 하나 이상의 값이 다르다면 덮어씌울지 합칠지 정하도록

        if (!sessionId) {
            setSessionId(uuid());
        }
    };

    useEffect(initSession, [sessionId, setSessionId]);

    return null;
};
