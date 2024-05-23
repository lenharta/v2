import clsx from 'clsx';
import { Box } from '@/core/components';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ButtonProvider } from '../Button.context';
import { ButtonGroupProps } from '../Button.types';

type ButtonGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ButtonGroupProps;
}>;

const ButtonGroup = factory<ButtonGroupFactory>((props, ref) => {
  const { className, orientation = 'horizontal', ...forwardedProps } = props;
  return (
    <ButtonProvider value={{}}>
      <Box
        {...forwardedProps}
        className={clsx('v2-button-group', className)}
        data-orientation={orientation}
        aria-orientation={orientation}
        ref={ref}
      />
    </ButtonProvider>
  );
});

ButtonGroup.displayName = '@v2/Button.Group';
export { ButtonGroup, type ButtonGroupFactory };
