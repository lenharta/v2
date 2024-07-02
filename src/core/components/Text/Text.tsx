import clsx from 'clsx';
import { Factory } from '@/types';
import { createPolymorphicFactory } from '@/factory';
import { TextProps } from './types';

type TextFactory = Factory.Config<{
  ref: HTMLParagraphElement;
  comp: 'p';
  omits: 'color';
  props: TextProps;
}>;

const Text = createPolymorphicFactory<TextFactory>((props, ref) => {
  const {
    size = 'sm',
    lead = 'sm',
    span,
    weight = 'reg',
    surface = 'base',
    emphasis = 'med',
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
        `v2-text--${surface}`,
        `v2-text--size-${size}`,
        `v2-text--lead-${lead}`,
        `v2-text--weight-${weight}`,
        `v2-text--emphasis-${emphasis}`,
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
