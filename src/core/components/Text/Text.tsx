import clsx from 'clsx';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';

export type TextFactory = Core.Factory<{
  ref: HTMLParagraphElement;
  props: Core.TextProps;
  element: 'p';
  excluded: 'color';
}>;

export const Text = PolymorphicComponent<TextFactory>((props, ref) => {
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
