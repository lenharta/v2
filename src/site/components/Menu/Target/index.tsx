// import gsap from 'gsap';
import { Action } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { motionClass } from '@/motion';
import { useAppDispatch, useAppState } from '@/store';

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

export const MenuTarget = factory<MenuTargetFactory>((props, ref) => {
  const { ...otherProps } = props;
  const dispatch = useAppDispatch();
  const state = useAppState();

  return (
    <Action
      {...otherProps}
      ref={ref}
      className="menu-target"
      onClick={(event) => {
        event.stopPropagation();
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
