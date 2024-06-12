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
  const {
    fz = 5,
    fw = 2,
    fh = 3,
    className,
    component: Component = 'p',
    ...forwardedProps
  } = props;

  const classNames = clsx(
    css.root,
    `${css.root}--fz-${fz}`,
    `${css.root}--fw-${fw}`,
    `${css.root}--fh-${fh}`,
    className
  );

  return <Component {...forwardedProps} ref={ref} className={classNames} />;
});

Text.displayName = '@v2/Text';
export { Text };
