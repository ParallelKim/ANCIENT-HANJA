import { useEffect, useRef } from "react";
import { useAtom, useAtomValue } from "jotai";

import { hashIdAtom, userInfoAtom } from "../stores/atoms";
import { child, get, ref, update } from "firebase/database";

export const SessionManager = () => {
    const detectedSessionList = useRef<{
        [uid: string]: { userInfo: unknown; method: string[] };
    }>({});
    const [hashId, setHashId] = useAtom(hashIdAtom);
    const isLoggedIn = Boolean(useAtomValue(userInfoAtom));

    const initSession = () => {
        // 중요도: 1.구글, 2.로컬 스토리지, 3.url hash. 하나 이상의 값이 다르다면 덮어씌울지 합칠지 정하도록
        if (isLoggedIn) return;
        // if (authStatus === "loading") return;

        // const sessions = detectedSessionList.current;

        // const getUserInfo = (userId: string) =>
        //     get(child(ref(database), `users/${userId}`))
        //         .then((snapshot) => {
        //             if (snapshot.exists()) {
        //                 return snapshot.val();
        //             } else {
        //                 console.log("유저정보 없음!");
        //                 return null;
        //             }
        //         })
        //         .catch((error) => {
        //             console.error(error);
        //             return null;
        //         });

        // const setUserInfo = (uid: string, userInfo: unknown) => {
        //     update(ref(database), {
        //         ["users/" + uid]: userInfo,
        //     });
        // };
        // // TODO: Modularize for rdb file

        // if (signInCheckResult?.user) {
        //     console.log(authStatus, signInCheckResult);

        //     const { uid } = signInCheckResult.user;
        //     getUserInfo(uid).then((userInfo) => {
        //         if (userInfo) {
        //             if (!signInCheckResult.user.isAnonymous) {
        //                 // 1. google logion
        //                 sessions[uid] = {
        //                     userInfo: userInfo,
        //                     method: ["Google"],
        //                 };
        //             } else {
        //                 // 2. anonymous id might change every session(depend on setting)
        //                 sessions[uid] = sessions[uid] ?? {
        //                     userInfo: userInfo,
        //                     method: [],
        //                 };
        //                 sessions[uid].method.push("Anonymous");
        //             }
        //         } else {
        //             // 5.없어서 돌고돌아 여기로 왔으니까 회원가입 시키기
        //             setUserInfo(uid, { name: "회원" });
        //         }
        //     });
        // }

        // // 3. check local storage has uid and it has progress on fb
        // const localUid = localStorage.getItem("uid");
        // if (localUid) {
        //     getUserInfo(localUid).then((userInfo) => {
        //         if (userInfo) {
        //             sessions[localUid] = sessions[localUid] ?? {
        //                 userInfo: userInfo,
        //                 method: [],
        //             };
        //             sessions[localUid].method.push("Local");
        //         }
        //     });
        // }

        // if (hashId) {
        //     getUserInfo(hashId).then((userInfo) => {
        //         if (userInfo) {
        //             sessions[hashId] = sessions[hashId] ?? {
        //                 userInfo: userInfo,
        //                 method: [],
        //             };
        //             sessions[hashId].method.push("Hash");
        //         }
        //     });
        // }

        // // 비동기 문제로 user Info가 받아오기 전에 회원 가입 프로세스 실행 중
        // const sessionIds = Object.keys(sessions);
        // if (sessionIds.length > 0) {
        //     // pop up modal for select sessions
        // }
        // // 구글 로그인 할지 물어보기 -> 공부하는 페이지에서 ㄱㄱ 유저 정보가 필요한 시점에 호출
        // // redirect("/signUp");

        // return () => {
        //     detectedSessionList.current = {};
        // };
    };

    useEffect(initSession, [hashId, isLoggedIn]);

    return null;
};
