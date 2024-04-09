import gsap from 'gsap';
import { Action } from '@/core';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { objectKeys } from '@/utils';
import { useAppDispatch, useAppState } from '@/store';
import { motionClass, motionSelector, useMotionHandler } from '@/motion';

export interface MenuTargetProps {}

export type MenuTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof Action;
  props: MenuTargetProps;
  omits: 'className' | 'children';
}>;

const css = {
  grid: 'menu-target-grid-grid',
  cell: 'menu-target-grid-cell',
  row: 'menu-target-grid-row',
};

const translate = (x: number, y: number, mounted?: boolean) => {
  const pos = mounted ? { x, y } : { x: 0, y: 0 };
  return { transform: `translate(${pos.x}%, ${pos.y}%)` };
};

export const MenuTarget = factory<MenuTargetFactory>((props, ref) => {
  const { ...otherProps } = props;
  const dispatch = useAppDispatch();
  const state = useAppState();

  const { scope, handler } = useMotionHandler(ref, (isOpen: boolean | undefined) => {
    const common: gsap.TweenVars = {
      duration: 0.15,
      rotate: isOpen ? '45deg' : '0deg',
      ease: isOpen ? 'bounce.Out' : 'bounce.In',
    };

    const cells = {
      '-r-x-c-x': { ...common, x: 0, y: 0 },
      '-r-x-c-y': { ...common, x: 100, y: 100 },
      '-r-x-c-z': { ...common, x: 0, y: 0 },
      '-r-y-c-x': { ...common, x: 100, y: -100 },
      '-r-y-c-y': { ...common, x: 0, y: 0 },
      '-r-y-c-z': { ...common, x: -100, y: 100 },
      '-r-z-c-x': { ...common, x: 0, y: 0 },
      '-r-z-c-y': { ...common, x: -100, y: -100 },
      '-r-z-c-z': { ...common, x: 0, y: 0 },
    };

    objectKeys(cells).forEach((cell) => {
      const { x, y, ...otherStyle } = cells[cell];
      gsap.to(motionSelector(css.cell, cell), {
        ...otherStyle,
        ...translate(x, y, isOpen),
      });
    });
  });

  return (
    <Action
      {...otherProps}
      ref={scope}
      className="menu-target"
      onClick={() => {
        handler(state.isMenuOpen ? undefined : true);
        dispatch({ isMenuOpen: !state.isMenuOpen ? true : undefined });
      }}
    >
      <div className="menu-target-grid">
        <div className={motionClass(css.row, '-r-x')}>
          <div className={motionClass(css.cell, '-r-x-c-x')} />
          <div className={motionClass(css.cell, '-r-x-c-y')} />
          <div className={motionClass(css.cell, '-r-x-c-z')} />
        </div>
        <div className={motionClass(css.row, '-r-y')}>
          <div className={motionClass(css.cell, '-r-y-c-x')} />
          <div className={motionClass(css.cell, '-r-y-c-y')} />
          <div className={motionClass(css.cell, '-r-y-c-z')} />
        </div>
        <div className={motionClass(css.row, '-r-z')}>
          <div className={motionClass(css.cell, '-r-z-c-x')} />
          <div className={motionClass(css.cell, '-r-z-c-y')} />
          <div className={motionClass(css.cell, '-r-z-c-z')} />
        </div>
      </div>
    </Action>
  );
});

MenuTarget.displayName = '@v2/site/Menu.Target';
