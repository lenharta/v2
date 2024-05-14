import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Section } from '@/app/layouts';

export interface SettingsPanelProps {}

export type SettingsPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SettingsPanelProps;
}>;

export const SettingsPanel = factory<SettingsPanelFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <Section {...forwardedProps} ref={ref} className={cx('Settings-panel')}>
      {children}
    </Section>
  );
});

SettingsPanel.displayName = '@v2/Settings.Panel';
