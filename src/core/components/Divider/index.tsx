import clsx from 'clsx';
import { Box } from '@/core/components/Box';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { DividerProps } from './Divider.types';
import { DividerContent } from './Content';
import { DividerSeparator } from './Seperator';

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

enum css {
  root = 'v2-divider-root',
  content = 'v2-divider-content',
  separator = 'v2-divider-separator',
}

const Divider = factory<DividerFactory>((props, ref) => {
  const {
    label,
    position = 'start',
    className,
    orientation = 'horizontal',
    ...forwardedProps
  } = props;

  return (
    <Box
      {...forwardedProps}
      data-orientation={orientation}
      aria-orientation={orientation}
      className={clsx(css.root, className)}
      role="separator"
      ref={ref}
    >
      <Divider.Content
        show={position === 'start' ? true : false}
        className={css.content}
        position={position}
        label={label}
      />

      <Divider.Separator className={css.separator} />

      <Divider.Content
        show={position === 'end' ? true : false}
        className={css.content}
        position={position}
        label={label}
      />
    </Box>
  );
});

Divider.Content = DividerContent;

Divider.Separator = DividerSeparator;

Divider.displayName = '@v2/Divider';

type DividerClasses = keyof typeof css;

export { Divider, type DividerProps, type DividerClasses };
