import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { Action, Floating } from '@/core';
import { SideMenuSelectTargetProps } from '../SideMenu.types';

type SideMenuSelectTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SideMenuSelectTargetProps;
}>;

const SideMenuSelectTarget = createFactory<SideMenuSelectTargetFactory>((props, ref) => {
  const { ...forwardedProps } = props;

  return (
    <Floating.Target>
      <Action ref={ref} className="v2-sidemenu-select-target" {...forwardedProps} />
    </Floating.Target>
  );
});

SideMenuSelectTarget.displayName = '@v2/SideMenu.Select.Target';
export { SideMenuSelectTarget };
