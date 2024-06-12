import clsx from 'clsx';
import { factory } from '@/core';
import { Factory } from '@/types';

import { css } from './screen-constants';
import { ScreenProps } from './screen-types';

type ScreenRootFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ScreenProps;
}>;

const Screen = factory<ScreenRootFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <div {...forwardedProps} ref={ref} className={clsx(css.root, className)}>
      {children}
    </div>
  );
});

Screen.displayName = '@v2/Screen';
export { Screen };
