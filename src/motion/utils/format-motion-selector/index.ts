export function motionSelector(cx: string, mod: string) {
  return ['.', [cx, mod].join('-')].join('');
}
