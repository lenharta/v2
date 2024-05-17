import { UnstyledButton, factory } from '@/core';
import { Factory } from '@/types';
import clsx from 'clsx';

interface SidebarSelectOptionProps {}

type SidebarSelectOptionFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: SidebarSelectOptionProps;
}>;

const SidebarSelectOption = factory<SidebarSelectOptionFactory>((props, ref) => {
  const { className, value, ...forwardedProps } = props;
  return (
    <UnstyledButton
      {...forwardedProps}
      className={clsx('v2-sidebar-select-option', className)}
      value={value}
      role="menuitem"
      ref={ref}
    />
  );
});

SidebarSelectOption.displayName = '@v2/SidebarSelect.Option';
export { SidebarSelectOption, type SidebarSelectOptionProps };
