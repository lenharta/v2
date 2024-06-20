import clsx from 'clsx';
import { Factory } from '@/types';
import { TextProps } from './Text.types';
import { factoryPolymorphic } from '../../factory';

type TextFactory = Factory.Config<{
  ref: HTMLParagraphElement;
  comp: 'p';
  props: TextProps;
}>;

const Text = factoryPolymorphic<TextFactory>((props, ref) => {
  const { children, className, component: Component = 'p', ...forwardedProps } = props;
  return (
    <Component ref={ref} className={clsx('v2-text', className)} {...forwardedProps}>
      {children}
    </Component>
  );
});

Text.displayName = '@v2/Text';
export { Text };
