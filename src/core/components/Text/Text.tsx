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
  const { span, children, className, component = 'p', ...forwardedProps } = props;

  let Component: 'p' | 'span' = component;

  if (span) Component = 'span';

  return (
    <Component ref={ref} className={clsx('v2-text', className)} {...forwardedProps}>
      {children}
    </Component>
  );
});

Text.displayName = '@v2/Text';
export { Text };
