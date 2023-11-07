export const shuffleArray = <T>(array: T[]): T[] => {
  const temp = [...array];
  for (let i = temp.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [temp[i], temp[j]] = [temp[j], temp[i]];
  }

  return temp;
};

export const scheduler = (targetDate: string, callback: () => void) => {
  const year = Number(targetDate.substring(0, 4));
  const month = Number(targetDate.substring(4, 6));
  const day = Number(targetDate.substring(6, 8));
  const time = Number(targetDate.substring(8, 10));
  const minute = Number(targetDate.substring(10, 12));
  const second = Number(targetDate.substring(12, 14));

  const oprDate = new Date(year, month - 1, day, time, minute, second);
  const nowDate = new Date();

  const timer = oprDate.getTime() - nowDate.getTime();
  if (timer >= 0) {
    setTimeout(callback, timer);
  } else {
    callback();
  }
};
