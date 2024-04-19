export function motionSelector(cx: string, mods?: string) {
  const data = mods ? [cx, mods].join('-') : cx;
  return ['.', data].join('');
}
