import { useAtom } from "jotai";
import { useEffect } from "react";
import uuid from "react-uuid";

import { sessionIdAtom } from "../stores/atoms";

export const SessionManager = () => {
    const [sessionId, setSessionId] = useAtom(sessionIdAtom);

    const effect = () => {
        if (!sessionId) {
            setSessionId(uuid());
        }
    };

    useEffect(effect, [sessionId, setSessionId]);

    return null;
};
