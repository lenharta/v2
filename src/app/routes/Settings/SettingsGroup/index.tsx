import { cx } from '@/app/utils';
import { Box } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface SettingsGroupProps {}

export type SettingsGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SettingsGroupProps;
}>;

export const SettingsGroup = factory<SettingsGroupFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={cx('settings-group')}>
      {children}
    </Box>
  );
});

SettingsGroup.displayName = '@v2/Settings.Group';
