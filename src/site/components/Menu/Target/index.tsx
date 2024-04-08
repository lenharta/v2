import gsap from 'gsap';
import * as React from 'react';
import { Action } from '@/core';
import { factory } from '@/core/factory';
import { Factory, Store } from '@/types';
import { MenuTargetGrid } from './Grid';
import { motionSelector } from '@/motion';
import { useMotionHandler } from '@/motion/use-motion-handler';

export interface MenuTargetProps {
  state: Store.AppStateProps['state'];
  dispatch: Store.AppStateProps['dispatch'];
}

export type MenuTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof Action;
  props: MenuTargetProps;
  omits: 'className' | 'children';
}>;

const css = {
  row: 'menu-target-grid-row',
  cell: 'menu-target-grid-cell',
  grid: 'menu-target-grid-grid',
};

const commonMotion: gsap.TweenVars = {
  ease: 'power3.in',
  duration: 0.1,
};

export const MenuTarget = factory<MenuTargetFactory>((props, ref) => {
  const { dispatch, state, ...otherProps } = props;
  const [open, setOpen] = React.useState<boolean>();

  const { scope, handler: onClick } = useMotionHandler(ref, (open: boolean | undefined) => {
    const config: gsap.TweenVars = { ...commonMotion, rotate: open ? '45deg' : 0 };

    const translate = (input: string, open: boolean | undefined) => {
      return open ? input : 'translate(0%, 0%)';
    };

    gsap.to(motionSelector(css.cell, '-r-x', '-c-y'), {
      ...config,
      transform: translate('translate(-100%, 100%)', open),
    });
    gsap.to(motionSelector(css.cell, '-r-y', '-c-x'), {
      ...config,
      transform: translate('translate(100%, 100%)', open),
    });
    gsap.to(motionSelector(css.cell, '-r-y', '-c-z'), {
      ...config,
      transform: translate('translate(-100%, -100%)', open),
    });
    gsap.to(motionSelector(css.cell, '-r-z', '-c-y'), {
      ...config,
      transform: translate('translate(100%, -100%)', open),
    });
  });

  return (
    <Action
      {...otherProps}
      ref={scope}
      className="menu-target"
      onClick={(event) => {
        event.stopPropagation();
        onClick(!open ? true : undefined);
        setOpen(!open ? true : undefined);
        dispatch({ isMenuOpen: !open ? true : undefined });
      }}
    >
      <MenuTargetGrid css={css} state={state} dispatch={dispatch} />
    </Action>
  );
});

MenuTarget.displayName = '@v2/site/Menu.Target';
