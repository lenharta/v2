import clsx from 'clsx';
import { Box } from '@/core/components/Box';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

interface ActionGroupProps extends Core.GroupProps {}

type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionGroupProps;
}>;

const ActionGroup = factory<ActionGroupFactory>((props, ref) => {
  const { className, orientation = 'vertical', ...forwardedProps } = props;
  return (
    <Box
      {...forwardedProps}
      className={clsx('v2-action-group', className)}
      data-orientation={orientation}
      aria-orientation={orientation}
      ref={ref}
    />
  );
});

ActionGroup.displayName = '@v2/Action.Group';
export { ActionGroup, type ActionGroupProps };
