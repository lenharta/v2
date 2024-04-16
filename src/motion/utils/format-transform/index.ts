import { translate } from '../format-translate';

export function transform(x: number, y: number, mounted?: boolean): gsap.TweenVars {
  const position = mounted ? { x, y } : { x: 0, y: 0 };
  return { transform: translate(position.x, position.y) };
}
