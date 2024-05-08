import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Text } from '@/core';

export interface HeaderSkipProps {}

export type HeaderSkipFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: HeaderSkipProps;
}>;

export const HeaderSkip = factory<HeaderSkipFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <button {...forwardedProps} ref={ref} className={cx('header-skip')}>
      <span className={cx('header-skip-inner')}>
        <Text>Skip To Main</Text>
      </span>
    </button>
  );
});

HeaderSkip.displayName = '@v2/Header.Skip';
