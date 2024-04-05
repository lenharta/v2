import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../factory';

export interface VisuallyHiddenProps {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
}

export type VisuallyHiddenFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: VisuallyHiddenProps;
}>;

export const VisuallyHidden = factory<VisuallyHiddenFactory>((props, ref) => {
  const { style, className, ...otherProps } = props;
  const staticStyles: React.CSSProperties = { visibility: 'hidden', position: 'absolute' };
  return (
    <div
      {...otherProps}
      ref={ref}
      className={clsx('visuallyhidden', className)}
      style={{ ...style, ...staticStyles }}
    />
  );
});

VisuallyHidden.displayName = '@v2/core/VisuallyHidden';
