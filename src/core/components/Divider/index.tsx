import clsx from 'clsx';
import { Box } from '@/core/components/Box';
import { Label } from '@/core/components/Label';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

interface DividerProps {
  label?: React.ReactNode;
  position?: Core.Align | 'center' | undefined;
  orientation?: Core.Orientation | undefined;
}

type DividerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  omits: 'children';
  props: DividerProps;
}>;

const Divider = factory<DividerFactory>((props, ref) => {
  const {
    label,
    position = 'left',
    className,
    orientation = 'horizontal',
    ...forwardedProps
  } = props;

  return (
    <Box
      {...forwardedProps}
      data-orientation={orientation}
      aria-orientation={orientation}
      className={clsx('v2-divider', className)}
      role="separator"
      ref={ref}
    >
      {label && <Label component="span" data-position={position} children={label} />}
      <div className="seperator" />
    </Box>
  );
});

Divider.displayName = '@v2/Divider';
export { Divider, type DividerProps };
