import clsx from 'clsx';
import { Core } from '@/types';
import { Floating } from '@/core';
import { PolymorphicComponent } from '@/factory';

export type MenuTargetProps = {
  isOpen?: boolean;
};

export type MenuTargetFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: MenuTargetProps;
  element: 'button';
  excluded: 'children';
}>;

export const MenuTarget = PolymorphicComponent<MenuTargetFactory>(
  ({ isOpen, className, component: Component = 'button', ...props }, ref) => {
    return (
      <Floating.Target>
        <Component
          {...props}
          ref={ref}
          data-open={isOpen || undefined}
          className={clsx('v2-menu-target', className)}
        >
          <span className="v2-menu-target-line v2-menu-target-line-1">
            <div className="v2-menu-target-cell v2-menu-target-cell-1" />
            <div className="v2-menu-target-cell v2-menu-target-cell-2" />
            <div className="v2-menu-target-cell v2-menu-target-cell-3" />
          </span>

          <span className="v2-menu-target-line v2-menu-target-line-2">
            <div className="v2-menu-target-cell v2-menu-target-cell-4" />
            <div className="v2-menu-target-cell v2-menu-target-cell-5" />
            <div className="v2-menu-target-cell v2-menu-target-cell-6" />
          </span>

          <span className="v2-menu-target-line v2-menu-target-line-3">
            <div className="v2-menu-target-cell v2-menu-target-cell-7" />
            <div className="v2-menu-target-cell v2-menu-target-cell-8" />
            <div className="v2-menu-target-cell v2-menu-target-cell-9" />
          </span>
        </Component>
      </Floating.Target>
    );
  }
);

MenuTarget.displayName = '@v2/Menu.Target';
