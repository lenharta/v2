export function motionClass(cx: string, mod: string) {
  return [cx, [cx, mod].join('-')].join(' ');
}
