export const shuffleArray = <T>(array: T[]): void => {
    for (let i = array.length - 1; i > 0; i--) {
        // 무작위로 index 값 생성 (0 이상 i 미만)
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
