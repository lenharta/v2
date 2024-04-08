export function motionSelector(cx: string, ...mods: string[]) {
  return [
    '.',
    cx,
    mods.reduce((prev, curr) => {
      return curr ? prev + curr : prev;
    }),
  ].join('');
}
