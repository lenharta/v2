import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface TextProps {
  /**
   * Defines the content of the `Text`.
   * @see https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
   * @default undefined
   */
  children?: React.ReactNode | undefined;
  /**
   * Defines a default html `class` appended to the `Text` classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'text'
   */
  className?: string | undefined;
}

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
