import clsx from 'clsx';
import { Box } from '../../Box';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { CheckboxProvider } from '../context';

interface CheckboxGroupProps extends Core.GroupProps {
  group: string;
  label?: React.ReactNode;
  message?: React.ReactNode;
}

type CheckboxGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: CheckboxGroupProps;
}>;

const CheckboxGroup = factory<CheckboxGroupFactory>((props, ref) => {
  const { children, className, message, orientation, ...forwardedProps } = props;

  return (
    <Box
      {...forwardedProps}
      aria-orientation={orientation}
      data-orientation={orientation}
      className={clsx('v2-checkbox-group', className)}
      ref={ref}
    >
      <CheckboxProvider value={{}}>
        {children}
        {message}
      </CheckboxProvider>
    </Box>
  );
});

export { CheckboxGroup, type CheckboxGroupProps };
CheckboxGroup.displayName = '@v2/Checkbox.Group';
