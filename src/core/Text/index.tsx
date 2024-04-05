import clsx from 'clsx';
import { factory } from '../factory';
import { Core, Factory } from '@/types';

export interface TextProps extends Core.BaseProps {}

export type TextFactory = Factory.Config<{
  ref: HTMLParagraphElement;
  comp: typeof Component;
  props: TextProps;
}>;

const Component = 'p' as const;

export const Text = factory<TextFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref} className={clsx('text', className)}>
      {children}
    </Component>
  );
});

Text.displayName = '@v2/core/Text';
