import { factory } from '@/core/factory';
import { motionClass } from '@/motion';
import { Factory, Store } from '@/types';

export interface MenuTargetGridProps {
  css: Record<'row' | 'cell' | 'grid', string>;
  state: Store.AppStateProps['state'];
  dispatch: Store.AppStateProps['dispatch'];
}

export type MenuTargetGridFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuTargetGridProps;
  omits: 'children';
}>;

export const MenuTargetGrid = factory<MenuTargetGridFactory>((props, ref) => {
  const { state, dispatch, css, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="menu-target-grid">
      <div className={motionClass(css.row, '-r-x')}>
        <div className={motionClass(css.cell, '-r-x', '-c-x')} />
        <div className={motionClass(css.cell, '-r-x', '-c-y')} />
        <div className={motionClass(css.cell, '-r-x', '-c-z')} />
      </div>
      <div className={motionClass(css.row, '-r-y')}>
        <div className={motionClass(css.cell, '-r-y', '-c-x')} />
        <div className={motionClass(css.cell, '-r-y', '-c-y')} />
        <div className={motionClass(css.cell, '-r-y', '-c-z')} />
      </div>
      <div className={motionClass(css.row, '-r-z')}>
        <div className={motionClass(css.cell, '-r-z', '-c-x')} />
        <div className={motionClass(css.cell, '-r-z', '-c-y')} />
        <div className={motionClass(css.cell, '-r-z', '-c-z')} />
      </div>
    </div>
  );
});
