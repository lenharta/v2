import gsap from 'gsap';
import { Factory } from '@/types';
import { useGSAP } from '@gsap/react';
import { factory } from '@/core/factory';
import { objectKeys } from '@/utils';
import { useAppState } from '@/store';
import { useMotionTimeline } from '@/motion';

export interface MenuLogoProps {}

export type MenuLogoFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuLogoProps;
  omits: 'className' | 'children';
}>;

export const MenuLogo = factory<MenuLogoFactory>((props, ref) => {
  const { ...otherProps } = props;

  const state = useAppState();
  const { scope, timeline } = useMotionTimeline<HTMLDivElement>(ref);

  const common: gsap.TweenVars = {
    ease: 'sine.inOut',
    opacity: 0,
    duration: 0.1,
  };

  const itemData = {
    'letter-a': { span: 'A', color: 'var(--c-accent)' },
    'letter-b': { span: 'n', color: 'var(--c-accent)' },
    'letter-c': { span: 'd', color: 'var(--c-accent)' },
    'letter-d': { span: 'r', color: 'var(--c-accent)' },
    'letter-e': { span: 'e', color: 'var(--c-accent)' },
    'letter-f': { span: 'w', color: 'var(--c-accent)' },
    'letter-g': { span: ' ', color: 'var(--c-accent)' },
    'letter-h': { span: 'L', color: 'var(--c-accent)' },
    'letter-i': { span: 'e', color: 'var(--c-accent)' },
    'letter-j': { span: 'n', color: 'var(--c-accent)' },
    'letter-k': { span: 'h', color: 'var(--c-accent)' },
    'letter-l': { span: 'a', color: 'var(--c-accent)' },
    'letter-m': { span: 'r', color: 'var(--c-accent)' },
    'letter-n': { span: 't', color: 'var(--c-accent)' },
  };

  useGSAP(
    () => {
      timeline.current = gsap
        .timeline()
        .from('.letter-a', { ...common, x: -10, y: -10 })
        .from('.letter-b', { ...common, x: -10, y: -10 })
        .from('.letter-c', { ...common, x: -10, y: -10 })
        .from('.letter-d', { ...common, x: -10, y: -10 })
        .from('.letter-e', { ...common, x: -10, y: -10 })
        .from('.letter-f', { ...common, x: -10, y: -10 })
        .from('.letter-g', { ...common, x: -10, y: -10 })
        .from('.letter-h', { ...common, x: -10, y: -10 })
        .from('.letter-i', { ...common, x: -10, y: -10 })
        .from('.letter-j', { ...common, x: -10, y: -10 })
        .from('.letter-k', { ...common, x: -10, y: -10 })
        .from('.letter-l', { ...common, x: -10, y: -10 })
        .from('.letter-m', { ...common, x: -10, y: -10 })
        .from('.letter-n', { ...common, x: -10, y: -10 });
    },
    { scope, dependencies: [state.isMenuOpen] }
  );

  return (
    <div {...otherProps} ref={scope} className="menu-logo">
      {objectKeys(itemData).map((key) => (
        <span
          key={key}
          className={key}
          children={itemData[key].span}
          style={{ color: itemData[key].color }}
        />
      ))}
    </div>
  );
});

MenuLogo.displayName = '@v2/site/Menu.Logo';
