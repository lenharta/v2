export function motionClass(cx: string, ...mods: string[]) {
  return [
    cx,
    [
      cx,
      mods.reduce((prev, curr) => {
        return curr ? prev + curr : prev;
      }),
    ].join(''),
  ].join(' ');
}
