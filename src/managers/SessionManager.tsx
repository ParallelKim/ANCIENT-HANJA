import { useEffect, useRef } from "react";
import { useAtom, useAtomValue } from "jotai";

import { hashIdAtom, userInfoAtom } from "../stores/atoms";
import { useAuth, useDatabase, useSigninCheck } from "reactfire";
import { Auth, signInAnonymously } from "firebase/auth";
import { child, get, ref, update } from "firebase/database";

export const SessionManager = () => {
    const auth = useAuth();
    const { status: authStatus, data: signInCheckResult } = useSigninCheck();

    const database = useDatabase();

    const detectedSessionList = useRef<{ [uid: string]: string[] }>({});
    const [hashId, setHashId] = useAtom(hashIdAtom);
    const isLoggedIn = Boolean(useAtomValue(userInfoAtom));

    const initSession = () => {
        // 중요도: 1.구글, 2.로컬 스토리지, 3.url hash. 하나 이상의 값이 다르다면 덮어씌울지 합칠지 정하도록
        if (isLoggedIn) return;
        if (authStatus === "loading") return;

        const sessions = detectedSessionList.current;

        const getUserInfo = (userId: string) =>
            get(child(ref(database), `users/${userId}`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val());
                        return snapshot.val();
                    } else {
                        console.log("유저정보 없음!");
                        return null;
                    }
                })
                .catch((error) => {
                    console.error(error);
                    return null;
                });

        const setUserInfo = (uid: string, userInfo: unknown) => {
            update(ref(database), {
                ["users/" + uid]: userInfo,
            });
        };
        // TODO: Modularize with rdb file

        if (signInCheckResult?.user) {
            console.log(authStatus, signInCheckResult);

            const { uid } = signInCheckResult.user;
            getUserInfo(uid).then((userInfo) => {
                if (userInfo) {
                    if (!signInCheckResult.user.isAnonymous) {
                        // 1. google logion
                        sessions[uid] = ["Google"];
                    } else {
                        // 2. anonymous id might change every session(depend on setting)
                        sessions[uid] = sessions[uid] ?? [];
                        sessions[uid].push("Anonymous");
                    }
                } else {
                    // 5.없어서 돌고돌아 여기로 왔으니까 회원가입 시키기
                    setUserInfo(uid, { name: "회원" });
                }
            });
        }

        // 3. check local storage has uid and it has progress on fb
        const localUid = localStorage.getItem("uid");
        if (localUid) {
            getUserInfo(localUid).then((userInfo) => {
                if (userInfo) {
                    sessions[localUid] = sessions[localUid] ?? [];
                    sessions[localUid].push("Local");
                }
            });
        }

        if (hashId) {
            getUserInfo(hashId).then((userInfo) => {
                if (userInfo) {
                    sessions[hashId] = sessions[hashId] ?? [];
                    sessions[hashId].push("Hash");
                }
            });
        }

        const sessionIds = Object.keys(sessions);
        if (sessionIds.length > 0) {
            // pop up modal for select sessions
        } else {
            // create new session
            console.log("create new session");
            // 구글 로그인 할지 물어보기
            signInAnonymously(auth as Auth);
        }

        return () => {
            detectedSessionList.current = {};
        };
    };

    useEffect(initSession, [
        auth,
        authStatus,
        database,
        hashId,
        isLoggedIn,
        signInCheckResult,
    ]);

    return null;
};
