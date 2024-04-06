import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { ActionGroupContextValue, ActionGroupProvider } from '@/core/Action/context';

export interface ActionGroupProps extends Core.GroupProps, ActionGroupContextValue {}

export type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionGroupProps;
}>;

export const ActionGroup = factory<ActionGroupFactory>((props, ref) => {
  const {
    size,
    variant,
    disabled,
    children,
    className,
    orientation = 'horizontal',
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      aria-orientation={orientation}
      className={clsx('button-group', className)}
      role="group"
      ref={ref}
    >
      <ActionGroupProvider value={{ size, variant, disabled }}>{children}</ActionGroupProvider>
    </div>
  );
});

ActionGroup.displayName = '@v2/core/Action.Group';
