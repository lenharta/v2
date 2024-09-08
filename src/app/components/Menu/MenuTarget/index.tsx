import clsx from 'clsx';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';

export type MenuTargetProps = {};

export type MenuTargetFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: MenuTargetProps;
  element: 'button';
}>;

export const MenuTarget = PolymorphicComponent<MenuTargetFactory>((props, ref) => {
  const { children, className, component: Component = 'button' } = props;
  return (
    <Component {...props} ref={ref} className={clsx('v2-menu-target', className)}>
      {children}
    </Component>
  );
});

MenuTarget.displayName = '@v2/Menu.Target';
