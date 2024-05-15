import clsx from 'clsx';
import { Box } from '../../Box';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { ToggleProvider } from '../context';

interface ToggleGroupProps extends Core.GroupProps {
  group: string;
  label?: React.ReactNode;
  message?: React.ReactNode;
}

type ToggleGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ToggleGroupProps;
}>;

const ToggleGroup = factory<ToggleGroupFactory>((props, ref) => {
  const { children, className, message, orientation, ...forwardedProps } = props;

  return (
    <Box
      {...forwardedProps}
      aria-orientation={orientation}
      data-orientation={orientation}
      className={clsx('v2-toggle-group', className)}
      ref={ref}
    >
      <ToggleProvider value={{}}>
        {children}
        {message}
      </ToggleProvider>
    </Box>
  );
});

export { ToggleGroup, type ToggleGroupProps };
ToggleGroup.displayName = '@v2/Toggle.Group';
