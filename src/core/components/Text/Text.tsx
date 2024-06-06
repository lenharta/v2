import clsx from 'clsx';
import { Factory } from '@/types';
import { TextProps } from './types';
import { factoryPolymorphic } from '@/core';

const css = {
  root: 'v2-text',
};

type TextFactory = Factory.Config<{
  ref: HTMLParagraphElement;
  comp: 'p';
  props: TextProps;
}>;

const Text = factoryPolymorphic<TextFactory>((props, ref) => {
  const { className, component: Component = 'p', ...forwardedProps } = props;
  return <Component {...forwardedProps} ref={ref} className={clsx(css.root, className)} />;
});

Text.displayName = '@v2/Text';
export { Text, type TextProps };
