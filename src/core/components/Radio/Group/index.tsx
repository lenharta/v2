import clsx from 'clsx';
import { Box } from '../../Box';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { RadioProvider } from '../context';

interface RadioGroupProps extends Core.GroupProps {
  group: string;
  label?: React.ReactNode;
  message?: React.ReactNode;
}

type RadioGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: RadioGroupProps;
}>;

const RadioGroup = factory<RadioGroupFactory>((props, ref) => {
  const { children, className, message, orientation, ...forwardedProps } = props;

  return (
    <Box
      {...forwardedProps}
      aria-orientation={orientation}
      data-orientation={orientation}
      className={clsx('v2-radio-group', className)}
      ref={ref}
    >
      <RadioProvider value={{}}>
        {children}
        {message}
      </RadioProvider>
    </Box>
  );
});

export { RadioGroup, type RadioGroupProps };
RadioGroup.displayName = '@v2/Radio.Group';
