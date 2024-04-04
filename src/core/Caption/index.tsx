import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface CaptionProps {
  /**
   * Defines the content of the `Caption`.
   * @see https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
   * @default undefined
   */
  children?: React.ReactNode | undefined;
  /**
   * Defines a default html `class` appended to the `Caption` classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'text'
   */
  className?: string | undefined;
}

export type CaptionFactory = Core.Factory<{
  ref: HTMLParagraphElement;
  comp: 'caption';
  props: CaptionProps;
}>;

export const Caption = factory<CaptionFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <caption {...otherProps} ref={ref} className={clsx('caption', className)}>
      {children}
    </caption>
  );
});

Caption.displayName = '@v2/core/Caption';
