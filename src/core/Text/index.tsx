import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface TextProps {}

export type TextFactory = Core.Factory<{
  ref: HTMLParagraphElement;
  comp: 'p';
  props: TextProps;
}>;

export const Text = factory<TextFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <p {...otherProps} ref={ref} className={clsx('text', className)}>
      {children}
    </p>
  );
});

Text.displayName = '@v2/core/Text';
