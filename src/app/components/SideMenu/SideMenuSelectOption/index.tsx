import { Action } from '@/core';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { SideMenuSelectOptionProps } from '../SideMenu.types';

type SideMenuSelectOptionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SideMenuSelectOptionProps;
}>;

const SideMenuSelectOption = createFactory<SideMenuSelectOptionFactory>((props, ref) => {
  const { ...forwardedProps } = props;

  return <Action ref={ref} className="v2-sidemenu-select-option" {...forwardedProps} />;
});

SideMenuSelectOption.displayName = '@v2/SideMenu.Select.Option';
export { SideMenuSelectOption };
