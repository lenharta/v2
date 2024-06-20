import clsx from 'clsx';
import { factory } from '@/core';
import { Factory } from '@/types';
import { DividerProps } from './types';
import { DividerContent } from './Content';
import { DividerSeperator } from './Seperator';

const css = {
  root: 'v2-divider',
  label: 'v2-divider-label',
  content: 'v2-divider-content',
  seperator: 'v2-divider-seperator',
};

type DividerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: DividerProps;
  omits: 'children';
  comps: {
    Seperator: typeof DividerSeperator;
    Content: typeof DividerContent;
  };
}>;

const Divider = factory<DividerFactory>((props, ref) => {
  const {
    size = 'sm',
    icon,
    label,
    variant = 'elevated',
    position = 'start',
    className,
    orientation = 'horizontal',
    ...forwardedProps
  } = props;

  return (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      data-orientation={orientation}
      data-position={position}
      className={clsx(
        'v2-divider',
        `v2-divider--size-${size}`,
        `v2-divider--variant-${variant}`,
        className
      )}
      {...forwardedProps}
    >
      <Divider.Seperator variant={variant} size={size} show={position === 'center' || undefined} />
      <Divider.Content variant={variant} size={size} label={label} icon={icon} />
      <Divider.Seperator variant={variant} size={size} show={true} />
    </div>
  );
});

Divider.Content = DividerContent;
Divider.Seperator = DividerSeperator;
Divider.displayName = '@v2/Divider';
export { Divider };
