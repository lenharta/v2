import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export const visuallyHiddenStyles: React.CSSProperties = {
  visibility: 'hidden',
  position: 'absolute',
};

export interface VisuallyHiddenProps extends Core.BaseProps {
  /** Defines inline styles for the element. */
  style?: React.CSSProperties | undefined;
}

export type VisuallyHiddenFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: VisuallyHiddenProps;
}>;

export const VisuallyHidden = factory<VisuallyHiddenFactory>((props, ref) => {
  const { style, className, children, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      className={clsx('visuallyhidden', className)}
      style={{ ...style, ...visuallyHiddenStyles }}
      ref={ref}
    >
      {children}
    </div>
  );
});

VisuallyHidden.displayName = '@v2/core/VisuallyHidden';
