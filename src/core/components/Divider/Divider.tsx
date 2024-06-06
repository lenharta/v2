import clsx from 'clsx';
import { Factory } from '@/types';
import { DividerProps } from './types';
import { factory, Box, Text } from '@/core';
import { DividerSeparator } from './Seperator';
import { DividerContent } from './Content';

type DividerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  omits: 'children';
  props: DividerProps;
  comps: {
    Content: typeof DividerContent;
    Separator: typeof DividerSeparator;
  };
}>;

const Divider = factory<DividerFactory>((props, ref) => {
  const {
    icon,
    label,
    position = 'start',
    className,
    orientation = 'horizontal',
    iconPosition = 'start',
    ...forwardedProps
  } = props;

  return (
    <Box
      {...forwardedProps}
      data-position={position}
      data-orientation={orientation}
      aria-orientation={orientation}
      className={clsx('v2-divider', className)}
      role="separator"
      ref={ref}
    >
      {(icon || label) && (
        <span className="v2-divider-inner">
          {icon && iconPosition === 'start' && icon}
          {label && <Text>{label}</Text>}
          {icon && iconPosition === 'end' && icon}
        </span>
      )}
    </Box>
  );
});

Divider.Content = DividerContent;
Divider.Separator = DividerSeparator;
Divider.displayName = '@v2/Divider.Root';
export { Divider };
