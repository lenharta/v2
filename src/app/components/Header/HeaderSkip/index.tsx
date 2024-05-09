import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Text } from '@/core';
import { createEventCallback } from '@/utils';

export interface HeaderSkipProps {}

export type HeaderSkipFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: HeaderSkipProps;
}>;

export const HeaderSkip = factory<HeaderSkipFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;

  const onKeyDown = createEventCallback(forwardedProps.onKeyDown, (event) => {
    console.log(event.currentTarget);
  });
  return (
    <button
      {...forwardedProps}
      ref={ref}
      children={<Text>Skip To Main</Text>}
      className={cx('header-link-skip')}
      onKeyDown={onKeyDown}
    />
  );
});

HeaderSkip.displayName = '@v2/Header.Skip';
