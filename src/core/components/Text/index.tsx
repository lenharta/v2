import clsx from 'clsx';
import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';

interface TextProps {}

type TextFactory = Factory.Config<{
  ref: HTMLParagraphElement;
  comp: 'p';
  props: TextProps;
}>;

const Text = factoryPolymorphic<TextFactory>((props, ref) => {
  const { className, component: Component = 'p', ...forwardedProps } = props;
  return <Component {...forwardedProps} ref={ref} className={clsx('v2-text', className)} />;
});

Text.displayName = '@v2/Text';
export { Text, type TextProps };
