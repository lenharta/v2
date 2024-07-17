import clsx from 'clsx';
import { Factory } from '@types';
import { createPolymorphicFactory } from '@factory';
import { TextProps } from './types';

type TextFactory = Factory.Config<{
  ref: HTMLParagraphElement;
  comp: 'p';
  omits: 'color';
  props: TextProps;
}>;

const Text = createPolymorphicFactory<TextFactory>((props, ref) => {
  const {
    size,
    lead,
    span,
    weight,
    variant,
    children,
    className,
    component = 'p',
    ...forwardedProps
  } = props;

  let Component: 'p' | 'span' = component;

  if (span) Component = 'span';

  return (
    <Component
      ref={ref}
      className={clsx(
        'v2-text',
        { [`v2-text--${variant}`]: variant !== undefined },
        { [`v2-text--size-${size}`]: size !== undefined },
        { [`v2-text--lead-${lead}`]: lead !== undefined },
        { [`v2-text--weight-${weight}`]: weight !== undefined },
        className
      )}
      {...forwardedProps}
    >
      {children}
    </Component>
  );
});

Text.displayName = '@v2/Text';
export { Text };
