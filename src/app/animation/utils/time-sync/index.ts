let now: number | undefined;

export const clearTime = () => {
  now = undefined;
};

export const time = {
  now: (): number => {
    if (now === undefined) {
      time.set(performance.now());
    }
    return now!;
  },
  set: (newTime: number) => {
    now = newTime;
  },
};
